// we're going to use the response structure instead of transforming to a new type

import React, { useState } from "react";
import { PencilAltIcon } from "@heroicons/react/outline";

import { useQuery } from "@apollo/client";
import {
  CodingBadge,
  FetchBadgeResponse,
  FETCH_CODING_BADGES,
  IntroCourseUnit,
} from "../../../graphql/coding/userBadges/fetchUserBadges";

export type AchievementComponentProps = {
  userId: string;
};

const AcheivementComponent = ({ userId }: AchievementComponentProps) => {
  const [unitBadges, setUnitBadges] = useState<IntroCourseUnit[]>();
  const [editMode, setEditMode] = useState(false);

  const { data } = useQuery<FetchBadgeResponse>(FETCH_CODING_BADGES, {
    variables: {
      userId: userId,
    },
    onCompleted: (data) => {
      setUnitBadges(data.intro_course_unit);
    },
  });

  // this function will take in the original list of badge data (fetched from the query), and the edited badge data
  // it should output an object containing two arrays: a list of badgeIds to add, and a list of userBadgeIds to remove
  // you need to find the diff between the two input arrays, then send them to the database to delete and upsert

  const findBadgeDiff = (
    initialSet: IntroCourseUnit[],
    currentSet: IntroCourseUnit[]
  ) => {
    // give you some ideas on how you might be able to make this easier to compare but I didn't figure it out yet
    const initialBadgeArray = initialSet.map((unit) => {
      return unit.coding_badges.map((badge) => {
        return {
          badgeId: badge.id,
          userBadgeId: badge.user_coding_badges[0].id,
        };
      });
    });

    const finalBadgeArray = currentSet.map((unit) => {
      return unit.coding_badges.map((badge) => {
        return {
          badgeId: badge.id,
          userBadgeId: badge.user_coding_badges[0].id,
        };
      });
    });

    // final lists here
    const badgesToAdd = [];
    const badgesToDelete = [];
    return { badgesToAdd, badgesToDelete };
  };

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
      {unitBadges && (
        <div>
          {unitBadges.map((unit) => {
            if (unit.coding_badges.length > 0) {
              return (
                <div className="mb-4 sm:m-4">
                  <UnitBadgeSection
                    unit={unit}
                    editMode={editMode}
                    setUnitBadges={setUnitBadges}
                  />
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default AcheivementComponent;

type UnitBadgeSectionProps = {
  unit: IntroCourseUnit;
  editMode: boolean;
  setUnitBadges: React.Dispatch<React.SetStateAction<IntroCourseUnit[]>>;
};

function UnitBadgeSection({
  unit,
  editMode,
  setUnitBadges,
}: UnitBadgeSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function getNumEarnedBadgesForUnit(codingBages: CodingBadge[]) {
    return codingBages.filter((badge) => badge.user_coding_badges.length > 0)
      .length;
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
            <h3 className="text-xl font-bold text-white">{unit.title}</h3>
            <p className="font-bold text-charmander">
              {getNumEarnedBadgesForUnit(unit.coding_badges)} Badges Earned
            </p>
          </div>
        </div>
      </div>
      {isOpen && unit && (
        <div className="grid grid-cols-1 mb-8 text-base sm:grid-cols-3 bg-slate-800 sm:mb-0 ">
          {unit.coding_badges.map((badge) => (
            <div key={badge.id} className="m-4">
              <CodingBadgeUnit
                disabled={!editMode}
                badge={badge}
                setUnitBadges={setUnitBadges}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

type CodingBadgeUnitProps = {
  disabled: boolean;
  badge: CodingBadge;
  setUnitBadges: React.Dispatch<React.SetStateAction<IntroCourseUnit[]>>;
};

function CodingBadgeUnit({
  disabled,
  badge,
  setUnitBadges,
}: CodingBadgeUnitProps) {
  const handleBadgeClick = (inputBadge: CodingBadge) => {
    setUnitBadges((prev) => {
      const updatedUnitBadges: IntroCourseUnit[] = prev.map((unit) => {
        return {
          ...unit,
          coding_badges: unit.coding_badges.map((badge) => {
            if (inputBadge.id == badge.id) {
              if (badge.user_coding_badges.length > 0) {
                return {
                  ...badge,
                  user_coding_badges: [],
                };
              } else {
                return {
                  ...badge,
                  user_coding_badges: [{ id: Math.random() }],
                };
              }
            }
            return badge;
          }),
        };
      });
      return updatedUnitBadges;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-white bg-slate-600 border-slate-300">
      <button
        className=" h-28"
        disabled={disabled}
        onClick={() => handleBadgeClick(badge)}
      >
        <img
          className="transition-all transform border-4 rounded-full shadow-lg w-28 h-28 hover:scale-110"
          src={
            badge.user_coding_badges.length > 0
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
