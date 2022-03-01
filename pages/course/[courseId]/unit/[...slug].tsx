import {
  ApolloClient,
  InMemoryCache,
  useMutation,
  useQuery,
} from "@apollo/client";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../../../components/ui/Navbar";
import ExplorePreview from "../../../../components/math/practiceTracker/unitOverview/ExplorePreview";
import PracticePreview from "../../../../components/math/practiceTracker/unitOverview/PracticePreview";
import QuizPreview from "../../../../components/math/practiceTracker/unitOverview/QuizPreview";
import { FETCH_UNIT_OVERVIEW } from "../../../../graphql/fetchUnitOverview";
import { useAuth } from "../../../../lib/authContext";
import { getBadgeId } from "../../../api/badgeHelper";
import { getUserEmojiValue } from "../../../api/practiceTracker/emojiHelper";
import { EMOJI_MASTERY, SkillData } from "../../../api/skill";
import { useRouter } from "next/router";
import { FETCH_SKILLS_FOR_UNIT } from "../../../../graphql/fetchSkillsForUnit";

const Box = dynamic(() => import("../../../../components/stories/Box"));

const UnitOverviewPage = ({ unitTitle, skillData, level }) => {
  const { user } = useAuth();
  const router = useRouter();
  const { courseId } = router.query;

  type SkillDataResponse = {
    skills: SkillData[];
  };

  const skillsForCurrentGrade = (skillData: SkillDataResponse) =>
    skillData.skills.filter(
      (skill) => skill.level == level && skill.courseId === courseId
    );

  type UserSkillData = {
    skill_id: number;
    emoji: number | null;
  };
  type FetchUnitOverviewResponse = {
    user_skills: UserSkillData[];
    user_quizzes: any[];
    user_badges: any[];
  };
  let { loading, error, data } = useQuery<FetchUnitOverviewResponse>(
    FETCH_UNIT_OVERVIEW,
    {
      variables: {
        userId: user?.uid,
        skillId:
          skillData &&
          skillData.skills
            .filter(
              (skill) =>
                skill.unit == unitTitle &&
                skill.level == level &&
                skill.courseId === courseId
            )
            .map((skill) => skill.id),
        badgeId: getBadgeId(courseId as string, unitTitle, level),
      },
    }
  );

  const isQuizLocked = () => {
    if (!loading && data && data.user_skills.length !== 0) {
      const unmasteredSkills = skillsForCurrentGrade(skillData)
        .map((skill) => getUserEmojiValue(data, skill.id))
        .filter((emojiVal) => !emojiVal || emojiVal <= EMOJI_MASTERY);

      return unmasteredSkills.length > 0;
    }

    return false;
  };

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-blue-100 ">
      <Head>
        <title>
          {unitTitle && unitTitle.charAt(0).toUpperCase() + unitTitle.slice(1)}{" "}
          Overview
        </title>
      </Head>
      <Navbar />
      <div className="p-4 flex flex-col space-y-8">
        <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-4">
          <p className="text-2xl text-white">
            {unitTitle &&
              unitTitle.charAt(0).toUpperCase() + unitTitle.slice(1)}{" "}
            Overview
          </p>
        </div>
        <ExplorePreview
          unitTitle={unitTitle}
          level={level}
          courseId={courseId}
        />
        {skillData && (
          <PracticePreview
            loading={loading}
            userSkills={data}
            skills={skillsForCurrentGrade(skillData)}
          />
        )}
        <div>
          <QuizPreview
            isQuizLocked={isQuizLocked()}
            unitTitle={unitTitle}
            loading={loading}
            data={data}
            courseId={courseId}
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: FETCH_SKILLS_FOR_UNIT,
    variables: {
      unit: params.slug[0],
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  const level = params.slug.length > 1 ? Number.parseInt(params.slug[1]) : 1;
  //return multiple descriptions,
  return { props: { skillData: data, unitTitle: params.slug[0], level } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { courseId: "math2", slug: ["numbers", "1"] } },
      { params: { courseId: "math2", slug: ["addition", "1"] } },
      { params: { courseId: "math2", slug: ["subtraction", "1"] } },
      { params: { courseId: "math2", slug: ["multiplication", "1"] } },
      { params: { courseId: "math2", slug: ["division", "1"] } },
      { params: { courseId: "math2", slug: ["finance", "1"] } },
    ],
    fallback: true,
  };
}

export default UnitOverviewPage;
