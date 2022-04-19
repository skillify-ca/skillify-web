import { User } from "../../../graphql/coding/classroom/fetchUsers";
import { format } from "date-fns";

type UserCardProps = {
  user: User;
};
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="grid grid-cols-6 p-4 bg-white shadow-lg">
      <img src={user.profile_image} className="w-24 rounded-full" />
      <div className="flex flex-col justify-center col-span-2 gap-2 text-left ">
        <p className="text-lg font-bold">{user.name}</p>
        <p className="">{"Badges Earned: " + user.badges_earned}</p>
      </div>
      <div className="flex items-center justify-end col-span-3 ">
        <p className="">
          {"Joined " + format(new Date(user.created_at), "MMMM yyyy")}
        </p>
      </div>
    </div>
  );
}
