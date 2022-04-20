import { User } from "../../../graphql/coding/classroom/fetchUsers";
import { format } from "date-fns";

type UserCardProps = {
  user: User;
};
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 p-4 bg-white shadow-lg">
      <img src={user.profile_image} className="w-24 rounded-full" />
      <div className="flex flex-col sm:items-start items-end justify-center col-span-2  ml-4">
        <p className="text-lg font-bold">{user.name}</p>
        <p className="text-sm">
          {"Joined " + format(new Date(user.created_at), "MMMM yyyy")}
        </p>
      </div>
      <div className="flex items-center sm:justify-end col-span-3 ">
        <p className="">
          <span className="font-bold mr-2">Badges Earned:</span> 
          {user.badges_earned}
        </p>
      </div>
    </div>
  );
}
