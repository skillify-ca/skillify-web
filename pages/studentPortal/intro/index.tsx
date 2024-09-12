import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import UnitView from "../../../components/studentPortal/lessons/UnitView";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import PageHeader from "../../../components/ui/PageHeader";
import {
  FETCH_USER_INTRO_NODES,
  transform,
} from "../../../graphql/studentPortal/courses/fetchUserIntroNodes";
import { UPDATE_USER } from "../../../graphql/studentPortal/users/updateUser";

import { useAuth } from "../../../lib/authContext";
import { Unit } from "../../api/studentPortal/units";

export default function StudentPortalPage() {
  const { user } = useAuth();

  const [updateUser] = useMutation(UPDATE_USER);
  const { data, error } = useQuery(FETCH_USER_INTRO_NODES, {
    variables: {
      userId: user.uid,
    },
  });
  const [units, setUnits] = useState<Unit[]>([]);

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
          units.map((it, i) => <UnitView key={it.title} data={it} />)
        )}
      </div>
    </div>
  );
}

StudentPortalPage.auth = true;
