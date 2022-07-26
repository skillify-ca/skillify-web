import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SkillSection from "../components/skillRatings/SkillSection";
import { Button } from "../components/ui/Button";
import {
  FetchUserSkillsDBResponse,
  FETCH_USER_SKILLS_RATINGS,
  UserSkills,
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

  let tempSkillId = 1;

  const { data, refetch } = useQuery<FetchUserSkillsDBResponse>(
    FETCH_USER_SKILLS_RATINGS,
    {
      variables: {
        userId: user.uid,
      },
      onCompleted: (data) => {
        dispatch(
          setSkillRatings(transformSkillRating(data.intro_course_skills))
        );
      },
    }
  );

  const [saveSkillRatings] = useMutation(UPSERT_USER_SKILL_RATINGS, {
    onCompleted: () => {
      alert("Your skill ratings have been saved successfully.");
    },
    onError: () => {
      // solve for edge case where user tries to rank skills twice on initial load
      refetch();
      alert("Please try again");
    },
  });

  const transformSkillRating = (skillRatings: UserSkills[]) => {
    // map to redux type

    const mappedSkillRatings: SkillRatingsRow[] = skillRatings.map((skill) => {
      const userSkillRef = skill.intro_course_skills_users;
      let userSkillId = "";
      let studentRating = 0;

      if (userSkillRef.length == 1) {
        userSkillId = userSkillRef[0].id;
        studentRating = parseInt(userSkillRef[0].studentRating);
      } else {
        userSkillId = String(tempSkillId);
        studentRating = 0;
        // increment temp skill id for other new skills
        tempSkillId += 1;
      }

      return {
        userSkillId: userSkillId,
        skillId: skill.id,
        skillName: skill.name,
        unitName: skill.intro_course_unit.title,
        studentRating: studentRating,
      };
    });

    return mappedSkillRatings;
  };

  const transformSkillRatingForDB = (skillRatings: SkillRatingsRow[]) => {
    // map from redux type to write back to DB
    const transformedOutput = skillRatings.map((skill) => {
      return {
        userId: user.uid,
        id: Number(skill.userSkillId) ? undefined : skill.userSkillId,
        skillId: skill.skillId,
        studentRating: skill.studentRating,
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
