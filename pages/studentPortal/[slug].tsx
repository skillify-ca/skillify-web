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

interface StudentPortalPageProps {
  slug: string;
}
export default function StudentPortalPage({ slug }: StudentPortalPageProps) {
  const { user } = useAuth();

  const [initUserNodes] = useMutation(INIT_USER_INTRO_NODES);
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
          },
        ],
      });
    }
  }, [user]);

  useEffect(() => {
    if (slug === "react") {
      setUnits(reactUnits);
    } else if (data) {
      setUnits(transform(data));
    }
  }, [data]);

  return (
    <div className="flex flex-col w-full p-8 ">
      <div className="p-4 mb-8 bg-white shadow-md">
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
