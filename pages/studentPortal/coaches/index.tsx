import { useQuery } from "@apollo/client";
import Lottie from "lottie-react";
import React from "react";
import { useSelector } from "react-redux";
import CoachCard, { LockedCoachCard, VithushanLockedCoachCard } from "../../../components/studentPortal/coaches/CoachCard";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import PageHeader from "../../../components/ui/PageHeader";
import {
  Coach,
  FETCH_COACHES,
  FetchCoachesResponse,
} from "../../../graphql/studentPortal/coaches/fetchCoaches";
import upgradeAnimation from "../../../lib/animations/upgrade.json";
import { profileSelector } from "../../../redux/profileSlice";
import { fetchProfilePicture } from "../../api/studentPortal/profile/profilePicturesClient";

export default function CoachesPage() {
  const { userRole } = useSelector(profileSelector);
  const { data, loading, error } = useQuery<FetchCoachesResponse>(
    FETCH_COACHES,
    {
      onCompleted: async (data) => {
        Promise.all(
          data.coaches.map(async (coach) => {
            return {
              ...coach,
              user: {
                ...coach.user,
                profile_image: await fetchProfilePicture(coach.user.id),
              },
            };
          })
        ).then((coachesWithImages) => setCoaches(coachesWithImages.reverse()));
      },
    }
  );

  const [coaches, setCoaches] = React.useState<Coach[]>([]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {userRole === "freemium" && (
        <div className="w-full max-w-4xl p-4 m-4 bg-slate-200 flex flex-col gap-4 justify-center items-center">
          <div className="flex items-center gap-4 px-4">
            <Lottie
              className="w-16"
              animationData={upgradeAnimation}
              loop={false}
            />
            <h2 className="text-2xl">Upgrade your plan</h2>
          </div>
          <p>
            Paid users meet frequently with all of our amazing coaches to get
            unstuck and move faster towards their learning and careergoals.
          </p>
        </div>
      )}
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
            {coaches.map((coach) => (
              <div className="mx-4" key={coach.user.name}>
                {userRole === "freemium" && !coach.user.name.startsWith("Vithushan") ? (
                  <LockedCoachCard coach={coach} />
                ) : userRole === "freemium" && coach.user.name.startsWith("Vithushan") ? (
                    <VithushanLockedCoachCard coach={coach} />
                  ) : (
                  <CoachCard coach={coach} />
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
