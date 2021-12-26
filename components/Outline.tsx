import React, { useState } from "react";
import Card from "./ui/Card";
import ProgressRing from "./ui/ProgressRing";
import { lockedUnits, unlockedUnits } from "../pages/api/units";
import { EMOJI_MASTERY, Grade, grades } from "../pages/api/skill";
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
import Hero from "./practiceTracker/Hero";
import PracticeTracker from "./practiceTracker/PracticeTracker";

export default function Outline() {
  const { user } = useAuth();

  let { loading, data } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: user.uid,
    },
  });

  const dispatch = useAppDispatch();

  const onGradeChange = (newGrade: string) => {
    dispatch(setStudentProfile(newGrade));
  };
  const studentGrade = useSelector(studentProfileSelector);

  const progress = () => {
    if (
      !loading &&
      data &&
      data.user_badges &&
      data.user_badges.length > 0
    ) {
      const unlockedBadges = data.user_badges.filter(
        (it) => it.locked == false
      );
      return Math.round(
        (unlockedBadges.length * 100) /
        (data.user_badges.length)
      );
    } else {
      return 0;
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-screen-lg col-span-2 space-y-8 p-4 mx-auto mb-4">
      <PracticeTracker unlockedUnits={unlockedUnits()} lockedUnits={lockedUnits()} level={studentGrade.grade.title} onLevelChange={grade => onGradeChange(grade)} levels={grades.map(it => it.title)} description={"Start at grade 1 and unlock as many badges as you can. Master you math confidence by getting to 100%"} progress={progress()} />
    </div>
  );
}
