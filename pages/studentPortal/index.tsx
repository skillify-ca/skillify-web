import { useMutation, useQuery } from "@apollo/client";
import { differenceInHours } from "date-fns";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FreemiumDialogComponent from "../../components/studentPortal/freemium/FreemiumDialogComponent";
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
import {
  FetchModalData,
  FETCH_LAST_SEEN_MODAL,
} from "../../graphql/studentPortal/freemium/fetchLastSeenModal";
import { UPSERT_LAST_SEEN_MODAL } from "../../graphql/studentPortal/freemium/upsertLastSeenModal";
import { UPDATE_USER } from "../../graphql/studentPortal/users/updateUser";

import { useAuth } from "../../lib/authContext";
import { profileSelector } from "../../redux/profileSlice";
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
      console.log("units is set to:", data);
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

  const [updateLastSeenModal] = useMutation(UPSERT_LAST_SEEN_MODAL);
  const [showModal, setShowModal] = useState(false);
  const { userRole } = useSelector(profileSelector);

  useQuery<FetchModalData>(FETCH_LAST_SEEN_MODAL, {
    variables: {
      userId: user.uid,
    },
    skip: userRole != "paid" && userRole != "freemium",

    onCompleted: (data) => {
      const lastSeenValue = data.freemium_users[0]?.lastSeenModal;
      const lastSeenDifference = lastSeenValue
        ? differenceInHours(new Date(), new Date(lastSeenValue))
        : null;

      if (lastSeenDifference === null || lastSeenDifference > 24) {
        setShowModal(true);
        updateLastSeenModal({
          variables: { userId: user.uid, lastSeenModal: new Date() },
        });
      }
    },
  });

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
      {showModal && <FreemiumDialogComponent />}
    </div>
  );
}

StudentPortalPage.auth = true;
