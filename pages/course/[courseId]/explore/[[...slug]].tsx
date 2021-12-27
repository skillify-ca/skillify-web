import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { createClient } from "contentful";
import { useState, useEffect, useRef } from "react";
import TFSA from "../../../../components/finance/tfsa";
import Navbar from "../../../../components/Navbar";

import ContentfulContent from "../../../../components/explore/ContentfulContent";
import { getEntryId } from "../../../api/explore";

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
    space: process.env.CF_SPACE_ID,
    accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
  });
  const id = getEntryId(
    params.courseId,
    Number.parseInt(params.slug[1]),
    params.slug[0]
  );

  const res = await client.getEntry(id).catch((e) => console.error(e));

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
      { params: { courseId: "math2", slug: ["addition", "1"] } },
      { params: { courseId: "math2", slug: ["subtraction", "1"] } },
      { params: { courseId: "math2", slug: ["multiplication", "1"] } },
      { params: { courseId: "math2", slug: ["division", "1"] } },
      { params: { courseId: "math2", slug: ["tfsa", "1"] } },
      { params: { courseId: "math2", slug: ["budgeting", "1"] } },
    ],
    fallback: true,
  };
}

export default Explore;
