import { useQuery } from "@apollo/client";
import React from "react";
import CoachCard from "../../../components/studentPortal/coaches/CoachCard";
import PageHeader from "../../../components/studentPortal/PageHeader";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import {
  FetchCoachesResponse,
  FETCH_COACHES,
} from "../../../graphql/coding/coaches/fetchCoaches";

export default function CoachesPage() {
  const { data, loading, error } = useQuery<FetchCoachesResponse>(
    FETCH_COACHES
  );

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-8">
          {error ? (
            <div className="col-span-2">
              <ErrorMessage message="Failed to fetch coaching data" />
            </div>
          ) : (
            <>
              <div className="sm:col-span-2">
                <PageHeader
                  title={"Coaches"}
                  description={
                    "Book time with our expert coaches to get 1:1 help. Use them to catch up or to get ahead!"
                  }
                />
              </div>
              {data.coaches.map((coach) => (
                <div className="mx-4" key={coach.user.name}>
                  <CoachCard coach={coach} />
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
