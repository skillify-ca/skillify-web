import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import GoalsSectionComponent from "../../../components/coding/GoalsSectionComponent";
import ProfileGoalsSection from "../../../components/coding/ProfileGoalsSection";
import ProfileHeaderComponent from "../../../components/coding/profileV2/ProfileHeaderComponent";
import ProjectsSection from "../../../components/coding/ProjectsSection";
import UserProfileSection from "../../../components/coding/UserProfileSection";
import BadgesSection from "../../../components/profile/BadgesSection";

import {
  UserGoalsData,
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../../graphql/fetchUserGoals";
import { useAuth } from "../../../lib/authContext";
import { userGoalsSelector } from "../../../redux/userGoalsSlice";

export default function Profile(props) {
  const { user } = useAuth();
  const [userGoals, setUserGoals] = useState<UserGoalsData[]>([]);
  const { loading: userGoalsLoading } = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOALS,
    {
      variables: {
        userId: user.uid,
      },

      onCompleted: (data: FetchUserGoalsDataResponse) => {
        setUserGoals(data.user_goals);
      },
    }
  );

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <ProfileHeaderComponent user={user} />

      <h2 className="text-lg font-bold mt-14 mb-9">Projects</h2>

      <div className="grid grid-cols-1 mb-4 sm:grid-cols-3">
        <ProjectsSection user={user} />
      </div>

      <h2 className="text-lg font-bold mt-14 mb-9">Goals</h2>

      <div className="grid grid-cols-1">
        <GoalsSectionComponent
          userGoals={userGoals
            .filter((goal) => !goal.isComplete && !goal.isArchived)
            .slice(0, 3)}
        />
      </div>

      <h2 className="text-lg font-bold mb-9">Achievements</h2>
      <BadgesSection user={user} />
    </div>
  );
}

Profile.auth = true;
