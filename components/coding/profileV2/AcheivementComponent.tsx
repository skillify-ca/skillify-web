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
import _ from "lodash";
import SingleQuestionInputStories from "../../ui/SingleQuestionInput.stories";

export type BadgesSectionProps = {
  user: User;
  data: User;
};

const AcheivementComponent = ({ user, data }) => {
  const [units, setUnits] = useState<IntroCourseUnit[]>([]);
  const [editMode, setEditMode] = useState(false);

  const handleBadgeClick = (badge: CodingBadge) => {
    const updatedUnit = _.cloneDeep(units);

    if (editMode) {
      updatedUnit.map((unit: IntroCourseUnit) =>
        unit.coding_badges.map((userBadge: CodingBadge) => {
          if (userBadge.id == badge.id) {
            userBadge.user_coding_badges.push({ id: 20 });
          }
        })
      );
    }
    setUnits(updatedUnit);
  };

  useEffect(() => {
    if (data != undefined) {
      const updatedData = _.cloneDeep(data);

      setUnits(updatedData.intro_course_unit);
    }
  }, [data]);
  return (
    <ExpandableContainer open={true} title={""}>
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
        {units.map((unit) => {
          if (unit.coding_badges.length > 0) {
            return (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-6">
                  <div className="py-4 text-center text-gray-400 bg-gray-200 rounded-full">
                    {unit.title}
                  </div>
                </div>
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
          }
        })}
      </div>
    </ExpandableContainer>
  );
};

export default AcheivementComponent;
