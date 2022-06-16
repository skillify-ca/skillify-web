import {
  ApolloClient,
  InMemoryCache,
  useMutation,
  useQuery,
} from "@apollo/client";
import Head from "next/head";
import Navbar from "../../../components/ui/Navbar";
import ExplorePreview from "../../../components/math/practiceTracker/unitOverview/ExplorePreview";
import PracticePreview from "../../../components/math/practiceTracker/unitOverview/PracticePreview";
import QuizPreview from "../../../components/math/practiceTracker/unitOverview/QuizPreview";
import { FETCH_UNIT_OVERVIEW } from "../../../graphql/fetchUnitOverview";
import { useAuth } from "../../../lib/authContext";
import { getBadgeId } from "../../api/badgeHelper";
import { EMOJI_MASTERY, SkillData } from "../../api/skill";
import { useRouter } from "next/router";
import { FETCH_SKILLS_FOR_UNIT } from "../../../graphql/fetchSkillsForUnit";
import { FETCH_SKILLS } from "../../../graphql/fetchSkills";
import { FETCH_SKILLS_FOR_COURSE } from "../../../graphql/fetchSkillsForCourse";

const UnitOverviewPage = ({ courseId, skillData }) => {
  const { user } = useAuth();

  type SkillDataResponse = {
    skills: SkillData[];
  };

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
        badgeId: getBadgeId(courseId as string, "", 1),
      },
    }
  );

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
      courseId: params.slug,
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { skillData: data, courseId: params.slug } };
}

export default UnitOverviewPage;
