import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
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

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <ProfileHeaderComponent userId={user.uid} />

      <h2 className="text-lg font-bold mt-14 mb-9">Assignments</h2>

      <div className="grid grid-cols-1 mb-4">
        <AssignmentSectionComponent />
      </div>

      <h2 className="text-lg font-bold mt-14 mb-9">Goals</h2>

      <div className="grid grid-cols-1">
        <GoalsSectionComponent
          inProfile={true}
          userGoals={userGoals
            .filter((goal) => !goal.isComplete && !goal.isArchived)
            .slice(0, 3)}
        />
      </div>
      <h2 className="text-lg font-bold mt-14 mb-9">Skill Ratings</h2>
      <div className="grid grid-cols-1">
        <SkillRatingsComponent />
      </div>

      <h2 className="text-lg font-bold mb-9">Achievements</h2>
      <AchievementComponent user={user} />
    </div>
  );
}

Profile.auth = true;
