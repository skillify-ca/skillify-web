import { User } from "../../../graphql/coding/classroom/fetchUsers";
import { format } from "date-fns";

type UserCardProps = {
  user: User;
};
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="grid grid-cols-1 p-4 bg-white shadow-lg sm:grid-cols-6 dark:bg-gray-900">
      <img src={user.profile_image} className="w-24 rounded-full" />
      <div className="flex flex-col items-end justify-center col-span-2 ml-4 sm:items-start">
        <p className="text-lg font-bold">{user.name}</p>
        <p className="text-sm">
          {"Joined " + format(new Date(user.created_at), "MMMM yyyy")}
        </p>
      </div>
      <div className="flex items-center col-span-3 sm:justify-end ">
        <p className="">
          <span className="mr-2 font-bold">Badges Earned:</span>
          {user.badges_earned}
        </p>
      </div>
    </div>
  );
}
