import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalsSectionComponent from "../../components/studentPortal/goals/GoalsSectionComponent";
import AchievementComponent from "../../components/studentPortal/profileV2/achievement_components/AchievementComponent";
import ProfileHeaderComponent from "../../components/studentPortal/profileV2/ProfileHeaderComponent";
import ProjectsSection from "../../components/studentPortal/profileV2/ProjectsSection";
import SkillRatingsComponent from "../../components/studentPortal/skillRatings/SkillRatingsComponent";
import {
  FetchTotalBadgesCountResponse,
  FETCH_TOTAL_USER_BADGES_COUNT,
} from "../../graphql/studentPortal/achievements/fetchTotalUserBadgesCount";
import {
  FetchUserBadgesCountResponse,
  FETCH_USER_BADGES_COUNT,
} from "../../graphql/studentPortal/achievements/fetchUserBadgesCount";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../graphql/studentPortal/goals/fetchUserGoals";
import {
  FetchUserProfileDataResponse,
  FETCH_USER_PROFILE_DATA,
} from "../../graphql/studentPortal/profile/fetchUserProfile";
import {
  FetchSkillsAndRatings,
  FETCH_SKILLS_AND_RATINGS,
} from "../../graphql/studentPortal/skillRatings/fetchSkillsAndRatings";
import { useAuth } from "../../lib/authContext";
import {
  profileSelector,
  setTotalBadgeCount,
  setUserBadgeCount,
  setUserProfile,
} from "../../redux/profileSlice";
import {
  setSkillRatings,
  skillRatingsSelector,
} from "../../redux/skillRatingsSlice";
import { setUserGoals, userGoalsSelector } from "../../redux/userGoalsSlice";
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
  const { userProfileData, userBadgeCount, totalBadgeCount } =
    useSelector(profileSelector);
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
      <Section title={""}>
        <ProfileHeaderComponent
          userProfileData={userProfileData}
          userBadgeCount={userBadgeCount}
          totalBadgeCount={totalBadgeCount}
        />
      </Section>
      <Section title={"Projects"}>
        <ProjectsSection user={userId} />
      </Section>
      <Section title={"Goals"}>
        <GoalsSectionComponent
          inProfile={true}
          userGoals={userGoals
            .filter((goal) => !goal.isComplete && !goal.isArchived)
            .slice(0, 3)}
        />
      </Section>
      <Section title={"Achievements"}>
        {typeof userId == "string" && <AchievementComponent userId={userId} />}
      </Section>
      <Section title={"Skill Ratings"}>
        <SkillRatingsComponent
          skillRatings={skillRatings}
          isEditable={isEditable}
        />
      </Section>
    </div>
  );
}

InternalProfile.auth = true;

function Section({ title, children }) {
  return (
    <div className="">
      <h6 className="mb-4 text-lg font-bold">{title}</h6>
      <div className="p-0 border bg-backgroundSecondary rounded-xl border-brandPrimary">
        {children}
      </div>
    </div>
  );
}
