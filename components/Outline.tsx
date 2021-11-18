import React, { useState } from "react";
import { UnitCard } from "./UnitCard";
import Card from "./ui/Card";
import ProgressRing from "./ui/ProgressRing";
import { lockedUnits, unlockedUnits } from "../pages/api/units";
import { EMOJI_MASTERY, Grade } from "../pages/api/skill";
import { FETCH_USER_PROFILE } from "../graphql/fetchUserProfile";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { Puzzle, PUZZLE_DATA } from "../pages/api/puzzle";
import { Button } from "./ui/Button";
import {
  StudentProfileState,
  setStudentProfile,
  studentProfileSelector,
} from "../redux/studentProfileSlice";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { useAuth } from "../lib/authContext";

type InteractiveLessonProps = {
  title: string;
  link: string;
};

const interactiveLessosn = [
  { title: "Financial Literacy", link: "finance" },
  { title: "Kaboom", link: "kaboom" },
  { title: "Escape from Giza", link: "teachers/djacobs/giza" },
  { title: "Surface Area Quiz", link: "teachers/djacobs/surfaceArea" },
  { title: "Food Truck Frenzy", link: "lessons/foodtruck" },
  { title: "Balance the Budget", link: "lessons/budget" },
  { title: "Building a Bakery", link: "lessons/bakery" },
];
const InteractiveLesson = ({ title, link }: InteractiveLessonProps) => {
  return (
    <Link href={`/${link}`}>
      <div className="transition duration-500 ease-in-out transform cursor-pointer hover:scale-110">
        <Card size="medium">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex w-16 h-16 p-1 bg-purple-100 rounded-full ring-2 ring-blue-300 heropattern-jupiter-yellow-500"></div>
            <p className="mx-4 text-xl text-center">{title}</p>
          </div>
        </Card>
      </div>
    </Link>
  );
};
export default function Outline() {
  const { user } = useAuth();

  let { loading, data } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: user.uid,
    },
  });

  const dispatch = useAppDispatch();

  const onGradeChange = (newGrade) => {
    const updatedState: StudentProfileState = {
      grade: newGrade,
    };
    dispatch(setStudentProfile(updatedState));
  };
  const studentGrade = useSelector(studentProfileSelector);

  const progress = () => {
    if (
      !loading &&
      data &&
      data.user_badges &&
      data.user_skills &&
      data.user_badges.length > 0 &&
      data.user_skills.length > 0
    ) {
      const unlockedBadges = data.user_badges.filter(
        (it) => it.locked == false
      );
      const masteredSkills = data.user_skills.filter(
        (it) => it.emoji > EMOJI_MASTERY
      );

      return Math.round(
        ((unlockedBadges.length + masteredSkills.length) * 100) /
          (data.user_badges.length + data.user_skills.length)
      );
    } else {
      return 0;
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-screen-lg col-span-2 gap-8 p-4 mx-auto mb-4">
      <div className="grid grid-cols-1 gap-8 p-4 rounded-lg shadow-lg sm:grid-cols-2 bg-blue-50">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">Practice Tracker</p>

          <p className="">
            {" "}
            Practice skills to increase your math confidence and ace the quizzes
            to unlock badges!{" "}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:items-end sm:pr-8">
          <p className="text-lg font-bold"> Overall Progress</p>
          <div className="p-4">
            <ProgressRing percentage={progress()} radius={24} />
          </div>
        </div>
        <div className="flex flex-row">
          <p className="flex items-center text-xl text-blue-900">
            {" "}
            Set your grade:
          </p>
          <select
            value={studentGrade.grade}
            defaultValue={studentGrade.grade}
            onChange={(e) => onGradeChange(e.target.value)}
            className="flex items-center w-56 py-2 ml-4 text-sm text-blue-900 bg-transparent border border-black border-solid outline-none focus:outline-none rounded-xl"
          >
            <option>Grade 1</option>
            <option>Grade 2</option>
            <option>Grade 3</option>
            <option>Grade 4</option>
            <option>Grade 5</option>
            <option>Grade 6</option>
          </select>
        </div>
      </div>

      <div className="grid items-center justify-center grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {unlockedUnits.map((unit, index) => (
          <div key={unit.title}>
            <UnitCard
              key={unit.title}
              title={unit.title}
              image={unit.image}
              link={`${unit.title.toLowerCase()}`}
              rating={0}
            />
          </div>
        ))}
        {lockedUnits.map((unit) => (
          <div key={unit}>
            <UnitCard key={unit} title={unit} disabled={true} />
          </div>
        ))}
      </div>

      <div className="w-full p-4 rounded-lg shadow-lg bg-blue-50">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">Interactive Lessons</p>

          <p className="">Complete these lessons to unlock extra badges.</p>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-2 gap-8 md:grid-cols-4">
        {interactiveLessosn.map((it) => (
          <InteractiveLesson title={it.title} link={it.link} />
        ))}
      </div>
      <div className="w-full p-4 rounded-lg shadow-lg bg-blue-50">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">Multiplayer Games</p>

          <p className="">Play math games online with your friends</p>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-2 gap-8 md:grid-cols-4">
        <Link href={`/games`}>
          <div className="transition duration-500 ease-in-out transform cursor-pointer hover:scale-110">
            <Card size="medium">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex w-16 h-16 p-1 bg-purple-100 rounded-full ring-2 ring-blue-300">
                  <img src="/images/PVPIconBackground.png" alt="" />
                </div>
                <p className="mx-4 text-xl text-center">Math Battle</p>
              </div>
            </Card>
          </div>
        </Link>

        <Card size="medium">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex w-16 h-16 p-1 bg-purple-100 rounded-full ring-2 ring-blue-300">
              <img src="/images/skills/lock.png" alt="" />
            </div>
            <p className="mx-4 text-xl text-center">Zombies</p>
          </div>
        </Card>
        <Card size="medium">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex w-16 h-16 p-1 bg-purple-100 rounded-full ring-2 ring-blue-300">
              <img src="/images/skills/lock.png" alt="" />
            </div>
            <p className="mx-4 text-xl text-center">Tic Tac Toe</p>
          </div>
        </Card>
        <Card size="medium">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex w-16 h-16 p-1 bg-purple-100 rounded-full ring-2 ring-blue-300">
              <img src="/images/skills/lock.png" alt="" />
            </div>
            <p className="mx-4 text-xl text-center">Connect 4</p>
          </div>
        </Card>
      </div>
      <div className="w-full p-4 rounded-lg shadow-lg bg-blue-50">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">Puzzles</p>

          <p className="">Master your multiplication facts with our puzzles</p>
        </div>
      </div>
      <div className="grid grid-cols-1 p-8 bg-white shadow-lg sm:grid-cols-2 rounded-xl">
        <div className="flex flex-col justify-center gap-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {Object.values(PUZZLE_DATA).map((p) => {
              const puzzle = p as Puzzle;
              return (
                <Link href={`/puzzle/${puzzle.id}`}>
                  <Button
                    label={puzzle.title}
                    backgroundColor="blue"
                    textColor="white"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <img
          className="object-cover rounded-xl"
          alt="student-image"
          src="/images/practiceAdd.png"
        />
      </div>
    </div>
  );
}
