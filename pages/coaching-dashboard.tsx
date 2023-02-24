import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDetailCard from "../components/coding/studentPortal/ProfileDetailCard";
import {
  FetchUserProfileCardResponse,
  FETCH_USER_PROFILE_CARD,
} from "../graphql/fetchUserProfileCard";
import Link from "next/link";
import { userSelector, setUserList } from "../redux/userSlice";
import { format } from "date-fns";
import {
  AllUserGoalsData,
  FetchAllUserGoalsDataResponse,
  FETCH_ALL_USER_GOALS,
} from "../graphql/fetchAllUserGoals";
import { profileSelector, setTotalBadgeCount } from "../redux/profileSlice";
import {
  FetchTotalBadgesCountResponse,
  FETCH_TOTAL_USER_BADGES_COUNT,
} from "../graphql/fetchTotalUserBadgesCount";
import { useAuth } from "../lib/authContext";
import { useRouter } from "next/router";
import { FetchUserRoleData, FETCH_USER_ROLE } from "../graphql/fetchUserRole";
import { Button } from "../components/ui/Button";

const coachingDashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  const dispatch = useDispatch();
  const { userList } = useSelector(userSelector);
  const { totalBadgeCount } = useSelector(profileSelector);
  const [goalsList, setGoalsList] = useState<AllUserGoalsData[]>();
  const [completedGoalsList, setCompletedGoalsList] = useState([]);
  const [goalCompletionDateList, setGoalCompletionDateList] = useState([]);

  const { data, loading } = useQuery<FetchUserProfileCardResponse>(
    FETCH_USER_PROFILE_CARD,
    {
      onCompleted: () => {
        if (data?.users?.length > 0) {
          dispatch(setUserList(data.users));
        }
      },
    }
  );
  useQuery<FetchUserRoleData>(FETCH_USER_ROLE, {
    variables: {
      _id: user.uid,
    },
    if(loading) {
      return <div>Loading...</div>;
    },
    onCompleted: (roleData) => {
      if (roleData.users[0].userRole.value !== "coach") {
        router.replace("/studentPortal");
      }
    },
  });

  const {} = useQuery<FetchAllUserGoalsDataResponse>(FETCH_ALL_USER_GOALS, {
    onCompleted: (data) => {
      if (data?.user_goals?.length > 0) {
        setGoalsList(data.user_goals);
      }
    },
  });

  useEffect(() => {
    if (goalsList && userList) {
      const enrolledUsers = userList.map((user) => user.id);
      const goalNames = goalsList.reduce((result, user) => {
        result[user.userId] = user.goalName;
        return result;
      }, {});
      const completedGoals = enrolledUsers.map((userId) => {
        const goalName = goalNames[userId] || "No goals listed.";
        return { [userId]: goalName };
      });
      const completionDates = goalsList.reduce((result, user) => {
        result[user.userId] = user.updatedAt;
        return result;
      }, {});

      const goalCompletionDates = enrolledUsers.map((userId) => {
        const updatedAt = completionDates[userId] || null;
        return { [userId]: updatedAt };
      });
      setCompletedGoalsList(completedGoals);
      setGoalCompletionDateList(goalCompletionDates);
    }
  }, [goalsList, userList]);

  const { loading: totalUserBadgeCountLoading } =
    useQuery<FetchTotalBadgesCountResponse>(FETCH_TOTAL_USER_BADGES_COUNT, {
      onCompleted: (data) => {
        if (data) {
          dispatch(
            setTotalBadgeCount(data.coding_badges_aggregate.aggregate.count)
          );
        }
      },
    });

  if (loading) {
    return <div className="flex place-content-center">"Loading..."</div>;
  }
  return (
    <div className="flex flex-col p-4 m-4 ">
      <p className="mb-8 text-3xl font-bold">Coaching Dashboard</p>
      <Link href="/studentPortal/admin/badges">
        <Button label="New Badge" />
      </Link>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {userList.map((it, index) => {
          const completionDate = goalCompletionDateList[index];
          const completedGoal = completedGoalsList[index];
          return (
            <Link href={"profile/" + it.id} key={index}>
              <div className="container">
                <ProfileDetailCard
                  avatar={
                    it.profile_image == null
                      ? "../../images/logo-2.png"
                      : it.profile_image
                  }
                  name={it.name}
                  joinDate={new Date(it.created_at)}
                  badges={it.user_coding_badges_aggregate.aggregate.count}
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
                      : "‎ N/A‎ "
                  }
                  totalBadgeCount={totalBadgeCount}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default coachingDashboard;
