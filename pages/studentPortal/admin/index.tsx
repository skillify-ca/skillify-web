import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDetailCard from "../../../components/studentPortal/admin/ProfileDetailCard";
import { useAllUserGoals } from "../../../components/studentPortal/goals/feed/useAllUserGoals";
import { useUserRole } from "../../../components/studentPortal/layout/useUserRole";
import { Button } from "../../../components/ui/Button";
import Dropdown from "../../../components/ui/Dropdown";
import {
  Users
} from "../../../graphql/studentPortal/admin/fetchUserProfileCard";
import {
  AllUserGoalsData
} from "../../../graphql/studentPortal/goals/fetchAllUserGoals";
import { useTotalUserBadgesCount } from "../../../hooks/useTotalUserBadgesCount";
import { useAuth } from "../../../lib/authContext";
import {
  UserRole,
  profileSelector,
  setTotalBadgeCount,
  setUserRole
} from "../../../redux/profileSlice";
import { useUserProfileCard } from "./useUserProfileCard";

const coachingDashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  const dispatch = useDispatch();
  const [userList, setUserList] = useState<Users[]>([]);
  const [userRoleState, setUserRoleState] = useState<UserRole>();
  const [goalsList, setGoalsList] = useState<AllUserGoalsData[]>();
  const [completedGoalsList, setCompletedGoalsList] = useState([]);
  const [goalCompletionDateList, setGoalCompletionDateList] = useState([]);
  const { totalBadgeCount } = useSelector(profileSelector);

  const { loading, data: userProfileCardData } = useUserProfileCard();

  useEffect(() => {
    if (userProfileCardData?.users && userProfileCardData.users.length > 0) {
      setUserList(userProfileCardData.users);
    }
  }, [userProfileCardData]);

  const { data: userRoleData } = useUserRole(user?.uid);

  useEffect(() => {
    if (userRoleData && userRoleData.users && userRoleData.users.length > 0) {
      if (userRoleData.users[0].userRole !== "coach") {
        router.replace("/studentPortal");
      }
      setUserRoleState(userRoleData.users[0].userRole);
    }
  }, [userRoleData, router]);

  const handleChangeUserRole = (value: string) => {
    setUserRoleState(value as UserRole);
    dispatch(setUserRole(value as UserRole));
  };

  const { data: allUserGoalsData } = useAllUserGoals();

  useEffect(() => {
    if (allUserGoalsData?.user_goals && allUserGoalsData.user_goals.length > 0) {
      setGoalsList(allUserGoalsData.user_goals);
    }
  }, [allUserGoalsData]);

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

  const { data: totalBadgesCountData } = useTotalUserBadgesCount();

  useEffect(() => {
    if (totalBadgesCountData) {
      dispatch(
        setTotalBadgeCount(totalBadgesCountData.coding_badges_aggregate.aggregate.count)
      );
    }
  }, [totalBadgesCountData, dispatch]);

  if (loading) {
    return <div className="flex place-content-center">"Loading..."</div>;
  }
  return (
    (<div className="flex flex-col p-4 m-4 ">
      <p className="mb-8 text-3xl font-bold">Coaching Dashboard</p>
      <div className="flex justify-between">
        <div className="flex gap-4 mb-4">
          <Link href="/studentPortal/admin/badges/create" legacyBehavior>
            <Button label="New Badge" />
          </Link>
          <Link href="/studentPortal/admin/badges/assign" legacyBehavior>
            <Button
              label="Assign"
              backgroundColor="white"
              textColor="primary"
            />
          </Link>
        </div>
        <div>
          {/* dropdown */}
          <Dropdown
            label={userRoleState || "Select User Role"}
            options={[UserRole.COACH, UserRole.STUDENT, UserRole.FREEMIUM]}
            onSelect={(value) => handleChangeUserRole(value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {userList
          .map((it) => it)
          .sort(
            (a, b) =>
              b.user_coding_badges_aggregate.aggregate.count -
              a.user_coding_badges_aggregate.aggregate.count
          )
          .map((it, index) => {
            const completionDate = goalCompletionDateList[index];
            const completedGoal = completedGoalsList[index];
            return (
              (<Link href={"/profile/" + it.id} key={index} legacyBehavior>
                <div className="container">
                  <ProfileDetailCard
                    userId={it.id}
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
                    totalBadgeCount={totalBadgeCount}
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
                  />
                </div>
              </Link>)
            );
          })}
      </div>
    </div>)
  );
};

export default coachingDashboard;

coachingDashboard.premium = true;
