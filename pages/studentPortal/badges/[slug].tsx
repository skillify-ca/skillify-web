import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_BADGE } from "../../../graphql/fetchBadge";
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
      <div className="h-screen p-4 bg-gray-100 heropattern-hideout-blue-100">
        {badgeDetail && (
          <div className="flex flex-col justify-center p-8 ml-auto mr-auto bg-white md:w-1/2 rounded-3xl">
            <p className="mb-4 text-3xl font-semibold text-center">
              {" "}
              {badgeDetail.title}{" "}
            </p>
            <div className="h-64 bg-blue-900">
              <img
                src={badgeDetail.image}
                className="object-contain w-full h-full p-4 transition-all transform hover:animate-shake"
              />
              {/* <Canvas camera={{ position: [10, 2, -10], fov: 60 }}>
                <Preload all />
                <group>
                  <Box
                    url={badgeDetail ? badgeDetail.image : "/images/lock.png"}
                  />
                  <OrbitControls
                    hasEventListener={false}
                    removeEventListener={() => {}}
                    addEventListener={() => {}}
                    dispatchEvent={() => {}}
                  />
                  <Stars />
                </group>
              </Canvas> */}
            </div>
            <p className="mt-4 text-center"> {badgeDetail.description} </p>
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
