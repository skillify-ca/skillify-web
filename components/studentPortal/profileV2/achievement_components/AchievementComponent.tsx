import { useMutation, useQuery } from "@apollo/client";
import { PencilAltIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import {
  FETCH_CODING_BADGES,
  FetchBadgeResponse,
  IntroCourseUnit,
} from "../../../../graphql/studentPortal/achievements/fetchUserBadges";
import {
  DELETE_USER_CODING_BADGES,
  INSERT_USER_CODING_BADGES,
} from "../../../../graphql/studentPortal/achievements/updateUserCodingBadges";
import {
  FETCH_USER_ROLE,
  FetchRoleData,
} from "../../../../graphql/studentPortal/users/fetchUserRole";
import { useAuth } from "../../../../lib/authContext";
import { Button } from "../../../ui/Button";
import UnitBadgeSection from "./UnitBadgeSection";
import findBadgeDiff from "./findBadgeDiff";

export type AchievementComponentProps = {
  userId: string;
};

const AchievementComponent = ({ userId }: AchievementComponentProps) => {
  const [unitBadges, setUnitBadges] = useState<IntroCourseUnit[]>();
  // editMode set to true only when a coach accesses the page
  const [editMode, setEditMode] = useState(false);
  // isEditButtonVisible set to true only when a coach clicks the PencilAltIcon Component
  const [isEditButtonVisible, setisEditButtonVisible] = useState(false);

  const { data } = useQuery<FetchBadgeResponse>(FETCH_CODING_BADGES, {
    variables: {
      userId: userId,
    },
    onCompleted: (data) => {
      setUnitBadges(data.intro_course_unit);
    },
  });
  const { user } = useAuth();

  useQuery<FetchRoleData>(FETCH_USER_ROLE, {
    variables: {
      _id: user.uid,
    },
    onCompleted: (roleData) => {
      if (roleData.users[0].userRole.value === "coach") {
        setisEditButtonVisible(true);
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
    <div className="p-4 rounded-xl bg-backgroundSecondary">
      <div className="flex justify-end w-full">
        {isEditButtonVisible && (
          <div>
            <button
              onClick={() => setEditMode(!editMode)}
              className="w-5 h-5 text-yellow-500 cursor-pointer"
            >
              <PencilAltIcon
                className={
                  " w-7 h-7 cursor-pointer hover:scale-125 " +
                  (editMode ? "hover:text-yellow-500" : "text-yellow-700")
                }
              />
            </button>
          </div>
        )}
      </div>
      {unitBadges && (
        <div>
          {unitBadges.map((unit, index) => {
            if (unit.coding_badges.length > 0) {
              return (
                <div
                  className="mb-4 shadow bg-backgroundPrimary rounded-xl"
                  key={index}
                >
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
      {editMode && (
        <div className="flex py-4 space-x-4 place-content-between">
          <Button
            label={"Save"}
            onClick={() => handleOnSaveButtonClick()}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default AchievementComponent;
