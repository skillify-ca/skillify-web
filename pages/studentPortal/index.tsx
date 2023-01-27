import React, { useEffect, useState } from "react";
import UnitView from "../../components/coding/studentPortal/UnitView";
import { useAuth } from "../../lib/authContext";
import { Unit } from "../api/studentPortal/units";

import moment from "moment";
import { useMutation, useQuery } from "@apollo/client";
import {
  INIT_USER_INTRO_NODES,
  objects,
} from "../../graphql/coding/initUserIntroNodes";
import {
  FETCH_USER_INTRO_NODES,
  transform,
} from "../../graphql/coding/fetchUserIntroNodes";
import { UPDATE_USER } from "../../graphql/updateUser";
import ErrorMessage from "../../components/ui/ErrorMessage";
import PageHeader from "../../components/coding/PageHeader";

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
      setUnits(transform(data));
    }
  }, [data]);

  useEffect(() => {
    // TODO save profile photos to firebase storage and allow users to edit photos
    updateUser({
      variables: {
        userId: user.uid,
        last_seen: new Date(),
        profile_image: user.photoURL,
      },
    });
  }, [user]);

  return (
    <div className="flex flex-col w-full px-4 pb-4 sm:px-8 sm:pb-8 ">
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
  );
}

StudentPortalPage.auth = true;
