import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { createClient } from "contentful";
import { useState, useEffect, useRef } from "react";
import TFSA from "../../../../components/finance/tfsa";
import Navbar from "../../../../components/Navbar";

import ContentfulContent from "../../../../components/explore/ContentfulContent";
import { FETCH_COURSE_UNITS } from "../../../../graphql/fetchCourseUnits";

const Explore = ({ unitTitle, entry }) => {
  const getComponent = () => {
    if (unitTitle === "tfsa") {
      return <TFSA />;
    } else {
      return (
        <div className="flex flex-col items-center">
          {entry && <ContentfulContent data={entry.fields.content} />}
        </div>
      );
    }
  };

  if (!entry) {
    return "Loading...";
  }

  return (
    <div>
      <Navbar />
      {getComponent()}
    </div>
  );
};

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CF_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN,
  });
  const level = Number.parseInt(params.slug[1]);
  const unitTitle = params.slug[0];

  const hasuraClient = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await hasuraClient.query({
    query: FETCH_COURSE_UNITS,
    variables: {
      courseId: params.courseId,
    },
  });

  const unit = data.units.find(
    (it) => it.level == level && it.title === unitTitle
  );
  console.log("V", unit);

  const res = await client
    .getEntry(unit.exploreId)
    .catch((e) => console.error(e));

  if (!res) {
    return {
      notFound: true,
    };
  }

  //return multiple descriptions,
  return { props: { entry: res, slug: params.slug } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { courseId: "math1", slug: ["addition", "1"] } },
      { params: { courseId: "math1", slug: ["subtraction", "1"] } },
      { params: { courseId: "math1", slug: ["multiplication", "1"] } },
      { params: { courseId: "math1", slug: ["division", "1"] } },
    ],
    fallback: true,
  };
}

export default Explore;
