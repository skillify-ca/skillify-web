import React, { useEffect, useState } from "react";
import ExpandableContainer from "../ExpandableContainer";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Data } from "../../../graphql/coding/userBadges/fetchUserBadges";
import { User } from "../../../graphql/fetchUserProfile";
import _ from "lodash";

export type BadgesSectionProps = {
  user: User;
  data: User;
};
export type userCodingBadge = {
  id: number;
};
export type unitProps = {
  unitTitle: string;
  codingBadges: codingBadges[];
};
export type codingBadges = {
  id: number;
  title: string;
  userCodingBadge: userCodingBadge[];
  isAwarded: boolean;
};
export type unit = unitProps[];
const AcheivementComponent = ({ data }) => {
  const [transformedData, setTransformedData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const handleBadgeClick = (inputBadge: codingBadges) => {
    setTransformedData((prev) => {
      const updatedData = prev.map((unit: unitProps) => {
        return {
          ...unit,
          codingBadges: unit.codingBadges.map((badge) => {
            if (badge.id == inputBadge.id) {
              return {
                ...badge,
                isAwarded: !badge.isAwarded,
              };
            } else {
              return badge;
            }
          }),
        };
      });

      return updatedData;
    });
  };

  const transformData = (data: Data) => {
    const transformedOutput = data?.intro_course_unit.map((unit) => {
      return {
        unitTitle: unit.title,
        codingBadges: unit.coding_badges.map((badge) => {
          return {
            id: badge.id,
            title: badge.title,
            userCodingBadge: badge.user_coding_badges.map((b) => b),
            isAwarded: badge.user_coding_badges.length > 0,
          };
        }),
      };
    });
    return transformedOutput;
  };
  useEffect(() => {
    if (data != undefined) {
      const updatedData = transformData(data);

      setTransformedData(updatedData);
    }
  }, [data]);

  const oldData = _.cloneDeep(data);
  return (
    <ExpandableContainer open={true} title={""}>
      {JSON.stringify(transformedData)}
      <div className="p-4 shadow-md bg-slate-300 dark:bg-transparent">
        <div className="absolute px-16 right-1">
          <button
            onClick={() => setEditMode(!editMode)}
            className="w-5 h-5 cursor-pointer hover:text-yellow-600"
          >
            {editMode ? (
              <PencilAltIcon className="w-5 h-5 cursor-pointer text-yellow-600" />
            ) : (
              <PencilAltIcon className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
            )}
          </button>
        </div>
        <div>
          {transformedData.map((unit) => {
            if (unit.codingBadges.length > 0) {
              return (
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-6">
                    <div className="py-4 text-center text-gray-400 bg-gray-200 rounded-full">
                      {unit.unitTitle}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 mb-8 text-base sm:mb-0  ">
                      {unit.codingBadges.map((badge) => (
                        <div className="flex flex-col items-center justify-center">
                          <button
                            disabled={!editMode}
                            onClick={() => handleBadgeClick(badge)}
                          >
                            {/* <button onClick={() => handleBadgeClick(badge)}> */}
                            <img
                              className="w-28"
                              src={
                                badge.isAwarded
                                  ? "/images/profile/achievement-badge-active.svg"
                                  : "/images/profile/achievement-badge.svg"
                              }
                            />
                          </button>
                          <p className="text-base">{unit.unitTitle}</p>
                          <p className="mb-8 text-base sm:mb-0">
                            {badge.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {oldData?.intro_course_unit.map((unit) => {
          return (
            <div>
              <div className="grid grid-cols-1 mb-16 sm:grid-cols-3 mt-7">
                {unit.coding_badges.map((badge) => (
                  <div className="flex flex-col items-center justify-center">
                    <button onClick={() => handleBadgeClick(badge)}>
                      <img
                        className="w-28"
                        src={
                          badge.user_coding_badges.length > 0
                            ? "/images/profile/achievement-badge-active.svg"
                            : "/images/profile/achievement-badge.svg"
                        }
                      />
                    </button>
                    <p className="text-base">{unit.title}</p>
                    <p className="mb-8 text-base sm:mb-0">{badge.title}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ExpandableContainer>
  );
};

export default AcheivementComponent;
