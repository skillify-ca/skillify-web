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
  FetchAllUserGoalsDataResponse,
  FETCH_ALL_USER_GOALS,
} from "../graphql/fetchAllUserGoals";

const coachingDashboard = () => {
  const dispatch = useDispatch();

  const [nextGoals, setNextGoals] = useState({});
  const [targetDates, setTargetDates] = useState({});
  const { userList, earnedBadges } = useSelector(userSelector);

  const { loading, data } = useQuery<FetchUserProfileCardResponse>(
    FETCH_USER_PROFILE_CARD,
    {
      onCompleted: () =>
        data.users.length > 0 ? dispatch(setUserList(data.users)) : loading,
    }
  );
  const enrolledUsers = userList.map((user) => user.id);

  // const goalTitle = userGoals?.filter((goal) => goal.goalName[0]);
  // const targetDate = userGoals?.filter((goal) =>
  //   format(new Date(goal.targetDate[0]), "MM/dd")
  // );

  const {} = useQuery<FetchEarnedBadges>(FETCH_EARNED_BADGES, {
    variables: {
      enrolledIds: enrolledUsers,
    },
    onCompleted: (data) => {
      dispatch(setEarnedBadges(data.user_coding_badges));
    },
  });

  const {} = useQuery<FetchAllUserGoalsDataResponse>(FETCH_ALL_USER_GOALS, {
    variables: {
      enrolledIds: enrolledUsers,
    },
    onCompleted: (data) => {
      const firstGoals = data.user_goals.reduce((result, user) => {
        result[user.userId] = user.goalName;
        return result;
      }, {});
      const nextGoalsList = enrolledUsers.map((userId) => {
        const goalName = firstGoals[userId] || "No goals listed.";
        return { [userId]: goalName };
      });
      const firstTargetDate = data.user_goals.reduce((result, user) => {
        result[user.userId] = user.targetDate;
        return result;
      }, {});
      const targetDateList = enrolledUsers.map((userId) => {
        const targetDate = firstTargetDate[userId] || null;
        return { [userId]: targetDate };
      });
      setNextGoals(nextGoalsList);
      setTargetDates(targetDateList);
    },
  });

  console.log(enrolledUsers);
  console.log("NG", nextGoals);

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
          const goal = nextGoals[index];
          const targetDate = targetDates[index];

          return (
            <div key={index}>
              <Link href={"profile/" + it.link}>
                <div className="">
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
                    nextGoal={goal && goal[Object.keys(goal)[0]]}
                    link={it.link}
                    targetDate={
                      targetDate
                        ? format(
                            new Date(targetDate[Object.keys(targetDate)[0]]),
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
