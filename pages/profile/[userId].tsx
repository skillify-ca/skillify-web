import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import ExpandableContainer from "../../components/coding/ExpandableContainer";
import GoalsSectionComponent from "../../components/coding/GoalsSectionComponent";
import ProfileHeaderComponent from "../../components/coding/profileV2/ProfileHeaderComponent";
import SkillRatingsComponent from "../../components/coding/SkillRatingsComponent";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../graphql/fetchUserGoals";
import { useAuth } from "../../lib/authContext";
import { userGoalsSelector, setUserGoals } from "../../redux/userGoalsSlice";
import ProjectsSection from "../../components/coding/ProjectsSection";
import AchievementComponent from "../../components/coding/profileV2/achievement_components/AchievementComponent";
import { useRouter } from "next/router";
import {
  FetchTotalBadgesCountResponse,
  FETCH_TOTAL_USER_BADGES_COUNT,
} from "../../graphql/fetchTotalUserBadgesCount";
import {
  FetchUserBadgesCountResponse,
  FETCH_USER_BADGES_COUNT,
} from "../../graphql/fetchUserBadgesCount";
import {
  FetchUserProfileDataResponse,
  FETCH_USER_PROFILE_DATA,
} from "../../graphql/fetchUserProfile";
import {
  profileSelector,
  setUserProfile,
  setUserBadgeCount,
  setTotalBadgeCount,
} from "../../redux/profileSlice";
import {
  FetchSkillsAndRatings,
  FETCH_SKILLS_AND_RATINGS,
} from "../../graphql/fetchSkillsAndRatings";
import {
  setSkillRatings,
  skillRatingsSelector,
} from "../../redux/skillRatingsSlice";
import { transformSkillsAndRatings } from "../api/skillRatingsFunctions";

type InternalProfileProps = {
  userIdFromLink?: string;
};

export default function InternalProfile({
  userIdFromLink,
}: InternalProfileProps) {
  const { user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  // set userId to prop if navigating from /profile/x/[linkName], otherwise set as url parameter
  const userId = userIdFromLink ? userIdFromLink : router.query.userId;

  const { userGoals } = useSelector(userGoalsSelector);
  const { skillRatings } = useSelector(skillRatingsSelector);
  const { userProfileData, userBadgeCount, totalBadgeCount } = useSelector(
    profileSelector
  );
  const [isEditable, setIsEditable] = useState(false);

  if (userId) {
    useQuery<FetchUserProfileDataResponse>(FETCH_USER_PROFILE_DATA, {
      variables: {
        userId: userId,
      },
      onCompleted: (data) => {
        if (data.users.length > 0) {
          dispatch(
            setUserProfile({
              createdAt: data.users[0].created_at,
              email: data.users[0].email,
              lastSeen: data.users[0].last_seen,
              name: data.users[0].name,
              profileImage: data.users[0].profile_image,
            })
          );
        }
      },
    });

    useQuery<FetchUserGoalsDataResponse>(FETCH_USER_GOALS, {
      variables: {
        userId: userId,
      },
      onCompleted: (data: FetchUserGoalsDataResponse) => {
        dispatch(setUserGoals(data.user_goals));
      },
    });

    useQuery<FetchSkillsAndRatings>(FETCH_SKILLS_AND_RATINGS, {
      variables: {
        userId: userId,
      },
      onCompleted: (data) => {
        dispatch(
          setSkillRatings(transformSkillsAndRatings(data.intro_course_skills))
        );
        if (userId == user.uid) {
          setIsEditable(true);
        }
      },
    });

    useQuery<FetchUserBadgesCountResponse>(FETCH_USER_BADGES_COUNT, {
      variables: {
        userId: userId,
      },
      onCompleted: (data) => {
        if (data.user_coding_badges_aggregate.aggregate.count) {
          dispatch(
            setUserBadgeCount(data.user_coding_badges_aggregate.aggregate.count)
          );
        }
      },
    });

    useQuery<FetchTotalBadgesCountResponse>(FETCH_TOTAL_USER_BADGES_COUNT, {
      onCompleted: (data) => {
        if (data.coding_badges_aggregate) {
          dispatch(
            setTotalBadgeCount(data.coding_badges_aggregate.aggregate.count)
          );
        }
      },
    });
  }

  return (
    <div className="flex flex-col p-4 m-4 space-y-4 overflow-auto bg-scroll">
      <ProfileHeaderComponent
        userProfileData={userProfileData}
        userBadgeCount={userBadgeCount}
        totalBadgeCount={totalBadgeCount}
      />
      <ExpandableContainer open={false} title={"Projects"}>
        <ProjectsSection user={userId} />
      </ExpandableContainer>
      <ExpandableContainer open={false} title={"Goals"}>
        <GoalsSectionComponent
          inProfile={true}
          userGoals={userGoals
            .filter((goal) => !goal.isComplete && !goal.isArchived)
            .slice(0, 3)}
        />
      </ExpandableContainer>
      <ExpandableContainer open={false} title={"Achievements"}>
        {typeof userId == "string" && <AchievementComponent userId={userId} />}
      </ExpandableContainer>
      <ExpandableContainer open={false} title={"Skill Ratings"}>
        <SkillRatingsComponent
          skillRatings={skillRatings}
          isEditable={isEditable}
        />
      </ExpandableContainer>
    </div>
  );
}

InternalProfile.auth = true;
