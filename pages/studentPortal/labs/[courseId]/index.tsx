import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import PracticePreview from "../../../../components/math/practiceTracker/unitOverview/PracticePreview";
import { FETCH_UNIT_OVERVIEW } from "../../../../graphql/fetchUnitOverview";
import { useAuth } from "../../../../lib/authContext";
import { FETCH_SKILLS_FOR_COURSE } from "../../../../graphql/fetchSkillsForCourse";
import Link from "next/link";

const UnitOverviewPage = ({ courseId, skillData }) => {
  const { user } = useAuth();

  type UserSkillData = {
    skill_id: number;
    emoji: number | null;
  };
  type FetchUnitOverviewResponse = {
    user_skills: UserSkillData[];
    user_quizzes: any[];
    user_badges: any[];
  };
  const skillIds = skillData.skills
    .filter((skill) => skill.courseId === courseId)
    .map((skill) => skill.id);

  let { loading, error, data } = useQuery<FetchUnitOverviewResponse>(
    FETCH_UNIT_OVERVIEW,
    {
      variables: {
        userId: user?.uid,
        skillId: skillIds,
      },
    }
  );

  const lessons = {
    finance: [{ title: "Credit Card Lesson", link: "finance/credit-card" }],
    math1: [{ title: "Multiplication Game", link: "finance/credit-card" }],
  };

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-blue-100 ">
      <div className="flex flex-col p-4 space-y-8">
        {skillData && (
          <PracticePreview
            loading={loading}
            userSkills={data}
            skills={skillData.skills}
            courseId={courseId}
          />
        )}
      </div>
      {lessons[courseId] !== undefined ? (
        <div className="p-4 m-4 bg-white text-murkrow">
          <h2 className="text-lg font-bold text-murkrow">Lessons</h2>
          {lessons[courseId].map((lesson) => (
            <Link href={lesson.link}>
              <div className="w-64 p-4 my-4 bg-gray-100 shadow-lg cursor-pointer rounded-xl">
                <p>{lesson.title}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_SKILLS_FOR_COURSE,
    variables: {
      courseId: params.courseId,
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { skillData: data, courseId: params.courseId } };
}

export default UnitOverviewPage;
