import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalsSectionComponent from "../../components/studentPortal/goals/GoalsSectionComponent";
import ProfileGoalBadge from "../../components/studentPortal/profileV2/ProfileGoalBadge";
import ProfileHeaderComponent from "../../components/studentPortal/profileV2/ProfileHeaderComponent";
import ProjectsSection from "../../components/studentPortal/profileV2/ProjectsSection";
import StudentFeedbackComponent from "../../components/studentPortal/profileV2/StudentFeedbackComponent";
import AchievementComponent from "../../components/studentPortal/profileV2/achievement_components/AchievementComponent";
import SkillRatingsComponent from "../../components/studentPortal/skillRatings/SkillRatingsComponent";
import { Button } from "../../components/ui/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/Collapsible";
import { Progress } from "../../components/ui/Progress";
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
  FETCH_USER_PROJECTS,
  FetchUserProjectsDataResponse,
  UserProjectData,
} from "../../graphql/studentPortal/profile/fetchUserProjects";
import {
  FETCH_SKILLS_AND_RATINGS,
  FetchSkillsAndRatings,
} from "../../graphql/studentPortal/skillRatings/fetchSkillsAndRatings";
import {
  profileSelector,
  setTotalBadgeCount,
  setUserBadgeCount,
  setUserProfile,
} from "../../redux/profileSlice";
import {
  SkillRatingsRow,
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
  const router = useRouter();
  const dispatch = useDispatch();

  // set userId to prop if navigating from /profile/x/[linkName], otherwise set as url parameter
  const userId = userIdFromLink ? userIdFromLink : router.query.userId;

  const { userGoals } = useSelector(userGoalsSelector);
  const { skillRatings } = useSelector(skillRatingsSelector);
  const { userProfileData, userBadgeCount, totalBadgeCount } =
    useSelector(profileSelector);
  const [isEditable, setIsEditable] = useState(false);
  const [userProjects, setUserProjects] = useState<UserProjectData[]>([]);

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

    useQuery<FetchUserProjectsDataResponse>(FETCH_USER_PROJECTS, {
      variables: {
        userId: userId,
      },

      onCompleted: (data: FetchUserProjectsDataResponse) => {
        setUserProjects(data.user_projects);
      },
    });
  }

  function getSkillRatingProgress(skillRatings: SkillRatingsRow[]) {
    let total = 0;
    let count = 0;
    skillRatings.forEach((skill) => {
      total += skill.studentRating;
      count++;
    });
    return (total / count).toFixed(0);
  }

  return (
    <div className="flex flex-col m-4 space-y-4 overflow-auto bg-scroll sm:p-4">
      <ProfileHeaderComponent
        userProfileData={userProfileData}
        isEditable={!isExternal}
      />
      {userProfileData.name.startsWith("G") && (
        <Section title={"Summary"} hasProgress={false}>
          <StudentFeedbackComponent />
        </Section>
      )}
      <Section
        title={`Projects (${userProjects.length}/5 Complete)`}
        hasProgress
        value={(userProjects.length * 100) / 5}
      >
        {isEditable && (
          <div className="p-4">
            <Link href="/studentPortal/projects/create">
              <Button label="Create" />
            </Link>
          </div>
        )}
        <ProjectsSection userProjects={userProjects} />
      </Section>
      <Section
        title={
          <div className="flex items-center justify-center gap-4">
            Goals
            <ProfileGoalBadge />
          </div>
        }
      >
        <GoalsSectionComponent
          inProfile={true}
          userGoals={userGoals
            .filter((goal) => !goal.isComplete && !goal.isArchived)
            .slice(0, 3)}
        />
      </Section>
      <Section
        title={`Skills (${
          skillRatings.filter((it) => it.studentRating === 100).length
        } / ${skillRatings.length} Mastered)`}
        hasProgress
        value={
          (skillRatings.filter((it) => it.studentRating === 100).length * 100) /
          skillRatings.length
        }
      >
        <SkillRatingsComponent
          skillRatings={skillRatings}
          isEditable={isEditable}
        />
      </Section>
      <Section
        hasProgress
        value={(userBadgeCount * 100) / totalBadgeCount}
        title={`Badges (${userBadgeCount}/${totalBadgeCount} Unlocked)`}
      >
        {typeof userId == "string" && <AchievementComponent userId={userId} />}
      </Section>
    </div>
  );
}

InternalProfile.auth = true;

function Section({ title, hasProgress = false, value = 0, children }) {
  return (
    <div className="w-full">
      <Collapsible className="w-full group rounded-xl">
        <div className="p-0 bg-backgroundSecondary rounded-xl">
          <CollapsibleTrigger className="flex flex-col items-start justify-start w-full gap-4 p-4 mb-4 bg-sky-300 hover:bg-sky-200 rounded-xl">
            <h6 className="flex text-lg font-bold">
              <span
                className={`group-data-[state=open]:rotate-180 transition-all rotate-90 mr-2`}
              >
                ▲
              </span>
              {title}
            </h6>
            {hasProgress && (
              <Progress value={value} className="w-[60%] text-blue-400" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>{children}</CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
}
