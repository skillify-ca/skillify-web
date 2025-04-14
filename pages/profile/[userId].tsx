import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Offer,
  OfferTable,
} from "../../components/resources/jobTracker/JobTrackerComponent";
import GoalsSectionComponent from "../../components/studentPortal/goals/GoalsSectionComponent";
import ProfileGoalBadge from "../../components/studentPortal/profile/ProfileGoalBadge";
import ProfileHeaderComponent from "../../components/studentPortal/profile/ProfileHeaderComponent";
import ProjectsSection from "../../components/studentPortal/profile/ProjectsSection";
import Section from "../../components/studentPortal/profile/Section";
import StudentFeedbackComponent from "../../components/studentPortal/profile/StudentFeedbackComponent";
import AchievementComponent from "../../components/studentPortal/profile/badges/AchievementComponent";
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
  FETCH_USER_PROJECTS,
  FetchUserProjectsDataResponse,
  UserProjectData,
} from "../../graphql/studentPortal/profile/fetchUserProjects";
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

import AccountabilityHeatmap from "../../components/accountability/AccountabilityHeatmap";
import LoadingComponent from "../../components/ui/loader";
import {
  FETCH_ACCOUNTABILITY_TASKS_BY_USER,
  FetchAccountabilityTasksByUser,
} from "../../graphql/studentPortal/accountability/fetchAccountabilityTasks";
import {
  FETCH_USER_SKILLS_RATINGS,
  FetchUserSkillsRatings,
} from "../../graphql/studentPortal/skillRatings/fetchUserSkillsRatings";
import { setUserGoals, userGoalsSelector } from "../../redux/userGoalsSlice";
import { getInterviewData } from "../api/studentPortal/interviews/InterviewDataMap";
import { fetchProfilePicture } from "../api/studentPortal/profile/profilePicturesClient";

type InternalProfileProps = {
  userIdFromLink?: string;
  isExternal: boolean;
};

export default function InternalProfile({
  userIdFromLink,
  isExternal,
}: InternalProfileProps) {
  const { userRole } = useSelector(profileSelector);

  const router = useRouter();
  const dispatch = useDispatch();

  // set userId to prop if navigating from /profile/x/[linkName], otherwise set as url parameter
  const userId = userIdFromLink
    ? userIdFromLink
    : Array.isArray(router.query.userId)
    ? router.query.userId[0]
    : router.query.userId;
  const { user } = useAuth();
  const { userGoals } = useSelector(userGoalsSelector);
  const { userProfileData, userBadgeCount, totalBadgeCount } =
    useSelector(profileSelector);
  const [isEditable, setIsEditable] = useState(false);
  const [userProjects, setUserProjects] = useState<UserProjectData[]>([]);
  const [isCAD, setIsCAD] = useState(true);
  const [year, setYear] = useState(2023);
  const [interviewData, setInterviewData] = useState<Offer[]>([]);

  useEffect(() => {
    if (userId) {
      setInterviewData(getInterviewData(userId));
    }
  }, [user?.uid]);

  useEffect(() => {
    if (userRole === "coach" && !isExternal) {
      setIsEditable(true);
    }
  }, [userRole]);

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
            currentFocus: data.users[0].current_focus,
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

  const { data: skillRatings } = useQuery<FetchSkillsAndRatings>(
    FETCH_SKILLS_AND_RATINGS,
    {
      variables: {
        userId: userId,
      },
    }
  );

  const {
    data,
    loading: accountabilityLoading,
    error: accountabilityError,
  } = useQuery<FetchAccountabilityTasksByUser>(
    FETCH_ACCOUNTABILITY_TASKS_BY_USER,
    {
      variables: { userId },
      skip: !userId,
      fetchPolicy: "cache-first",
    }
  );

  // fetch user skill ratings
  const { data: userSkillRatings } = useQuery<FetchUserSkillsRatings>(
    FETCH_USER_SKILLS_RATINGS,
    {
      variables: {
        userId: userId,
      },
    }
  );

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

  const sections = [
    {
      shouldShow: userProfileData.name.startsWith("G"),
      title: "Summary",
      hasProgress: false,
      value: 0,
      component: <StudentFeedbackComponent />,
    },
    {
      shouldShow: true,
      title: `Projects (${userProjects.length}/5 Complete)`,
      hasProgress: true,
      value: (userProjects.length * 100) / 5,
      component: (
        <>
          {isEditable && (
            <div className="p-4">
              <Link href="/studentPortal/projects/create" legacyBehavior>
                <Button label="Create" />
              </Link>
            </div>
          )}
          <ProjectsSection userProjects={userProjects} />
        </>
      ),
    },
    {
      shouldShow: true,
      title: (
        <div className="flex items-center justify-center gap-4">
          Goals
          <ProfileGoalBadge />
          {` (${userGoals.filter((it) => it.isComplete).length}/${
            userGoals.length
          } Complete)`}
        </div>
      ),
      hasProgress: true,
      value:
        (userGoals.filter((it) => it.isComplete).length * 100) /
        userGoals.length,
      component: (
        <GoalsSectionComponent
          inProfile={true}
          userGoals={userGoals.filter(
            (goal) => !goal.isComplete && !goal.isArchived
          )}
        />
      ),
    },
    {
      shouldShow: true,
      title: `Skills (${
        userSkillRatings?.intro_course_skills_user?.filter(
          (it) => it.studentRating === 100
        ).length
      } / ${skillRatings?.intro_course_skills?.length} Mastered)`,
      hasProgress: true,
      value:
        (userSkillRatings?.intro_course_skills_user?.filter(
          (it) => it.studentRating === 100
        ).length *
          100) /
        skillRatings?.intro_course_skills?.length,
      component: (
        <SkillRatingsComponent
          userId={userId}
          skillRatings={skillRatings}
          userSkillRatings={userSkillRatings}
          isEditable={isEditable}
        />
      ),
    },
    {
      shouldShow: true,
      title: `Badges (${userBadgeCount}/${totalBadgeCount} Unlocked)`,
      hasProgress: true,
      value: (userBadgeCount * 100) / totalBadgeCount,
      component: typeof userId == "string" && (
        <AchievementComponent userId={userId} />
      ),
    },
    {
      shouldShow: true,
      title: `Interview Tracking (${interviewData?.length} / 50)`,
      hasProgress: true,
      value: (userBadgeCount * 100) / totalBadgeCount,
      component: typeof userId == "string" && (
        <OfferTable isCAD={isCAD} year={year} data={interviewData} />
      ),
    },
  ];

  return (
    <div className="flex flex-col m-4 space-y-4 overflow-auto bg-scroll sm:p-4">
      <ProfileHeaderComponent
        userProfileData={userProfileData}
        isEditable={!isExternal}
      />
      <div className="flex justify-left font-bold m-4">
        {accountabilityLoading ? (
          <LoadingComponent />
        ) : accountabilityError ? (
          <p>An error occurred while fetching data.</p>
        ) : (
          <AccountabilityHeatmap entries={data?.accountability ?? []} />
        )}
      </div>
      {sections.map((section) => {
        return section.shouldShow ? (
          <Section
            title={section.title}
            hasProgress={section.hasProgress}
            value={section.value}
          >
            {section.component}
          </Section>
        ) : null;
      })}
    </div>
  );
}
