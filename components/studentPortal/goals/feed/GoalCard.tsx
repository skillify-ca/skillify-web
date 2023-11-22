import HeartOutLineIcon from "../HeartOutLineIcon";
import HeartSolidLineIcon from "../HeartSolidLineIcon";
import { Goal } from "./GoalsFeed";

type GoalCardProps = {
  goal: Goal;
  isLiked: boolean;
};

export default function GoalCard({ goal, isLiked }: GoalCardProps) {
  return (
    <div
      key={goal.description}
      className="p-2 mb-4 border-2 rounded bg-backgroundSecondary"
    >
      <p className="text-sm font-bold text-bulbasaur-500">Completed</p>
      <p>{goal.description}</p>
      <p className="font-bold">{goal.userName} </p>
      <p>
        {new Date(goal.completedOn).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      {isLiked ?
        <HeartSolidLineIcon /> :
        <HeartOutLineIcon />}

    </div>
  );
}
