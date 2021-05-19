import React, { useRef, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import SkillCard from "./SkillCard";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import { signIn, useSession } from "next-auth/client";
import { INIT_USER_SKILLS } from "../graphql/initUserSkills";
import { userId } from "../graphql/utils/constants";
import Card from "./stories/Card";
import { Button } from "./stories/Button";
export default function Outline() {
  const skillsEndRef = useRef(null);
  const [session, loading] = useSession();
  const [skills, setSkills] = React.useState([]);
  const [unlockedSkills, setUnlockedSkills] = React.useState([]);

  const userSkillsData = useQuery(FETCH_USER_SKILLS, {
    variables: {
      userId: userId(session),
    },
  });
  const [initUserSkills, { data, error }] = useMutation(INIT_USER_SKILLS, {
    refetchQueries: [
      {
        query: FETCH_USER_SKILLS,
        variables: {
          userId: userId(session),
        },
      },
    ], // whenever we update a skill, we should refetch
  });

  useEffect(() => {
    // Don't run if the session hasn't loaded yet
    if (userSkillsData.data && userId(session) != "-1") {
      setSkills(userSkillsData.data.user_skills);
      if (userSkillsData.data.user_skills.length > 0) {
        const filteredSkills = userSkillsData.data.user_skills.filter(
          (it) => it.locked == false
        );
        setUnlockedSkills(filteredSkills);
      } else {
        initUserSkills({
          variables: {
            userId: userId(session),
          },
        });
      }
    }
  }, [userSkillsData, session]);

  const getOverallProgress = () => {
    if (skills && skills.length > 0) {
      return Math.floor((100 * (unlockedSkills.length - 1)) / skills.length);
    }
    return 0;
  };

  const loggedInComponent = (
    <div className="max-w-screen-lg">
      <div className="flex justify-center mb-8 mt-4">
        <Card size="large">
          <div className="flex flex-col gap-8 items-center">
            <p className="text-xl font-bold font-sans">Math Knowledge Tree</p>
            <p className="text-sm">Practice different math-related skills</p>
            <p className="flex justify-center items-center bg-purple-100 shadow-inner ring-blue-400 text-center rounded-full ring-8 w-16 h-16">
              {getOverallProgress()}%
            </p>
          </div>
        </Card>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {userSkillsData.loading && <p>Loading ...</p>}
        {unlockedSkills.map((skill, index) => (
          <div
            key={skill.skill.title}
            className={
              index == unlockedSkills.length - 1 ? "animate-bounce" : ""
            }
          >
            <SkillCard
              key={skill.skill.title}
              title={skill.skill.title}
              image={skill.skill.image}
              link={`${skill.skill.title.toLowerCase()}`}
              rating={skill.stars}
            />
          </div>
        ))}
      </div>
      <div className="col-span-2 my-8">
        <p className="text-xl text-center font-bold">{"Locked"}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {skills
          .filter((it) => it.locked == true)
          .map((skill, index) => (
            <div key={skill.skill.title}>
              <SkillCard
                key={skill.skill.title}
                title={skill.skill.title}
                disabled={true}
              />
            </div>
          ))}
      </div>
    </div>
  );

  const loggedOutComponent = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-4 gap-8">
        <div className="flex flex-col w-full sm:w-1/2 gap-8">
          <p className="text-5xl">Make math fun to practice</p>
          <p className="text-xl">
            Learning with Math Champ is engaging and fun. Earn points for
            correct answers, play with friends and level up. Our
            curriculum-based lessons are effective and efficient.
          </p>
          <div className="flex gap-8">
            <Button backgroundColor="blue" label="Log In" textColor="white" />
            <Button
              backgroundColor="yellow"
              label="Sign Up"
              textColor="white"
            />
          </div>
        </div>
        <img
          className="w-full sm:w-1/2 object-cover"
          alt="student-image"
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDEzNDF8MHwxfHNlYXJjaHwxMDZ8fG1hdGh8ZW58MHx8fA&ixlib=rb-1.2.1&q=85&w=528&dpr=2"
        />
      </div>
      <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8">
        <p className="text-5xl text-white">K-12 Math Activities and Quizzes</p>
        <p className="text-xl text-white">
          Help your students feel more confident with numbers with content
          aligned to the Canadian curriculum
        </p>
      </div>
      <div className="heropattern-dominos-blue-400 bg-blue-500 rounded-xl shadow-lg flex md:flex-row flex-col text-center gap-8 p-8">
        <div
          className={`flex flex-col justify-center items-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg"`}
        >
          <p className="text-xl">Lesson Mode</p>
          <p>
            Explore and watch different videos to get introduced to a topic.
          </p>
        </div>
        <div
          className={`flex flex-col justify-center items-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg"`}
        >
          <p className="text-xl">Practice Mode</p>
          <p>
            Practice questions and reflect on their learning using flashcards.
          </p>
        </div>
        <div
          className={`flex flex-col justify-center items-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg"`}
        >
          <p className="text-xl">Quiz Mode</p>
          <p>
            Complete formative and summative assessments to prove their
            understanding.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8 justify-between w-full col-span-2 items-center mb-4 p-4 mx-auto">
      {session ? loggedInComponent : loggedOutComponent}
    </div>
  );
}
