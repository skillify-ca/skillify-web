import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchUserSkillsRatings,
  FETCH_USER_SKILLS_RATINGS,
  UserSkillsRatings,
} from "../../graphql/fetchUserSkillsRatings";
import { UPSERT_USER_SKILL_RATINGS } from "../../graphql/upsertUserSkillRatings";
import { useAuth } from "../../lib/authContext";
import {
  skillRatingsSelector,
  setSkillRatings,
  SkillRatingsRow,
} from "../../redux/skillRatingsSlice";
import SkillSection from "../skillRatings/SkillSection";
import { Button } from "../ui/Button";
import { FetchAllSkills, FETCH_ALL_SKILLS } from "./FetchAllSkills";

const initializeSkillRating = (skillIds: string[], userId: string) => {
  const newSkillRatings = skillIds.map((skillId) => {
    return {
      skillId: skillId,
      userId: userId,
      studentRating: 0,
    };
  });

  return newSkillRatings;
};

export default function SkillRatingsComponent(props) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { skillRatings } = useSelector(skillRatingsSelector);

  const {} = useQuery<FetchAllSkills>(FETCH_ALL_SKILLS, {
    onCompleted: (data) => {
      const allSkills = data.intro_course_skills.map((it) => it.id);

      setSkillIds(allSkills);
    },
  });
  const [allSkills, setSkillIds] = useState<string[]>([]);
  const [currentlyRatedSkills, setCurrentSkills] = useState<string[]>([]);

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
      if (
        data.intro_course_skills_user.length !== null &&
        data.intro_course_skills_user.length === allSkills.length
      ) {
        dispatch(
          setSkillRatings(transformSkillRating(data.intro_course_skills_user))
        );
      } else if (data.intro_course_skills_user.length <= allSkills.length) {
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

  const transformSkillRating = (skillRatings: UserSkillsRatings[]) => {
    // map to redux type
    const mappedSkillRating: SkillRatingsRow[] = skillRatings.map((row) => {
      return {
        userSkillId: row.id,
        skillId: row.intro_course_skill["id"],
        skillName: row.intro_course_skill["name"],
        unitName: row.intro_course_skill["intro_course_unit"]["title"],
        studentRating: parseInt(row.studentRating),
      };
    });

    return mappedSkillRating;
  };

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
