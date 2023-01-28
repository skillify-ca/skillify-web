import React, { useState } from "react";
import { PencilAltIcon } from "@heroicons/react/outline";
import { useMutation, useQuery } from "@apollo/client";
import {
  FetchBadgeResponse,
  FETCH_CODING_BADGES,
  IntroCourseUnit,
} from "../../../../graphql/coding/userBadges/fetchUserBadges";
import { Button } from "../../../ui/Button";
import {
  INSERT_USER_CODING_BADGES,
  DELETE_USER_CODING_BADGES,
} from "../../../../graphql/coding/userBadges/updateUserCodingBadges";
import UnitBadgeSection from "./UnitBadgeSection";
import findBadgeDiff from "./findBadgeDiff";
import {
  FetchUserRoleData,
  FETCH_USER_ROLE,
} from "../../../../graphql/fetchUserRole";

export type AchievementComponentProps = {
  userId: string;
};

const AchievementComponent = ({ userId }: AchievementComponentProps) => {
  const [unitBadges, setUnitBadges] = useState<IntroCourseUnit[]>();
  const [editMode, setEditMode] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const { data } = useQuery<FetchBadgeResponse>(FETCH_CODING_BADGES, {
    variables: {
      userId: userId,
    },
    onCompleted: (data) => {
      setUnitBadges(data.intro_course_unit);
    },
  });
  const {} = useQuery<FetchUserRoleData>(FETCH_USER_ROLE, {
    variables: {
      _id: userId,
    },
    onCompleted: (roleData) => {
      if (roleData.users[0].userRole.value === "coach") {
        setIsEditable(true);
      }
    },
  });
  const [saveAddedBadges] = useMutation(INSERT_USER_CODING_BADGES, {
    refetchQueries: [{ query: FETCH_CODING_BADGES }],
  });
  const [saveRemovedBadges] = useMutation(DELETE_USER_CODING_BADGES, {
    refetchQueries: [{ query: FETCH_CODING_BADGES }],
  });

  // move handler inside AC component, and add type props
  // keep findBadgeDiff
  const handleOnSaveButtonClick = () => {
    const addedBadges = findBadgeDiff(
      data.intro_course_unit,
      unitBadges,
      userId
    ).addedBadges;
    const removedBadges = findBadgeDiff(
      data.intro_course_unit,
      unitBadges,
      userId
    ).removedBadges;

    Promise.all([
      addedBadges.length > 0
        ? saveAddedBadges({ variables: { objects: addedBadges } }).catch(
            (error) => {
              console.error(error);
            }
          )
        : Promise.resolve(),
      removedBadges.length > 0
        ? Promise.all(
            removedBadges.map((badge) =>
              saveRemovedBadges({
                variables: {
                  badgeId: badge.badgeId,
                  userId: badge.userId,
                },
              }).catch((error) => {
                console.error(error);
              })
            )
          )
        : Promise.resolve(),
    ]).then(() => {
      alert("Your badge selections have been updated.");
    });
  };

  return (
    <div className="sm:p-4 sm:shadow-md bg-slate-300 dark:bg-slate-900">
      <div className="w-full mb-4">
        {isEditable && (
          <div className="flex place-content-between space-x-4 px-4">
            <Button
              label={"Save"}
              onClick={() => handleOnSaveButtonClick()}
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
      <div className="flex place-content-between space-x-4 px-4">
        <Button
          label={"Save"}
          onClick={() => handleOnSaveButtonClick()}
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
    </div>
  );
};

export default AchievementComponent;
