import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../lib/authContext";
import { supabase } from "../../../../lib/supabase";

export default function Badges() {
  const { user } = useAuth();
  const [badges, setBadges] = useState([]);
  const [userBadges, setUserBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const { data, error } = await supabase.from("coding_badges").select("*");
        if (error) {
          throw error;
        }
        setBadges(data);
      } catch (error) {
        console.error("Error fetching badges:", error);
      }
    };

    const fetchUserBadges = async () => {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from("user_coding_badges")
          .select("badgeId:badge_id")
          .eq("user_id", user.uid);
        if (error) {
          throw error;
        }
        setUserBadges(data.map((b) => b.badgeId));
      } catch (error) {
        console.error("Error fetching user badges:", error);
      }
    };

    Promise.all([fetchBadges(), fetchUserBadges()]).finally(() =>
      setLoading(false)
    );
  }, [user]);

  const userBadgesIds = userBadges;

  return (
    <div className="h-screen overflow-scroll">
      <div className="p-16">
        <h1 className="text-3xl font-bold">Badges</h1>
        <p>Here are the badges you have earned:</p>
      </div>
      {loading ? <p>Loading...</p> : null}
      {badges ? (
        <div className="grid grid-cols-4 gap-16 p-16 pt-0 place-items-center">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center justify-center p-4 h-96 bg-backgroundSecondary w-80"
            >
              <img
                className="w-64 h-64 mb-4"
                src={
                  userBadgesIds?.includes(badge.id)
                    ? badge.image
                    : "/images/lock.png"
                }
                alt={badge.title}
              />
              <h2 className="font-bold">{badge.title}</h2>
              <p className="line-clamp-2">{badge.description}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

Badges.premium = true;
