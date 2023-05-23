import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import ExpandableContainer from "../../../components/ui/ExpandableContainer";
import { FETCH_BADGE } from "../../../graphql/studentPortal/achievements/fetchBadge";
import { useAuth } from "../../../lib/authContext";

// const Box = dynamic(() => import("../../components/stories/Box"));

type Badge = {
  title: string;
  description: string;
  image: string;
};
const BadgeDetailsPage = ({ slug }) => {
  const { user } = useAuth();
  const [badgeDetail, setBadgeData] = useState<Badge>();

  useQuery(FETCH_BADGE, {
    variables: {
      badgeId: slug,
    },
    onCompleted: (data) => {
      setBadgeData(data.coding_badges[0]);
    },
  });

  return (
    <div>
      <div className="h-full p-4 bg-gray-100 heropattern-hideout-blue-100">
        {badgeDetail && (
          <div className="flex flex-col justify-center p-8 ml-auto mr-auto bg-white md:w-1/2 rounded-3xl">
            <p className="mb-4 text-3xl font-semibold text-center">
              {" "}
              {badgeDetail.title}{" "}
            </p>
            <div className="grid grid-cols-2 space-x-4 mx-auto ">
              <div className="md:bg-blue-900">
                <img
                  src={badgeDetail.image}
                  className="object-contain md:w-full md:h-full  md:p-4 transition-all transform hover:animate-shake"
                />
              </div>
              <div>
                <p className=" text-center  "> {badgeDetail.description} </p>
              </div>
            </div>
            <div className="space-y-8 py-4">
              {" "}
              <ExpandableContainer open={false} title={"Getting Started"}>
                <div className="px-8 mb-8 ">
                  <li>Step one to getting started on this badge</li>
                  <li>Do this next, after you have finished step one</li>
                  <li>Step three is the final step</li>
                  <li>...</li>
                </div>
              </ExpandableContainer>
              <ExpandableContainer open={false} title={"Resources"}>
                <div className="px-8 mb-8  ">
                  <li className="">Helpful resource one</li>
                  <li>Helpful resource two</li>
                  <li>Helpful resource three</li>
                  <li>...</li>
                </div>
              </ExpandableContainer>
            </div>
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
