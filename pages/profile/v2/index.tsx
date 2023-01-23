import React from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import ExpandableContainer from "../../../components/coding/ExpandableContainer";
import GoalsSectionComponent from "../../../components/coding/GoalsSectionComponent";
import AchievementComponent from "../../../components/coding/profileV2/AchievementComponent";
import AssignmentSectionComponent from "../../../components/coding/profileV2/AssignmentSectionComponent";
import ProfileHeaderComponent from "../../../components/coding/profileV2/ProfileHeaderComponent";
import SkillRatingsComponent from "../../../components/coding/SkillRatingsComponent";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../../graphql/fetchUserGoals";
import { useAuth } from "../../../lib/authContext";
import { userGoalsSelector, setUserGoals } from "../../../redux/userGoalsSlice";

export default function Profile() {
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

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll space-y-9">
      <ProfileHeaderComponent userId={user.uid} />
      <div>
        <ExpandableContainer open={true} title={"Assignments"}>
          <AssignmentSectionComponent />{" "}
        </ExpandableContainer>
      </div>
      <div className="grid">
        <ExpandableContainer open={true} title={"Goals"}>
          {userGoalsLoading ? (
            <div>Loading...</div>
          ) : (
            <GoalsSectionComponent
              inProfile={true}
              userGoals={userGoals
                .filter((goal) => !goal.isComplete && !goal.isArchived)
                .slice(0, 3)}
            />
          )}
        </ExpandableContainer>
      </div>
      <div className="grid">
        <ExpandableContainer open={true} title={"Skill Ratings"}>
          <SkillRatingsComponent />
        </ExpandableContainer>
      </div>
      <div className="grid">
        <ExpandableContainer open={true} title={"Achievements"}>
          <AchievementComponent userId={user.uid} isEditable={false} />
        </ExpandableContainer>
      </div>
    </div>
  );
}

Profile.auth = true;
