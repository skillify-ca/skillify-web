import { Coach } from "../../../graphql/coding/coaches/fetchCoaches";
import { Button } from "../../ui/Button";

type CoachCardProps = {
  coach: Coach;
};
export default function CoachCard({ coach }: CoachCardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 bg-white shadow-lg dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <img src={coach.user.profile_image} className="w-24 rounded-full" />
        <p className="text-lg font-bold text-center">{coach.user.name}</p>
      </div>
      <div className="flex items-center col-span-3">
        <p className="w-full text-center">
          <span className="mr-2 font-bold">I can help with:</span>
          {coach.competencies}
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <a href={coach.link} target="_blank">
          <Button label="Book Time" />
        </a>
      </div>
    </div>
  );
}
