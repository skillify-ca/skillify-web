import { useQuery } from "@apollo/client";
import React from "react";
import UserCard from "../components/coding/classroom/UserCard";
import {
  FetchUsersResponse,
  FETCH_CLASSROOM_USERS,
} from "../graphql/coding/classroom/fetchUsers";

export default function ClassroomPage() {
  const { data, loading } = useQuery<FetchUsersResponse>(FETCH_CLASSROOM_USERS);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-8">
          <h1 className="col-span-2 text-3xl font-bold">Classroom</h1>
          {data.users.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
