import React, { useEffect, useState } from "react";
import ExpandableContainer from "../ExpandableContainer";
import { PencilAltIcon } from "@heroicons/react/outline";
import { User } from "../../../graphql/fetchUserProfile";
import { transformUserBadgeData } from "./AchievementTransformData";
import { useQuery } from "@apollo/client";
import { FETCH_CODING_BADGES } from "../../../graphql/coding/userBadges/fetchUserBadges";

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
const AcheivementComponent = ({ user }) => {
  const { data } = useQuery(FETCH_CODING_BADGES, {
    variables: {
      userId: user.uid,
    },
  });
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
    <div className="sm:shadow-md sm:p-4 sm:bg-slate-300 dark:bg-transparent">
      <div className="flex justify-end w-full mb-4">
        <button
          onClick={() => setEditMode(!editMode)}
          className="w-5 h-5 cursor-pointer hover:text-yellow-600"
        >
          {editMode ? (
            <PencilAltIcon className="w-5 h-5 text-yellow-600 cursor-pointer" />
          ) : (
            <PencilAltIcon className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
          )}
        </button>
      </div>
      <div>
        {transformedData.map((unit) => {
          if (unit.codingBadges.length > 0) {
            return (
              <div className="mb-4 sm:m-4">
                <UnitBadgeSection
                  unit={unit}
                  editMode={editMode}
                  handleBadgeClick={handleBadgeClick}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AcheivementComponent;

function UnitBadgeSection({ unit, editMode, handleBadgeClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function getNumEarnedBadgesForUnit(codingBages) {
    return codingBages.filter((badge) => badge.isAwarded).length;
  }

  return (
    <div>
      <div className="grid grid-cols-1">
        <div
          className="flex p-4 cursor-pointer bg-slate-800 hover:bg-slate-700 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={unit.image}
            className="object-cover w-24 h-24 transition-all transform bg-red-300 rounded-lg group-hover:scale-110"
          />
          <div className="flex flex-col justify-center px-4">
            <h3 className="text-xl font-bold text-white">{unit.unitTitle}</h3>
            <p className="font-bold text-charmander">
              {getNumEarnedBadgesForUnit(unit.codingBadges)} Badges Earned
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="grid grid-cols-1 mb-8 text-base sm:grid-cols-3 bg-slate-800 sm:mb-0 ">
          {unit.codingBadges.map((badge) => (
            <div className="m-4">
              <CodingBadge
                disabled={!editMode}
                handleBadgeClick={handleBadgeClick}
                badge={badge}
                unit={unit}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CodingBadge({ disabled, handleBadgeClick, badge, unit }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-white bg-slate-600 border-slate-300">
      <button
        className=" h-28"
        disabled={disabled}
        onClick={() => handleBadgeClick(badge)}
      >
        {/* <button onClick={() => handleBadgeClick(badge)}> */}
        <img
          className="transition-all transform border-4 rounded-full shadow-lg w-28 h-28 hover:scale-110"
          src={
            badge.isAwarded
              ? badge.image
                ? badge.image
                : "/images/profile/achievement-badge-active.svg"
              : "/images/profile/achievement-badge.svg"
          }
        />
      </button>
      <div className="flex flex-col items-center justify-center h-full mt-4 ">
        <p className="h-full text-base sm:mb-0">{badge.title}</p>
      </div>
    </div>
  );
}
