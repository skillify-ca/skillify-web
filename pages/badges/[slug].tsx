import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/client";
import React from "react";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import { FETCH_BADGE } from "../../graphql/fetchBadge";
import { FETCH_USER_QUIZZES } from "../../graphql/fetchUserQuiz";
import { userId } from "../../graphql/utils/constants";

const BadgeDetailsPage = ({ slug }) => {
  const [session] = useSession();
  const badgeDetailResults = useQuery(FETCH_BADGE, {
    variables: {
      badgeId: slug,
    },
  });

  let badgeDetail;
  if (badgeDetailResults.data) {
    badgeDetail = badgeDetailResults.data.badges[0];
  }
  const userQuizzesQuery = useQuery(FETCH_USER_QUIZZES, {
    variables: {
      userId: userId(session),
      badgeId: slug,
    },
  });
  let userQuizzes;
  let accuracyList = [];
  let maxAccuracy;
  if (userQuizzesQuery.data) {
    userQuizzes = userQuizzesQuery.data.user_quizzes;
    accuracyList = userQuizzes.map((it) => it.accuracy);
    if (accuracyList.length == 0) {
      maxAccuracy = "Not Attempted";
    } else {
      maxAccuracy = Math.max(...accuracyList) + "%";
    }
  }

  return (
    <div>
      <DiagnosticNavbar />
      <div className="overflow-auto bg-scroll heropattern-hideout-blue-100 bg-gray-100 h-screen">
        {badgeDetail && (
          <div className="flex flex-col justify-center w-1/2 ml-auto mr-auto mt-8 bg-white p-8 rounded-3xl">
            <p className="text-center text-3xl mb-4 font-semibold">
              {" "}
              {badgeDetail.title}{" "}
            </p>
            <img src={badgeDetail.image} className="w-72 m-auto"></img>
            <p className="text-center mt-4"> {badgeDetail.description} </p>
            <p className="text-center mt-4 font-bold">
              Your Best Attempt is: {maxAccuracy}
            </p>
          </div>
        )}

        <div className="flex flex-col justify-center w-1/2 ml-auto mr-auto mt-8 bg-white p-8 rounded-3xl">
          <p className="text-center text-3xl mb-4 font-semibold">
            {" "}
            Quiz Attempts{" "}
          </p>
          <table className="border-b-2 text-center">
            <tr className="border-b-2">
              <th>Attempt</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
            {userQuizzes &&
              userQuizzes.map(
                (it) =>
                  it && (
                    <tr>
                      <td>{userQuizzes.indexOf(it)}</td>
                      <td>{it.accuracy}</td>
                      <td>{it.createdAt}</td>
                    </tr>
                  )
              )}
          </table>
        </div>
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
