import React, { useEffect, useState } from "react";
import ExpandableContainer from "../ExpandableContainer";
import { PencilAltIcon } from "@heroicons/react/outline";
import {
  CodingBadge,
  Data,
  IntroCourseUnit,
} from "../../../graphql/coding/userBadges/fetchUserBadges";
import Link from "next/link";
import { User } from "../../../graphql/fetchUserProfile";
import SingleQuestionInputStories from "../../ui/SingleQuestionInput.stories";
import _ from "lodash";

export type BadgesSectionProps = {
  user: User;
  data: User;
};

const AcheivementComponent = ({ user, data }) => {
  const [units, setUnits] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const handleBadgeClick = (badge) => {
    // const updatedData = units;

    // setUnits(updatedData);
    setUnits((prev) => {
      console.log("prev", prev);

      const test = prev.map((unit) => {
        return unit.codingBadges.map((codingBadge) => {
          if (codingBadge.id == badge.id) {
            return {
              ...codingBadge,
              isAwarded: true,
            };
            // codingBadge.userCodingBadge.push({ id: 20 });
          }
        });
      });
      console.log("test", test);
      return prev;
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

      setUnits(updatedData);
    }
  }, [data]);

  const oldData = _.cloneDeep(data);
  return (
    <ExpandableContainer open={true} title={""}>
      {JSON.stringify(units)}
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
        {units &&
          units.map((unit) => {
            return (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-6">
                  <div className="py-4 text-center text-gray-400 bg-gray-200 rounded-full">
                    {unit?.unitTitle}
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
                              badge.userCodingBadge.length > 0
                                ? "/images/profile/achievement-badge-active.svg"
                                : "/images/profile/achievement-badge.svg"
                            }
                          />
                        </button>
                        <p className="text-base">{unit.unitTitle}</p>
                        <p className="mb-8 text-base sm:mb-0">{badge.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
