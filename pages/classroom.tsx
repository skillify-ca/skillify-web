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
        <div className="grid grid-cols-1 gap-4 px-4 sm:px-8 w-full">
          <h1 className="text-3xl font-bold">Classroom</h1>
          {data.users.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
