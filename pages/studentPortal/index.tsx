import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import { useEffect, useState } from "react";

import UnitView from "../../components/studentPortal/lessons/UnitView";
import ErrorMessage from "../../components/ui/ErrorMessage";
import PageHeader from "../../components/ui/PageHeader";
import {
  FETCH_USER_INTRO_NODES,
  transform,
} from "../../graphql/studentPortal/courses/fetchUserIntroNodes";
import {
  INIT_USER_INTRO_NODES,
  objects,
} from "../../graphql/studentPortal/courses/initUserIntroNodes";
import { UPDATE_USER } from "../../graphql/studentPortal/users/updateUser";
import { useAuth } from "../../lib/authContext";

import React from "react";
import GoalsFeed from "../../components/studentPortal/goals/feed/GoalsFeed";
import { Unit } from "../api/studentPortal/units";

export default function StudentPortalPage() {
  const { user } = useAuth();
  const [initUserNodes] = useMutation(INIT_USER_INTRO_NODES);
  const [updateUser] = useMutation(UPDATE_USER);

  const { data, error } = useQuery(FETCH_USER_INTRO_NODES, {
    variables: {
      userId: user.uid,
    },
  });
  const [units, setUnits] = useState<Unit[]>([]);
  useEffect(() => {
    // TODO move this to user onboarding, so we're not re-initializing the nodes on every page load
    if (user) {
      initUserNodes({
        variables: {
          objects: objects(user),
        },
        refetchQueries: [
          {
            query: FETCH_USER_INTRO_NODES,
            variables: {
              userId: user.uid,
            },
          },
        ],
      });
    }
  }, [user]);

  useEffect(() => {
    if (data) {
      setUnits(
        transform(data).filter(
          (it) =>
            it.title === "HTML" ||
            it.title === "CSS" ||
            it.title === "JavaScript"
        )
      );
    }
  }, [data]);

  useEffect(() => {
    updateUser({
      variables: {
        userId: user.uid,
        last_seen: new Date(),
        profile_image: user.photoURL,
      },
    });
  }, [user]);

  return (
    <div className="grid w-full grid-cols-12 ">
      <div className="flex flex-col h-screen col-span-8 px-4 pb-4 overflow-y-auto sm:px-8 sm:pb-8">
        <PageHeader
          title={`Let's start learning, ${user.displayName}`}
          description={moment().format("MMM Do YYYY")}
        />
        <div className="grid grid-cols-1 gap-4">
          {error ? (
            <ErrorMessage message={"Failed to fetch student dashboard"} />
          ) : (
            units.map((it, i) => <UnitView key={i} data={it} />)
          )}
        </div>
      </div>
      <div className="hidden w-full col-span-4 overflow-y-auto sm:flex">
        <GoalsFeed />
      </div>
    </div>
  );
}

StudentPortalPage.auth = true;
