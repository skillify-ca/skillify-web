import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/Button";
import { supabase } from "../../../../lib/supabase";
import { fetchProfilePicture } from "../../../api/studentPortal/profile/profilePicturesClient";

interface Users {
  id: string;
  name: string;
  profile_image: string;
}

export default function AssignBadges() {
  // Query all users
  const [userList, setUserList] = React.useState<Users[]>([]);

  const [selectedUser, setSelectedUser] = React.useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase.from("users").select("*");
        if (error) {
          throw error;
        }
        setUserList(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      fetchProfilePicture(selectedUser.id)
        .then((url) => setProfilePicture(url))
        .catch((error) => console.error(error));
    }
  }, [selectedUser]);

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

function UserBadgeEditor({ user }) {
  const [badgeList, setBadgeList] = useState([]);
  const [userBadges, setUserBadges] = useState([]);

  useEffect(() => {
    const fetchAllBadges = async () => {
      try {
        const { data, error } = await supabase.from("coding_badges").select("*");
        if (error) {
          throw error;
        }
        setBadgeList(data);
      } catch (error) {
        console.error("Error fetching all badges:", error);
      }
    };

    fetchAllBadges();
  }, []);

  useEffect(() => {
    const fetchUserBadges = async () => {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from("user_coding_badges")
          .select("*, coding_badge:coding_badges(*)")
          .eq("user_id", user.id);
        if (error) {
          throw error;
        }
        setUserBadges(data);
      } catch (error) {
        console.error("Error fetching user badges:", error);
      }
    };

    fetchUserBadges();
  }, [user]);

  const addBadgeToUser = async (badgeId) => {
    try {
      const { error } = await supabase
        .from("user_coding_badges")
        .insert([{ user_id: user.id, badge_id: badgeId }]);
      if (error) {
        throw error;
      }
      // Refetch user badges
      const { data, error: refetchError } = await supabase
        .from("user_coding_badges")
        .select("*, coding_badge:coding_badges(*)")
        .eq("user_id", user.id);
      if (refetchError) {
        throw refetchError;
      }
      setUserBadges(data);
    } catch (error) {
      console.error("Error adding badge to user:", error);
    }
  };

  const removeBadgeFromUser = async (badgeId) => {
    try {
      const { error } = await supabase
        .from("user_coding_badges")
        .delete()
        .eq("user_id", user.id)
        .eq("badge_id", badgeId);
      if (error) {
        throw error;
      }
      // Refetch user badges
      const { data, error: refetchError } = await supabase
        .from("user_coding_badges")
        .select("*, coding_badge:coding_badges(*)")
        .eq("user_id", user.id);
      if (refetchError) {
        throw refetchError;
      }
      setUserBadges(data);
    } catch (error) {
      console.error("Error removing badge from user:", error);
    }
  };

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
                  ? removeBadgeFromUser(badge.id)
                  : addBadgeToUser(badge.id);
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
