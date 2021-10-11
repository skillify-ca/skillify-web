import React from "react";
import { useQuery } from "@apollo/client";
import { Session } from "next-auth";
import Link from "next/link";
import { useSelector } from "react-redux";
import { UnitCard } from "./UnitCard";
import { userId } from "../graphql/utils/constants";
import Card from "./ui/Card";
import ProgressRing from "./ui/ProgressRing";
import { lockedUnits, unlockedUnits } from "../pages/api/units";
import { EMOJI_MASTERY } from "../pages/api/skill";
import { FETCH_USER_PROFILE } from "../graphql/fetchUserProfile";
import { Puzzle, PUZZLE_DATA } from "../pages/api/puzzle";
import { Button } from "./ui/Button";
import {
  StudentProfileState,
  setStudentProfile,
  studentProfileSelector,
} from "../redux/studentProfileSlice";
import { useAppDispatch } from "../redux/store";

interface OutlineProps {
  session: Session;
}

export default function Outline({ session }: OutlineProps) {
  const { loading, data } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: userId(session),
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
        (it) => it.locked === false
      );
      const masteredSkills = data.user_skills.filter(
        (it) => it.emoji > EMOJI_MASTERY
      );

      return Math.round(
        ((unlockedBadges.length + masteredSkills.length) * 100) /
          (data.user_badges.length + data.user_skills.length)
      );
    }
    return 0;
  };

  return (
    <div className="max-w-screen-lg flex flex-col gap-8 justify-between w-full col-span-2 items-center mb-4 p-4 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-blue-50 rounded-lg shadow-lg p-4">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl">Practice Tracker</p>

          <p className="">
            {" "}
            Practice skills to increase your math confidence and ace the quizzes
            to unlock badges!{" "}
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-4 sm:pr-8">
          <p className="font-bold text-lg"> Overall Progress</p>
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
            className="ml-4 w-56 text-sm text-blue-900 outline-none focus:outline-none border border-solid border-black rounded-xl bg-transparent flex items-center py-2"
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center gap-8 items-center">
        {unlockedUnits.map((unit) => (
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
            <UnitCard key={unit} title={unit} disabled />
          </div>
        ))}
      </div>

      {false && (
        <div className="w-full bg-blue-50 rounded-lg shadow-lg p-4">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-2xl">Interactive Lessons</p>

            <p className="">Complete these lessons to unlock extra badges.</p>
          </div>
        </div>
      )}
      {false && (
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-8 items-center">
          <Link href="/finance-profile">
            <div className="cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
              <Card size="medium">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 flex rounded-full p-1 ring-2 ring-blue-300 heropattern-formalinvitation-green-500" />
                  <p className="mx-4 text-center text-xl">Balance a Budget</p>
                </div>
              </Card>
            </div>
          </Link>
          <Link href="/foodtruck">
            <div className="cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
              <Card size="medium">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 flex rounded-full p-1 ring-2 ring-blue-300 heropattern-jupiter-yellow-500" />
                  <p className="mx-4 text-center text-xl">Food Truck</p>
                </div>
              </Card>
            </div>
          </Link>
        </div>
      )}
      <div className="w-full bg-blue-50 rounded-lg shadow-lg p-4">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl">Multiplayer Games</p>

          <p className="">Play math games online with your friends</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-8 items-center">
        <Link href="/games">
          <div className="cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
            <Card size="medium">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-16 h-16 bg-purple-100 flex rounded-full p-1 ring-2 ring-blue-300">
                  <img src="/images/PVPIconBackground.png" alt="" />
                </div>
                <p className="mx-4 text-center text-xl">Math Battle</p>
              </div>
            </Card>
          </div>
        </Link>

        <Card size="medium">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-16 h-16 bg-purple-100 flex rounded-full p-1 ring-2 ring-blue-300">
              <img src="/images/skills/lock.png" alt="" />
            </div>
            <p className="mx-4 text-center text-xl">Zombies</p>
          </div>
        </Card>
        <Card size="medium">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-16 h-16 bg-purple-100 flex rounded-full p-1 ring-2 ring-blue-300">
              <img src="/images/skills/lock.png" alt="" />
            </div>
            <p className="mx-4 text-center text-xl">Tic Tac Toe</p>
          </div>
        </Card>
        <Card size="medium">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-16 h-16 bg-purple-100 flex rounded-full p-1 ring-2 ring-blue-300">
              <img src="/images/skills/lock.png" alt="" />
            </div>
            <p className="mx-4 text-center text-xl">Connect 4</p>
          </div>
        </Card>
      </div>
      <div className="w-full bg-blue-50 rounded-lg shadow-lg p-4">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl">Puzzles</p>

          <p className="">Master your multiplication facts with our puzzles</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-white shadow-lg rounded-xl p-8">
        <div className="flex flex-col gap-8 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
          alt="Student"
          src="/images/practiceAdd.png"
        />
      </div>
    </div>
  );
}
