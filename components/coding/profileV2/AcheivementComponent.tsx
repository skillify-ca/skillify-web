import React, { useEffect, useState } from "react";
import ExpandableContainer from "../ExpandableContainer";

import { IntroCourseUnit } from "../../../graphql/coding/userBadges/fetchUserBadges";
import Link from "next/link";

export type BadgesSectionProps = {
  user: any;
  data: any;
};

const AcheivementComponent = ({ user, data }) => {
  const [units, setUnits] = useState<IntroCourseUnit[]>([]);
  useEffect(() => {
    if (typeof data !== "undefined") {
      setUnits(data.intro_course_unit);
    }
  }, [data]);
  return (
    <ExpandableContainer open={true} title={""}>
      <div className="p-4 shadow-md bg-slate-300 dark:bg-transparent">
        {units.map((unit) => {
          if (unit.coding_badges.length > 0) {
            return (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-6">
                  <div className="py-4 text-center text-gray-400 bg-gray-200 rounded-full">
                    {unit.title}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-6 px-4">
                    <Link href={"/goals"}>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </Link>
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
    </ExpandableContainer>
  );
};

export default AcheivementComponent;
