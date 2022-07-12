import React, { useEffect, useState } from "react";
import Sidebar from "../../components/coding/studentPortal/Sidebar";
import UnitView from "../../components/coding/studentPortal/UnitView";
import { useAuth } from "../../lib/authContext";
import {
  androidUnits,
  interviewUnits,
  introUnits,
  reactUnits,
  Unit,
} from "../api/studentPortal/units";

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

interface StudentPortalPageProps {
  slug: string;
}
export default function StudentPortalPage({ slug }: StudentPortalPageProps) {
  const { user } = useAuth();

  const [initUserNodes] = useMutation(INIT_USER_INTRO_NODES);
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_INTRO_NODES, {
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
    if (slug === "react") {
      setUnits(reactUnits);
    } else if (slug === "interview") {
      setUnits(interviewUnits);
    } else if (data) {
      setUnits(transform(data));
    }
  }, [data, slug]);

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
      <div className="p-4 bg-white shadow-md mb-14 sm:p-8 dark:bg-gray-900">
        <p className="font-bold">{moment().format("MMM Do YYYY")}</p>
        <p className="text-3xl font-bold">
          Let's start learning, {user.displayName}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {units.map((it) => (
          <UnitView data={it} />
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "intro" } },
      { params: { slug: "react" } },
      { params: { slug: "interview" } },
      { params: { slug: "android" } },
    ],
    fallback: true,
  };
}

StudentPortalPage.auth = true;
