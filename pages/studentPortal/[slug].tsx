import React from "react";
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

interface StudentPortalPageProps {
  units: Unit[];
}
export default function StudentPortalPage({ units }: StudentPortalPageProps) {
  const { user } = useAuth();

  return (
    <>
      <p className="font-bold">January 1, 2022</p>
      <p className="mb-8 text-3xl font-bold">
        Let's start learning, {user.displayName}
      </p>
      <div className="grid grid-cols-1 gap-4">
        {units.map((it) => (
          <UnitView data={it} />
        ))}
      </div>
    </>
  );
}
export async function getStaticProps({ params }) {
  let units = [];
  if (params.slug === "intro") {
    units = introUnits;
  } else if (params.slug === "react") {
    units = reactUnits;
  } else if (params.slug === "interview") {
    units = interviewUnits;
  } else if (params.slug === "android") {
    units = androidUnits;
  }
  return {
    props: {
      units,
    }, // will be passed to the page component as props
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
    fallback: true, // false or 'blocking'
  };
}

StudentPortalPage.auth = true;
