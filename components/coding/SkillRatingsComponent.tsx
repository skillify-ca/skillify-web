import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchUserSkillsRatings,
  FETCH_USER_SKILLS_RATINGS,
} from "../../graphql/fetchUserSkillsRatings";
import { UPSERT_USER_SKILL_RATINGS } from "../../graphql/upsertUserSkillRatings";
import { useAuth } from "../../lib/authContext";
import {
  transformSkillRating,
  initializeSkillRating,
} from "../../pages/api/skillRatingsFunctions";
import {
  skillRatingsSelector,
  setSkillRatings,
  SkillRatingsRow,
} from "../../redux/skillRatingsSlice";
import SkillSection from "../skillRatings/SkillSection";
import { Button } from "../ui/Button";
import { FetchAllSkills, FETCH_ALL_SKILLS } from "./FetchAllSkills";

export default function SkillRatingsComponent(props) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { skillRatings } = useSelector(skillRatingsSelector);
  const [allSkills, setSkillIds] = useState<string[]>([]);
  const [currentlyRatedSkills, setCurrentlyRatedSkills] = useState<string[]>(
    []
  );

  // 1. define new types for FetchSkillsAndRatings
  // 2. write transformer function that takes response and transforms it into SkillRatingsRow[] type, sets studentRating to 0 if it doesn't exist in the nodes key
  // 3. dispatch

  const newTransformFunction = (): SkillRatingsRow[] => {};

  const {} = useQuery<FetchSkillsAndRatings>(FETCH_SKILLS_AND_RATINGS, {
    onCompleted: (data) => {
      dispatch(setSkillRatings(newTransformFunction(data)));
    },
  });

  const {} = useQuery<FetchAllSkills>(FETCH_ALL_SKILLS, {
    onCompleted: (data) => {
      const allSkills = data.intro_course_skills.map((it) => it.id);

      setSkillIds(allSkills);
    },
  });

  const {} = useQuery<FetchUserSkillsRatings>(FETCH_USER_SKILLS_RATINGS, {
    variables: {
      userId: user.uid,
    },
    onCompleted: (data) => {
      const missingSkills = data.intro_course_skills_user.map(
        (it) => it.intro_course_skill.id
      );
      const currentlyRatedSkills = allSkills.filter(
        (it) => !missingSkills.includes(it)
      );
      setCurrentlyRatedSkills(currentlyRatedSkills);

      if (
        data.intro_course_skills_user.length > 0 &&
        data.intro_course_skills_user.length === allSkills.length
      ) {
        dispatch(
          setSkillRatings(transformSkillRating(data.intro_course_skills_user))
        );
      } else if (
        data.intro_course_skills_user.length <= allSkills.length &&
        data.intro_course_skills_user.length > 0
      ) {
        saveSkillRatingsToInitialize({
          variables: {
            objects: initializeSkillRating(currentlyRatedSkills, user.uid),
          },
        });
        dispatch(
          setSkillRatings(transformSkillRating(data.intro_course_skills_user))
        );
      } else {
        saveSkillRatingsToInitialize({
          variables: {
            objects: initializeSkillRating(allSkills, user.uid),
          },
        });
        dispatch(
          setSkillRatings(transformSkillRating(data.intro_course_skills_user))
        );
      }
    },
  });

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

  const [saveSkillRatings] = useMutation(UPSERT_USER_SKILL_RATINGS, {
    refetchQueries: [{ query: FETCH_USER_SKILLS_RATINGS }],
    onCompleted: () => {
      alert("Your skill ratings have been saved successfully.");
    },
  });

  const [saveSkillRatingsToInitialize] = useMutation(
    UPSERT_USER_SKILL_RATINGS,
    {
      refetchQueries: [{ query: FETCH_USER_SKILLS_RATINGS }],
    }
  );

  const initializedSkillRating = initializeSkillRating(
    currentlyRatedSkills !== null ? currentlyRatedSkills : allSkills,
    user.uid
  );

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
