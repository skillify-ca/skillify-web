"use client"; // Add this if using App Router

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useAuth } from "../../../../lib/authContext";
import { logToSlack } from "../../../../pages/api/slack/slackLogger";
import { Button } from "../../../ui/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

// Checkout form component
const CheckoutForm = ({
  timeSlot,
  amount,
  onSuccess,
}: {
  timeSlot: string;
  amount: number;
  onSuccess: () => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/booking-success`,
      },
    });

    if (submitError) {
      setError(submitError.message || "Payment failed");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="font-semibold text-lg">{timeSlot}</p>
        <p className="text-2xl font-bold text-blue-600 mt-2">${amount}</p>
      </div>

      <div className="bg-white p-4 rounded-lg border">
        <PaymentElement />
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg">{error}</div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

const BookingCheckoutPage = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { user } = useAuth();

  const BOOKING_PRICE = 30;

  // Your existing utility functions
  function getNextWeekdayDateTime(
    weekday: number,
    hour: number,
    minute: number
  ) {
    const now = new Date();
    const result = new Date(now);
    const daysAhead = (7 + weekday - now.getDay()) % 7 || 7;
    result.setDate(now.getDate() + daysAhead);
    result.setHours(hour, minute, 0, 0);
    return result;
  }

  function formatDateTime(date: Date) {
    return date.toLocaleString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  const timeSlots = [
    formatDateTime(getNextWeekdayDateTime(1, 18, 0)), // Monday 6:00 PM
    formatDateTime(getNextWeekdayDateTime(1, 19, 0)), // Monday 7:00 PM
    formatDateTime(getNextWeekdayDateTime(2, 11, 0)), // Tuesday 10:00 AM
    formatDateTime(getNextWeekdayDateTime(2, 12, 0)), // Tuesday 11:00 AM
  ];

  const handleBack = () => {
    setSelectedTimeSlot(null);
    setClientSecret(null);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Booking</h1>

      {!selectedTimeSlot ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Select a Time Slot:</h2>
          <div className="grid grid-cols-1 gap-3 max-w-2xl">
            {timeSlots.map((slot) => (
              <div
                key={slot}
                className="border-2 rounded-lg p-4 grid grid-cols-[1fr_auto] gap-4 items-center hover:border-blue-400 transition-colors"
              >
                <p className="text-lg">{slot}</p>
                <a
                  href="https://book.stripe.com/00wdR91KrdfOfHK7Vo0480E"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    label={`Reserve`}
                    onClick={() => {
                      logToSlack(`New Coaching Request Income Pre-Stripe - Email: ${user.email} Time Slot: ${slot}`);
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-xl">
          <button
            onClick={handleBack}
            className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            ← Back to time slots
          </button>

          {clientSecret && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: { theme: "stripe" },
              }}
            >
              <CheckoutForm
                timeSlot={selectedTimeSlot}
                amount={BOOKING_PRICE}
                onSuccess={() => {
                  // This will redirect to /booking-success
                  console.log("Payment completed!");
                }}
              />
            </Elements>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingCheckoutPage;
