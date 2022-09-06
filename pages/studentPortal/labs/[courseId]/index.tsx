import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import PracticePreview from "../../../../components/math/practiceTracker/unitOverview/PracticePreview";
import { FETCH_UNIT_OVERVIEW } from "../../../../graphql/fetchUnitOverview";
import { useAuth } from "../../../../lib/authContext";
import { FETCH_SKILLS_FOR_COURSE } from "../../../../graphql/fetchSkillsForCourse";
import Link from "next/link";
import { useState } from "react";

const UnitOverviewPage = ({ courseId, skillData }) => {
  enum Stage {
    SELECT_STRAND,
    SELECT_SKILL,
  }
  const strands = ["Operations", "Algebra"];
  const [stage, setStage] = useState<Stage>(Stage.SELECT_STRAND);
  const [selectedStrand, setSelectedStrand] = useState("");

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
    math1: [
      { title: "Multiplication Game", link: "multiplication/game" },
      {
        title: "Multiplication Connect Four",
        link: "multiplication-connect/Index",
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-blue-100 ">
      <div className="flex flex-row-reverse w-full h-16 space-x-4 bg-white">
        <div
          className="m-4 cursor-pointer text-charmander"
          onClick={() => {
            setStage(Stage.SELECT_STRAND);
            setSelectedStrand("");
          }}
        >
          Practice
        </div>
        <div className="m-4 text-murkrow">Games</div>
      </div>
      <div className="flex flex-col justify-center w-full p-4 space-y-8">
        <div className="flex justify-center">
          <div className="grid items-stretch max-w-4xl grid-cols-1 bg-white shadow-lg rounded-t-xl">
            <div className="flex flex-col justify-center max-w-4xl grid-cols-1 bg-white shadow-lg rounded-t-xl">
              <div className="p-4 space-y-8 sm:p-8">
                <div className="flex flex-col space-y-4">
                  <p className="text-4xl font-bold capitalize text-murkrow">
                    {" "}
                    PRACTICE TIME
                  </p>
                  <p className="text-murkrow">
                    Select a skill to practice questions. You can practice as
                    many times as you wish. At the end, you'll be asked to rate
                    your skill confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-8">
              {stage === Stage.SELECT_SKILL &&
              selectedStrand == "Operations" &&
              skillData ? (
                <PracticePreview
                  loading={loading}
                  userSkills={data}
                  skills={skillData.skills}
                  courseId={courseId}
                />
              ) : (
                <div
                  className="flex justify-center gap-4 cursor-pointer"
                  onClick={() => {
                    setStage(Stage.SELECT_SKILL);
                  }}
                >
                  {strands.map((strand) => (
                    <div onClick={() => setSelectedStrand(strand)}>
                      <Strand name={strand} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
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

type StrandProps = {
  name: string;
};

function Strand({ name }: StrandProps) {
  return (
    <div className="flex flex-col items-center justify-center w-64 p-8 rounded-lg shadow-lg bg-slate-100 border-murkrow text-murkrow">
      {name}
      <div className="w-16 h-16 mt-4 border-4 rounded-full bg-murkrow heropattern-jigsaw-slate-300 border-charmander" />
    </div>
  );
}

export default UnitOverviewPage;
