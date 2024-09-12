import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/Button";
import { FETCH_ALL_BADGES } from "../../../../graphql/studentPortal/achievements/fetchAllCodingBadges";
import {
  FETCH_CODING_BADGES,
  FetchBadgeResponse,
  UserCodingBadge,
} from "../../../../graphql/studentPortal/achievements/fetchUserBadges";
import { ADD_BADGE_TO_USER } from "../../../../graphql/studentPortal/admin/addBadgeToUser";
import {
  FETCH_USER_PROFILE_CARD,
  FetchUserProfileCardResponse,
  Users,
} from "../../../../graphql/studentPortal/admin/fetchUserProfileCard";
import { REMOVE_BADGE_FROM_USER } from "../../../../graphql/studentPortal/admin/removeBadgeFromUser";
import { fetchProfilePicture } from "../../../api/studentPortal/profile/profilePicturesClient";

export default function AssignBadges() {
  // Query all users
  const [userList, setUserList] = React.useState<Users[]>([]);

  const [selectedUser, setSelectedUser] = React.useState<Users>();
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    fetchProfilePicture(selectedUser?.id)
      .then((url) => setProfilePicture(url))
      .catch((error) => console.error(error));
  }, [selectedUser]);

  const { loading } = useQuery<FetchUserProfileCardResponse>(
    FETCH_USER_PROFILE_CARD,
    {
      onCompleted: (data) => {
        if (data?.users && data?.users?.length > 0) {
          setUserList(data.users);
        }
      },
    }
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Dropdown of all users */}
      <p>Select student</p>
      <select
        value={selectedUser?.id}
        onChange={(e) => {
          setSelectedUser(userList.find((user) => user.id === e.target.value));
        }}
        className="w-64 p-2 border border-gray-500 rounded-lg"
      >
        {Object.values(userList).map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {profilePicture ? (
        <img
          src={profilePicture}
          alt="profile"
          className="object-cover w-36 h-36"
        />
      ) : selectedUser ? (
        <img
          src={selectedUser.profile_image}
          alt="profile"
          className="object-cover w-36 h-36"
        />
      ) : null}

      {/* List all badges */}
      {selectedUser ? <UserBadgeEditor user={selectedUser} /> : null}
    </div>
  );
}

function UserBadgeEditor({ user }: { user: Users }) {
  const [badgeList, setBadgeList] = useState([]);
  const [userBadges, setUserBadges] = useState<UserCodingBadge[]>([]);

  useQuery(FETCH_ALL_BADGES, {
    onCompleted: (data) => {
      if (data?.coding_badges?.length > 0) {
        setBadgeList(data.coding_badges);
      }
    },
  });

  //   fetch FETCH_CODING_BADGES
  useQuery<FetchBadgeResponse>(FETCH_CODING_BADGES, {
    variables: {
      userId: user.id,
    },
    onCompleted: (data) => {
      setUserBadges(data.user_coding_badges);
    },
  });

  const [addBadgeToUser] = useMutation(ADD_BADGE_TO_USER, {
    refetchQueries: [
      {
        query: FETCH_CODING_BADGES,
        variables: {
          userId: user.id,
        },
      },
    ],
  });

  const [removeBadgeFromUser] = useMutation(REMOVE_BADGE_FROM_USER, {
    refetchQueries: [
      {
        query: FETCH_CODING_BADGES,
        variables: {
          userId: user.id,
        },
      },
    ],
  });

  return (
    <div className="flex flex-col gap-4">
      <p>Assign badges</p>
      <div className="grid grid-cols-4 gap-4">
        {badgeList.map((badge) => (
          <div
            key={badge}
            className="flex flex-col gap-4 p-4 border border-gray-500 rounded-lg"
          >
            <img src={badge.image} alt="badge" className="w-36 h-36" />
            <p>{badge.title}</p>
            <p className="h-16 line-clamp-2">{badge.description}</p>
            <Button
              onClick={() => {
                userBadges
                  .map((uBadge) => uBadge.coding_badge.id)
                  .includes(badge.id)
                  ? removeBadgeFromUser({
                      variables: {
                        userId: user.id,
                        badgeId: badge.id,
                      },
                    })
                  : addBadgeToUser({
                      variables: {
                        userId: user.id,
                        badgeId: badge.id,
                      },
                    });
              }}
              label={
                userBadges
                  .map((uBadge) => uBadge.coding_badge.id)
                  .includes(badge.id)
                  ? "Remove"
                  : "Add"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
