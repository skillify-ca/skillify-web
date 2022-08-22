export interface cardOptions {
  question: string;
  answer: string;
}

export const CardColorProblemData: cardOptions[] = [
  {
    question:
      "You buy groceries with a card. The money comes directly from your bank account.",
    answer: "debit",
  },
  {
    question: "You use this card to purchase items in a store",
    answer: "both",
  },
  {
    question:
      "You get a haircut and use a card to pay. You receive a bill later to pay the transaction.",
    answer: "credit",
  },
  {
    question: "You miss a payment on the card and are charged a late fee.",
    answer: "credit",
  },
  {
    question: "You lose this card and need to report it lost and get a new one",
    answer: "both",
  },
  {
    question:
      "You purchase shoes with a card. There isn't enough money in your account and you are charged an overdraft fee",
    answer: "debit",
  },
  {
    question:
      "You apply to get this card and are approved with a spending limit.",
    answer: "credit",
  },
  {
    question: "You use a PIN to make purchase and withdraw money from an ATM",
    answer: "debit",
  },
];
