import React, { useState } from "react";
import { PencilAltIcon } from "@heroicons/react/outline";
import { useMutation, useQuery } from "@apollo/client";
import {
  FetchBadgeResponse,
  FETCH_CODING_BADGES,
  IntroCourseUnit,
} from "../../../../../graphql/coding/userBadges/fetchUserBadges";
import { Button } from "../../../../ui/Button";
import {
  INSERT_USER_CODING_BADGES,
  DELETE_USER_CODING_BADGES,
} from "../../../../../graphql/coding/userBadges/updateUserCodingBadges";
import UnitBadgeSection from "./UnitBadgeSection";
import findBadgeDiff from "./findBadgeDiff";
import {
  FetchUserRoleData,
  FETCH_USER_ROLE,
} from "../../../../../graphql/fetchUserRole";
import { useAuth } from "../../../../../lib/authContext";

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

  useQuery<FetchUserRoleData>(FETCH_USER_ROLE, {
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
    <div className="p-4 bg-slate-900 ">
      <div className="flex justify-end w-full py-4">
        {isEditButtonVisible && (
          <div>
            <button
              onClick={() => setEditMode(!editMode)}
              className="w-5 h-5 text-yellow-500 cursor-pointer"
            >
              <PencilAltIcon
                className={
                  " w-7 h-7 cursor-pointer hover:scale-125 " +
                  (editMode ? "text-yellow-700" : "hover:text-yellow-500")
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
                <div className="mb-4" key={index}>
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
