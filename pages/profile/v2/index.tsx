import { useQuery } from "@apollo/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalsSectionComponent from "../../../components/coding/GoalsSectionComponent";
import AcheivementComponent from "../../../components/coding/profileV2/AcheivementComponent";
import AssignmentSectionComponent from "../../../components/coding/profileV2/AssignmentSectionComponent";
import ProfileHeaderComponent from "../../../components/coding/profileV2/ProfileHeaderComponent";
import ProjectsSection from "../../../components/coding/ProjectsSection";
import BadgesSection from "../../../components/profile/BadgesSection";
import { FETCH_CODING_BADGES } from "../../../graphql/coding/userBadges/fetchUserBadges";

import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../../graphql/fetchUserGoals";
import { useAuth } from "../../../lib/authContext";
import { setUserGoals, userGoalsSelector } from "../../../redux/userGoalsSlice";

export default function Profile(props) {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { userGoals } = useSelector(userGoalsSelector);
  const { loading: userGoalsLoading } = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOALS,
    {
      variables: {
        userId: user.uid,
      },

      onCompleted: (data: FetchUserGoalsDataResponse) => {
        dispatch(setUserGoals(data.user_goals));
      },
    }
  );
  const { data } = useQuery(FETCH_CODING_BADGES, {
    variables: {
      userId: user.uid,
    },
  });
  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <ProfileHeaderComponent user={user} />

      <h2 className="text-lg font-bold mt-14 mb-9">Assignments</h2>

      <div className="grid grid-cols-1 mb-4">
        <AssignmentSectionComponent />
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
      <AcheivementComponent user={user} data={data} />
    </div>
  );
}

Profile.auth = true;
