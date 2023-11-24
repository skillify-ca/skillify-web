import { useMutation, useQuery } from "@apollo/client";
import { PencilAltIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import {
  FETCH_CODING_BADGES,
  FetchBadgeResponse,
  UserCodingBadge,
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
import CodingBadgeCard from "./CodingBadgeCard";

export type AchievementComponentProps = {
  userId: string;
  isEditable: boolean;
};

const AchievementComponent = ({
  userId,
  isEditable,
}: AchievementComponentProps) => {
  const [userBadges, setUserBadges] = useState<UserCodingBadge[]>([]);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // editMode set to true only when a coach accesses the page
  const [editMode, setEditMode] = useState(false);
  // isEditButtonVisible set to true only when a coach clicks the PencilAltIcon Component
  const [isEditButtonVisible, setisEditButtonVisible] = useState(false);

  const { data } = useQuery<FetchBadgeResponse>(FETCH_CODING_BADGES, {
    variables: {
      userId: userId,
    },
    onCompleted: (data) => {
      setUserBadges(data.user_coding_badges);
    },
  });
  const { user } = useAuth();

  useQuery<FetchRoleData>(FETCH_USER_ROLE, {
    variables: {
      _id: user.uid,
    },
    onCompleted: (roleData) => {
      if (roleData.users[0].userRole.value === "coach") {
        setisEditButtonVisible(true && isEditable);
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
    alert("Your badge selections have been updated.");
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
      {userBadges && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[]
            .concat(userBadges)
            .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            .filter((badge, index) => {
              if (isCollapsed) {
                return index < 5;
              } else {
                return true;
              }
            })
            .map((badge, index) => {
              return (
                <div
                  className="shadow bg-backgroundPrimary rounded-xl"
                  key={index}
                >
                  <CodingBadgeCard badge={badge} />
                </div>
              );
            })}
        </div>
      )}
      <div className="mt-4">
        <Button
          label={isCollapsed ? "Show More" : "Show Less"}
          onClick={() => setIsCollapsed(!isCollapsed)}
        ></Button>
      </div>
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
