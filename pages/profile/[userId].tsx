import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
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
import SkillRatingsComponent from "../../components/studentPortal/profile/skillRatings/SkillRatingsComponent";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../lib/authContext";
import {
  profileSelector,
  setTotalBadgeCount,
  setUserBadgeCount,
  setUserProfile,
} from "../../redux/profileSlice";

import AccountabilityHeatmap from "../../components/accountability/AccountabilityHeatmap";
import LoadingComponent from "../../components/ui/loader";

import { getInterviewData } from "../api/studentPortal/interviews/InterviewDataMap";
import { fetchProfilePicture } from "../api/studentPortal/profile/profilePicturesClient";
import { useAccountability } from "./useAccountability";
import { useCodingBadges } from "./useCodingBadges";
import { useSkillsAndRatings } from "./useSkillsAndRatings";
import { useUserCodingBadges } from "./useUserCodingBadges";
import { useUserGoals } from "./useUserGoals";
import { useUserProfile } from "./useUserProfile";
import { useUserProjects } from "./useUserProjects";
import { useUserSkillsRatings } from "./useUserSkillsRatings";

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
  const { userProfileData, userBadgeCount, totalBadgeCount } =
    useSelector(profileSelector);
  const [isEditable, setIsEditable] = useState(false);
  const [isCAD, setIsCAD] = useState(true);
  const [year, setYear] = useState(2023);
  const [interviewData, setInterviewData] = useState<Offer[]>([]);

  const { accountabilityData, accountabilityLoading, accountabilityError } =
    useAccountability(userId);

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

  const { data: userProfileDataResponse } = useUserProfile(userId || "");

  useEffect(() => {
    const updateUserProfile = async () => {
      if (userProfileDataResponse?.users && userProfileDataResponse.users.length > 0) {
        const profileImage = await fetchProfilePicture(userProfileDataResponse.users[0].id);
        dispatch(
          setUserProfile({
            createdAt: userProfileDataResponse.users[0].created_at,
            email: userProfileDataResponse.users[0].email,
            id: userProfileDataResponse.users[0].id,
            lastSeen: userProfileDataResponse.users[0].last_seen,
            name: userProfileDataResponse.users[0].name,
            profileImage: profileImage,
            currentFocus: userProfileDataResponse.users[0].current_focus,
          })
        );
      }
    };

    updateUserProfile();
  }, [userProfileDataResponse, dispatch]);

  const {data: userGoals} = useUserGoals(userId)

  const { data: skillRatings } = useSkillsAndRatings(userId || "");

  const { data: userSkillRatings } = useUserSkillsRatings(userId || "");

  const { data: userCodingBadges } = useUserCodingBadges(userId || "");

  useEffect(() => {
    if (userCodingBadges) {
      dispatch(setUserBadgeCount(userCodingBadges.length));
    }
  }, [userCodingBadges, dispatch]);

  const { data: codingBadges } = useCodingBadges();

  useEffect(() => {
    if (codingBadges) {
      dispatch(setTotalBadgeCount(codingBadges.length));
    }
  }, [codingBadges, dispatch]);

  const {data: userProjects} = useUserProjects(userId)

  const sections = useMemo(
    () => [
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
        title: `Interview Tracking`,
        hasProgress: true,
        value: (userBadgeCount * 100) / totalBadgeCount,
        component: typeof userId == "string" && (
          <OfferTable isCAD={isCAD} year={year} data={interviewData} />
        ),
      },
    ],
    [
      userBadgeCount,
      totalBadgeCount,
      userId,
      skillRatings,
      userProjects,
      userSkillRatings,
      isEditable,
      userGoals,
      interviewData,
    ]
  );

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
          <AccountabilityHeatmap entries={accountabilityData ?? []} />
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
