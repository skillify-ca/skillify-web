import { useQuery } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
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
    <div>
      <Navbar />
      <div className="overflow-auto bg-scroll heropattern-hideout-blue-100 bg-gray-100 h-screen">
        {badgeDetail && (
          <div className="flex flex-col justify-center w-1/2 ml-auto mr-auto mt-8 bg-white p-8 rounded-3xl">
            <p className="text-center text-3xl mb-4 font-semibold">
              {" "}
              {badgeDetail.title}{" "}
            </p>
            <img src={badgeDetail.image} className="w-72 m-auto"></img>
            <p className="text-center mt-4"> {badgeDetail.description} </p>
          </div>
        )}
      </div>
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
      { params: { slug: "5" } },
      { params: { slug: "6" } },
      { params: { slug: "7" } },
      { params: { slug: "8" } },
      { params: { slug: "9" } },
      { params: { slug: "10" } },
      { params: { slug: "11" } },
      { params: { slug: "12" } },
    ],
    fallback: true,
  };
}

export default BadgeDetailsPage;
