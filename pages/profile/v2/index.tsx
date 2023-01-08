import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import GoalsSectionComponent from "../../../components/coding/GoalsSectionComponent";
import AchievementComponent from "../../../components/coding/profileV2/AchievementComponent";
import AssignmentSectionComponent from "../../../components/coding/profileV2/AssignmentSectionComponent";
import ProfileHeaderComponent from "../../../components/coding/profileV2/ProfileHeaderComponent";
import SkillRatingsComponent from "../../../components/coding/SkillRatingsComponent";
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
      <div className="grid grid-cols-1 my-9">
        <AssignmentSectionComponent />
      </div>
      <div className="grid grid-cols-1 my-9">
        <GoalsSectionComponent
          inProfile={true}
          userGoals={userGoals
            .filter((goal) => !goal.isComplete && !goal.isArchived)
            .slice(0, 3)}
        />
      </div>
      <div className="grid grid-cols-1 my-9">
        <SkillRatingsComponent />
      </div>
      <div className="grid grid-cols-1 my-9">
        <AchievementComponent data={data} />
      </div>
    </div>
  );
}

Profile.auth = true;
