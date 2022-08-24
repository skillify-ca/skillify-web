import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  FETCH_CODING_BADGES,
  IntroCourseUnit,
} from "../../graphql/coding/userBadges/fetchUserBadges";

export type BadgesSectionProps = {
  user: any;
};

export default function BadgesSection({ user }: BadgesSectionProps) {
  const { data } = useQuery(FETCH_CODING_BADGES, {
    variables: {
      userId: user.uid,
    },
  });

  const [units, setUnits] = useState<IntroCourseUnit[]>([]);
  useEffect(() => {
    if (typeof data !== "undefined") {
      setUnits(data.intro_course_unit);
    }
  }, [data]);

  return (
    <div className="p-4 shadow-md bg-slate-300">
      {units.map((unit) => {
        if (unit.coding_badges.length > 0) {
          return (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-6">
                <div className="py-4 text-center text-gray-400 bg-gray-200 rounded-full">
                  {unit.title}
                </div>
              </div>
              <div className="grid grid-cols-1 mb-16 sm:grid-cols-3 mt-7">
                {unit.coding_badges.map((badge) => (
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
                      {badge.user_coding_badges.length > 0 ? (
                        <img
                          className="w-28"
                          src="/images/profile/achievement-badge-active.svg"
                        ></img>
                      ) : (
                        <img
                          className="w-28"
                          src="/images/profile/achievement-badge.svg"
                        ></img>
                      )}
                    </div>
                    <p className="text-base">{unit.title}</p>
                    <p className="mb-8 text-base sm:mb-0">{badge.title}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
