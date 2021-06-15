import { useQuery } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";
import { FETCH_BADGE_INFO } from "../../graphql/fetchBadgeInfo";

const BadgeDetailsPage = ({ slug }) => {
  const badgeDetailResults = useQuery(FETCH_BADGE_INFO, {
    variables: {
      badgeId: slug,
    },
  });

  let badgeDetail;
  if (badgeDetailResults.data) {
    badgeDetail = badgeDetailResults.data.badges[0];
  }

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      {badgeDetail && (
        <div className="p-4 flex flex-col items-center justify-center">
          <p> {badgeDetail.title} </p>
          <img src={badgeDetail.image}></img>
          <p> {badgeDetail.description} </p>
        </div>
      )}
    </div>
  );
};

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
      { params: { slug: "1" } },
      { params: { slug: "2" } },
      { params: { slug: "3" } },
      { params: { slug: "4" } },
    ],
    fallback: true,
  };
}

export default BadgeDetailsPage;
