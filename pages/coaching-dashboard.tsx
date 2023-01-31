import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDetailCard from "../components/coding/studentPortal/ProfileDetailCard";
import {
  FetchUserProfileCardResponse,
  FETCH_USER_PROFILE_CARD,
} from "../graphql/fetchUserProfileCard";
import Link from "next/link";
import { userSelector, setUserList, setEarnedBadges } from "../redux/userSlice";
import {
  FetchEarnedBadges,
  FETCH_EARNED_BADGES,
} from "../graphql/fetchEarnedBadges";
import { transformBadgesEarned } from "./api/coachingDashboard";
import { format } from "date-fns";
import {
  AllUserGoalsData,
  FetchAllUserGoalsDataResponse,
  FETCH_ALL_USER_GOALS,
} from "../graphql/fetchAllUserGoals";

const coachingDashboard = () => {
  const dispatch = useDispatch();

  const [goalsList, setGoalsList] = useState<AllUserGoalsData[]>();
  const [completedGoalsList, setCompletedGoalsList] = useState([]);
  const [goalCompletionDateList, setGoalCompletionDateList] = useState([]);
  const { userList, earnedBadges } = useSelector(userSelector);

  const { loading, data } = useQuery<FetchUserProfileCardResponse>(
    FETCH_USER_PROFILE_CARD,
    {
      onCompleted: () =>
        data.users.length > 0 ? dispatch(setUserList(data.users)) : loading,
    }
  );
  const enrolledUsers = userList.map((user) => user.id);

  const {} = useQuery<FetchEarnedBadges>(FETCH_EARNED_BADGES, {
    variables: {
      enrolledIds: enrolledUsers,
    },
    onCompleted: (data) => {
      dispatch(setEarnedBadges(data.user_coding_badges));
    },
  });

  const {} = useQuery<FetchAllUserGoalsDataResponse>(FETCH_ALL_USER_GOALS, {
    onCompleted: (data) => {
      setGoalsList(data.user_goals);
      const goalNames = data.user_goals.reduce((result, user) => {
        result[user.userId] = user.goalName;
        return result;
      }, {});
      const completedGoals = enrolledUsers.map((userId) => {
        const goalName = goalNames[userId] || "No goals listed.";
        return { [userId]: goalName };
      });
      const completionDates = data.user_goals.reduce((result, user) => {
        result[user.userId] = user.updatedAt;
        return result;
      }, {});

      const goalCompletionDates = enrolledUsers.map((userId) => {
        const updatedAt = completionDates[userId] || null;
        return { [userId]: updatedAt };
      });
      setCompletedGoalsList(completedGoals);
      setGoalCompletionDateList(goalCompletionDates);
    },
  });

  useEffect(() => {
    const aggregatedBadgeCount = earnedBadges.reduce((acc, badgeId) => {
      if (acc[badgeId.userId]) {
        acc[badgeId.userId] += 1;
      } else {
        acc[badgeId.userId] = 1;
      }
      return acc;
    }, {});
    dispatch(
      setUserList(transformBadgesEarned(userList, aggregatedBadgeCount))
    );
  }, [earnedBadges]);

  if (loading) {
    return <div className="flex place-content-center">"Loading..."</div>;
  }
  return (
    <div className="flex flex-col p-4 m-4 ">
      <p className="mb-8 text-3xl font-bold">Coaching Dashboard</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {userList.map((it, index) => {
          const completionDate = goalCompletionDateList[index];
          const completedGoal = completedGoalsList[index];
          return (
            <div key={index}>
              <Link href={"profile/" + it.link}>
                <div className="flex">
                  <ProfileDetailCard
                    avatar={
                      it.profile_image == null
                        ? "../../images/logo-2.png"
                        : it.profile_image
                    }
                    name={it.name}
                    joinDate={it.created_at}
                    badges={it.badges_earned}
                    currentBadge={
                      it.coding_badge == null
                        ? {
                            title: "No badges earned.",
                            image: "../../images/logo-2.png",
                          }
                        : it.coding_badge
                    }
                    completedGoal={
                      completedGoal &&
                      completedGoal[Object.keys(completedGoal)[0]]
                    }
                    link={it.link}
                    completedDate={
                      completionDate &&
                      completionDate[Object.keys(completionDate)[0]] != null
                        ? format(
                            new Date(
                              completionDate[Object.keys(completionDate)[0]]
                            ),
                            "MM/dd"
                          )
                        : "NA"
                    }
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default coachingDashboard;
