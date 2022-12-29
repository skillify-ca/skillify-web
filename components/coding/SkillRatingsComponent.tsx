import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSkillsAndRatings,
  FETCH_SKILLS_AND_RATINGS,
} from "../../graphql/fetchSkillsAndRatings";
import { FETCH_USER_SKILLS_RATINGS } from "../../graphql/fetchUserSkillsRatings";
import { UPSERT_USER_SKILL_RATINGS } from "../../graphql/upsertUserSkillRatings";
import { useAuth } from "../../lib/authContext";
import { transformSkillsAndRatings } from "../../pages/api/skillRatingsFunctions";
import {
  skillRatingsSelector,
  setSkillRatings,
  SkillRatingsRow,
} from "../../redux/skillRatingsSlice";
import SkillSection from "../skillRatings/SkillSection";
import { Button } from "../ui/Button";

export default function SkillRatingsComponent(props) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { skillRatings } = useSelector(skillRatingsSelector);

  const {} = useQuery<FetchSkillsAndRatings>(FETCH_SKILLS_AND_RATINGS, {
    variables: {
      userId: user.uid,
    },
    onCompleted: (data) => {
      dispatch(
        setSkillRatings(transformSkillsAndRatings(data.intro_course_skills))
      );
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
