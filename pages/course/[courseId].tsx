import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import PracticeTracker from "../../components/practiceTracker/PracticeTracker";
import { FETCH_COURSE_UNITS } from "../../graphql/fetchCourseUnits";
import { FETCH_USER_PROFILE } from "../../graphql/fetchUserProfile";
import { useAuth } from "../../lib/authContext";
import { useAppDispatch } from "../../redux/store";
import {
  practiceTrackerSelector,
  setMathLevel,
} from "../../redux/studentProfileSlice";

export default function Home({ courseData }) {
  const studentGrade = useSelector(practiceTrackerSelector);
  const level = studentGrade.mathLevel;
  const router = useRouter();
  const { courseId } = router.query;

  const { user } = useAuth();

  let { loading, data } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: user.uid,
      courseId: courseId,
    },
  });

  const dispatch = useAppDispatch();

  const onGradeChange = (newGrade: number) => {
    dispatch(setMathLevel(newGrade));
  };

  const progress = () => {
    if (!loading && data && data.user_badges && data.user_badges.length > 0) {
      const unlockedBadges = data.user_badges.filter(
        (it) => it.locked == false
      );

      return Math.round(
        (unlockedBadges.length * 100) / data.user_badges.length
      );
    } else {
      return 0;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Math</title>
      </Head>
      <div
        style={{
          backgroundColor: "#E5E7EB",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2360a5fa' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          )`,
        }}
      >
        <div className="flex flex-col items-center justify-between w-full max-w-screen-lg col-span-2 space-y-8 p-4 mx-auto mb-4">
          {courseData && data && (
            <PracticeTracker
              courseId={courseId}
              badgeData={data.user_badges}
              units={courseData.units.filter((it) => it.level === level)}
              level={level}
              onLevelChange={(grade) => onGradeChange(grade)}
              levels={["Bronze", "Silver", "Gold"]}
              description={
                "Start at bronze and unlock as many badges as you can. Master you math confidence by getting to 100%"
              }
              progress={progress()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: FETCH_COURSE_UNITS,
    variables: {
      courseId: params.courseId,
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  //return multiple descriptions,
  return { props: { courseData: data, courseId: params.courseId } };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { courseId: "math1" } }],
    fallback: true,
  };
}

Home.auth = true;