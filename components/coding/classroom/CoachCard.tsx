import { Coach } from "../../../graphql/coding/coaches/fetchCoaches";
import { Button } from "../../ui/Button";

type CoachCardProps = {
  coach: Coach;
};
export default function CoachCard({ coach }: CoachCardProps) {
  return (
    <div className="grid grid-cols-1 p-4 bg-white shadow-lg lg:grid-cols-7 dark:bg-gray-900">
      <img src={coach.user.profile_image} className="w-24 rounded-full" />
      <div className="flex flex-col items-end justify-center col-span-1 ml-4 sm:items-start">
        <p className="text-lg font-bold">{coach.user.name}</p>
      </div>
      <div className="flex items-center col-span-3">
        <p className="">
          <span className="mr-2 font-bold">I can help with:</span>
          {coach.competencies}
        </p>
      </div>
      <div className="flex items-center justify-end">
        <a href={coach.link} target="_blank">
          <Button label="Book Time" />
        </a>
      </div>
    </div>
  );
}
