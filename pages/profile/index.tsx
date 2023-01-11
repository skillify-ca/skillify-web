import React from "react";
import ProfileGoalsSection from "../../components/coding/ProfileGoalsSection";
import AcheivementComponent from "../../components/coding/profileV2/AchievementComponent";
import ProjectsSection from "../../components/coding/ProjectsSection";
import UserProfileSection from "../../components/coding/UserProfileSection";

import { useAuth } from "../../lib/authContext";

export default function Profile(props) {
  const { user } = useAuth();

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <UserProfileSection user={user} />

      <h2 className="text-lg font-bold mt-14 mb-9">Projects</h2>

      <div className="grid grid-cols-1 mb-4 sm:grid-cols-3">
        <ProjectsSection user={user} />
      </div>

      <h2 className="text-lg font-bold mt-14 mb-9">Goals</h2>

      <div className="grid grid-cols-1 mb-16 sm:grid-cols-3">
        <ProfileGoalsSection user={user} />
      </div>

      <h2 className="text-lg font-bold mb-9">Achievements</h2>
      <AcheivementComponent user={user} />
    </div>
  );
}

Profile.auth = true;
