import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_ALL_USER_GOALS } from "../../../../graphql/studentPortal/goals/fetchAllUserGoals";
import { FETCH_USER_LIKES } from "../../../../graphql/studentPortal/goals/fetchUserLikes";
import { useAuth } from "../../../../lib/authContext";
import GoalCard from "./GoalCard";

export type Goal = {
  id: string;
  description: string;
  userName: string;
  completedOn: string;
};

export type Likes = {
  goal_id: string;
  user_id: string;
};

export default function GoalsFeed() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const { user } = useAuth();
  const [likes, setlikes] = useState<Likes[]>([]);

  useQuery(FETCH_ALL_USER_GOALS, {
    onCompleted: (data) => {
      const transformedGoals = data.user_goals.map((goal) => {
        return {
          id: goal.id,
          description: goal.goalName,
          userName: goal.usersTable.name,
          completedOn: goal.updatedAt,
        };
      });

      setGoals(transformedGoals);
    },
  });

  useQuery(FETCH_USER_LIKES, {
    variables: {
      userId: user.uid,
    },
    onCompleted: (data) => {
      //  log what data hasura sends us
      console.log("og data", data);

      // transform the data into a type we can use in react
      const transformedLikes = data.goals_likes.map((like) => {
        return {
          user_id: like.user_id,
          goal_id: like.goal_id,
        };
      });

      console.log("transformed data", transformedLikes);
      setlikes(transformedLikes);
      // set some state variable
    },
  });

  // returns true if the passed in goal is a part of the likes array
  function isGoalLikedByUser(goal) {
    return likes.map((like) => like.goal_id).includes(goal.id);
  }

  return (
    <div className="h-screen p-4 overflow-y-auto border-l-2 bg-backgroundPrimary">
      <h1 className="mb-4 text-2xl font-bold">Goals Feed</h1>
      {goals.map((goal) => (
        <GoalCard goal={goal} isLiked={isGoalLikedByUser(goal)} />
      ))}
    </div>
  );
}
