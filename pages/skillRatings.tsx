import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SkillSection from "../components/skillRatings/SkillSection";
import { Button } from "../components/ui/Button";
import {
  FetchUserSkillsRatings,
  FETCH_USER_SKILLS_RATINGS,
  UserSkillsRatings,
} from "../graphql/fetchUserSkillsRatings";
import { UPSERT_USER_SKILL_RATINGS } from "../graphql/upsertUserSkillRatings";

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
        "data before being transformed and dispatched",
        data.intro_course_skills_user
      );
      dispatch(
        setSkillRatings(transformSkillRating(data.intro_course_skills_user))
      );
    },
  });

  const [saveSkillRatings] = useMutation(UPSERT_USER_SKILL_RATINGS, {
    refetchQueries: [{ query: FETCH_USER_SKILLS_RATINGS }],
  });

  const transformSkillRating = (skillRatings: UserSkillsRatings[]) => {
    // map to redux type
    const mappedSkillRatings: SkillRatingsRow[] = skillRatings.map((row) => {
      return {
        userSkillId: row.id,
        skillId: row.intro_course_skill["id"],
        skillName: row.intro_course_skill["name"],
        unitName: row.intro_course_skill["intro_course_unit"]["title"],
        studentRating: parseInt(row.studentRating),
      };
    });

    return mappedSkillRatings;
  };

  const transformSkillRatingForDB = (skillRatings: SkillRatingsRow[]) => {
    // map from redux type to write back to DB
    const transformedOutput = skillRatings.map((row) => {
      return {
        userId: user.uid,
        id: row.userSkillId,
        skillId: row.skillId,
        studentRating: row.studentRating,
      };
    });

    return transformedOutput;
  };

  return (
    <div className="flex flex-row overflow-auto-bg-scroll">
      <div className="flex flex-col p-4 m-4">
        {skillRatings && <SkillSection skillSection={skillRatings} />}
      </div>
      <div className="p-4 mr-8 mt-8">
        <Button
          label="Save"
          onClick={() =>
            saveSkillRatings({
              variables: {
                objects: transformSkillRatingForDB(skillRatings),
              },
            })
          }
        />
      </div>
    </div>
  );
}
