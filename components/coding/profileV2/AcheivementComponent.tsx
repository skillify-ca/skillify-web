import React, { useEffect, useState } from "react";
import ExpandableContainer from "../ExpandableContainer";
import { PencilAltIcon } from "@heroicons/react/outline";
import { IntroCourseUnit } from "../../../graphql/coding/userBadges/fetchUserBadges";
import Link from "next/link";
import { User } from "../../../graphql/fetchUserProfile";

export type BadgesSectionProps = {
  user: User;
  data: User;
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
                      <PencilAltIcon className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
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
