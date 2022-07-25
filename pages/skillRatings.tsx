import { useQuery } from "@apollo/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SkillSection from "../components/skillRatings/SkillSection";
import { Button } from "../components/ui/Button";
import {
  FetchUserSkillsRatings,
  FETCH_USER_SKILLS_RATINGS,
  UserSkillsRatings,
} from "../graphql/fetchUserSkillsRatings";

import { useAuth } from "../lib/authContext";
import {
  setSkillRatings,
  skillRatingsSelector,
  SkillRatingsRow,
} from "../redux/skillRatingsSlice";

export default function SkillRatings(props) {
  const dispatch = useDispatch();
  const { skillRatings } = useSelector(skillRatingsSelector);
  const { user } = useAuth();

  const {} = useQuery<FetchUserSkillsRatings>(FETCH_USER_SKILLS_RATINGS, {
    variables: {
      userId: user.uid,
    },
    onCompleted: (data) => {
      console.log(
        "the payload from DB",
        transformSkillRating(data.intro_course_skills_user)
      );
      dispatch(
        setSkillRatings(transformSkillRating(data.intro_course_skills_user))
      );
    },
  });

  const transformSkillRating = (skillRatings: UserSkillsRatings[]) => {
    // map to redux type
    const mappedSkillRatings: SkillRatingsRow[] = skillRatings.map((row) => {
      return {
        skillId: row.id,
        skillName: row.intro_course_skill["name"],
        unitName: row.intro_course_skill["intro_course_unit"]["title"],
        studentRating: parseInt(row.studentRating),
      };
    });

    return mappedSkillRatings;
  };

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div>
        <Button label="Save" />
      </div>
      <p className="text-xl font-bold">Skills</p>
      {skillRatings && <SkillSection skillSection={skillRatings} />}
    </div>
  );
}
