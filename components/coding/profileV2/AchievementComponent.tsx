import React, { useEffect, useState } from "react";
import ExpandableContainer from "../ExpandableContainer";
import { PencilAltIcon } from "@heroicons/react/outline";
import { User } from "../../../graphql/fetchUserProfile";
import _ from "lodash";
import { transformUserBadgeData } from "./AchievementTransformData";
import { Button } from "../../ui/Button";

export type BadgesSectionProps = {
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

  useEffect(() => {
    if (data) {
      const updatedData = transformUserBadgeData(data);

      setTransformedData(updatedData);
    }
  }, [data]);

  return (
    <ExpandableContainer open={true} title={""}>
      <div className="p-4 shadow-md bg-slate-300 dark:bg-transparent">
        <div className="absolute right-1">
          <div className="flex flex-row items-center space-x-4">
            <Button label="Save Badges"></Button>

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
      </div>
    </ExpandableContainer>
  );
};

export default AcheivementComponent;
