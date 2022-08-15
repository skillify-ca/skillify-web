import { useQuery } from "@apollo/client";
import React from "react";
import CoachCard from "../components/coding/coaches/CoachCard";
import PageHeader from "../components/coding/PageHeader";
import {
  FetchCoachesResponse,
  FETCH_COACHES,
} from "../graphql/coding/coaches/fetchCoaches";

export default function CoachesPage() {
  const { data, loading } = useQuery<FetchCoachesResponse>(FETCH_COACHES);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4 px-4 sm:px-8">
          <PageHeader
            title={"Coaches"}
            description={
              "Book time with our expert coaches to get 1:1 help. Use them to catch up or to get ahead!"
            }
          />
          {data.coaches.map((coach) => (
            <CoachCard coach={coach} />
          ))}
        </div>
      )}
    </div>
  );
}
