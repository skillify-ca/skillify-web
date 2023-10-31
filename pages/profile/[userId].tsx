import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalsSectionComponent from "../../components/studentPortal/goals/GoalsSectionComponent";
import ProfileHeaderComponent from "../../components/studentPortal/profileV2/ProfileHeaderComponent";
import ProjectsSection from "../../components/studentPortal/profileV2/ProjectsSection";
import AchievementComponent from "../../components/studentPortal/profileV2/achievement_components/AchievementComponent";
import SkillRatingsComponent from "../../components/studentPortal/skillRatings/SkillRatingsComponent";
import { Button } from "../../components/ui/Button";
import {
  FETCH_TOTAL_USER_BADGES_COUNT,
  FetchTotalBadgesCountResponse,
} from "../../graphql/studentPortal/achievements/fetchTotalUserBadgesCount";
import {
  FETCH_USER_BADGES_COUNT,
  FetchUserBadgesCountResponse,
} from "../../graphql/studentPortal/achievements/fetchUserBadgesCount";
import {
  FETCH_USER_GOALS,
  FetchUserGoalsDataResponse,
} from "../../graphql/studentPortal/goals/fetchUserGoals";
import {
  FETCH_USER_PROFILE_DATA,
  FetchUserProfileDataResponse,
} from "../../graphql/studentPortal/profile/fetchUserProfile";
import {
  FETCH_SKILLS_AND_RATINGS,
  FetchSkillsAndRatings,
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
import { fetchProfilePicture } from "../api/studentPortal/profile/profilePicturesClient";

type InternalProfileProps = {
  userIdFromLink?: string;
  isExternal: boolean;
};

export default function InternalProfile({
  userIdFromLink,
  isExternal,
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
      onCompleted: async (data) => {
        if (data.users.length > 0) {
          const profileImage = await fetchProfilePicture(data.users[0].id);
          dispatch(
            setUserProfile({
              createdAt: data.users[0].created_at,
              email: data.users[0].email,
              id: data.users[0].id,
              lastSeen: data.users[0].last_seen,
              name: data.users[0].name,
              profileImage: profileImage,
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
        if (!isExternal && userId == user.uid) {
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
          isEditable={!isExternal}
        />
      </Section>
      <Section title={"Projects"}>
        {isEditable && (
          <div className="p-4">
            <Link href="/studentPortal/projects/create">
              <Button label="Create" />
            </Link>
          </div>
        )}
        <ProjectsSection user={userId} />
      </Section>
      {isEditable && (
        <Section title={"Goals"}>
          <GoalsSectionComponent
            inProfile={true}
            userGoals={userGoals
              .filter((goal) => !goal.isComplete && !goal.isArchived)
              .slice(0, 3)}
          />
        </Section>
      )}
      <Section title={"Achievements"}>
        {typeof userId == "string" && (
          <AchievementComponent userId={userId} isEditable={isEditable} />
        )}
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
      <div className="p-0 bg-backgroundSecondary rounded-xl">{children}</div>
    </div>
  );
}
