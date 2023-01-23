import React, { useState } from "react";
import { PencilAltIcon } from "@heroicons/react/outline";
import { useMutation, useQuery } from "@apollo/client";
import {
  CodingBadge,
  FetchBadgeResponse,
  FETCH_CODING_BADGES,
  IntroCourseUnit,
} from "../../../graphql/coding/userBadges/fetchUserBadges";
import { Button } from "../../ui/Button";
import {
  INSERT_USER_CODING_BADGES,
  DELETE_USER_CODING_BADGES,
} from "../../../graphql/coding/userBadges/updateUserCodingBadges";
import UnitBadgeSection from "./achievementcomponenets/UnitBadgeSection";
import handleOnSaveButtonClick from "./achievementcomponenets/handleSaveOnClick";

export type AchievementComponentProps = {
  userId: string;
  isEditable: boolean;
};

const AcheivementComponent = ({
  userId,
  isEditable,
}: AchievementComponentProps) => {
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

  const [saveAddedBadges] = useMutation(INSERT_USER_CODING_BADGES, {
    refetchQueries: [{ query: FETCH_CODING_BADGES }],
  });
  const [saveRemovedBadges] = useMutation(DELETE_USER_CODING_BADGES, {
    refetchQueries: [{ query: FETCH_CODING_BADGES }],
  });

  const separateBadges = (
    changedBadgesList: CodingBadge[],
    initialBadgeList: CodingBadge[]
  ) => {
    const addedBadgesTemp: CodingBadge[] = [];
    const removedBadgesTemp: CodingBadge[] = [];
    changedBadgesList.forEach((badge: CodingBadge) => {
      const index = initialBadgeList.findIndex(
        (initialBadge) => initialBadge.id === badge.id
      );
      if (
        badge.user_coding_badges.length > 0 &&
        initialBadgeList.find((initBadge) => badge.id == initBadge.id)
          .user_coding_badges.length === 0
      ) {
        addedBadgesTemp.push(badge);
      } else if (
        badge.user_coding_badges.length === 0 &&
        initialBadgeList[index].user_coding_badges.length > 0
      ) {
        removedBadgesTemp.push(badge);
      }
    });
    const addedBadges = addedBadgesTemp.map((badge) => {
      return { badgeId: badge.id, userId: userId };
    });
    const removedBadges = removedBadgesTemp.map((badge) => {
      return { badgeId: badge.id, userId: userId };
    });
    return { addedBadges, removedBadges };
  };

  // this function will take in the original list of badge data (fetched from the query), and the edited badge data
  // it should output an object containing two arrays: a list of badgeIds to add, and a list of userBadgeIds to remove
  //  the diff between the two input arrays are then send them to the database to delete and upsert
  const findBadgeDiff = (
    initialSet: IntroCourseUnit[],
    currentSet: IntroCourseUnit[]
  ) => {
    const initialBadgeArray = initialSet.flatMap((unit) =>
      unit.coding_badges.map((badge) => badge)
    );
    const finalBadgeArray = currentSet.flatMap((unit) =>
      unit.coding_badges.map((badge) => badge)
    );

    const changedBadgesList = finalBadgeArray.filter((finalBadge) => {
      const initialBadge = initialBadgeArray.find(
        (initialBadge) =>
          finalBadge.id === initialBadge.id &&
          finalBadge.user_coding_badges === initialBadge.user_coding_badges
      );
      return !initialBadge;
    });
    //

    return {
      initialBadgeArray,
      finalBadgeArray,
      changedBadgesList,
    };
  };

  return (
    <div className="sm:p-4 sm:shadow-md bg-slate-300 dark:bg-slate-900">
      <div className="flex justify-end w-full mb-4">
        {isEditable && (
          <div>
            <Button
              label={"Save"}
              onClick={() =>
                handleOnSaveButtonClick(
                  separateBadges,
                  findBadgeDiff,
                  data,
                  unitBadges,
                  saveAddedBadges,
                  saveRemovedBadges
                )
              }
            ></Button>
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
        )}
      </div>
      {unitBadges && (
        <div>
          {unitBadges.map((unit, index) => {
            if (unit.coding_badges.length > 0) {
              return (
                <div className="mb-4 sm:m-4" key={index}>
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
