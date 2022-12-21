import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { createHook } from "async_hooks";
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
  updateSkillRatings,
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

  const {} = useQuery<FetchUserSkillsRatings>(FETCH_USER_SKILLS_RATINGS, {
    variables: {
      userId: user.uid,
    },
    onCompleted: (data) => {
      if (data.intro_course_skills_user !== null) {
        dispatch(
          setSkillRatings(transformSkillRating(data.intro_course_skills_user))
        );
      } else {
        fetchAllUserAssignments();
      }
    },
  });

  const [fetchAllUserAssignments] = useLazyQuery<FetchAllSkills>(
    FETCH_ALL_SKILLS,
    {
      onCompleted: (data) => {
        const skillIds = data.intro_course_skills.map((it) => it.id);

        setSkillIds(skillIds);
      },
    }
  );
  const [skillIds, setSkillIds] = useState<string[]>([]);
  console.log("secondId", skillIds);

  //   do these steps first to make sure we can initialize a new userss stkill ratings
  //   1. store data from FetchAllSkills query into a local state
  //   2. define the mutation function for UPSERT_USER_SKILL_RATINGS using the useMutation hook
  //   3. transform the list of skill ids using the initalizeSkillRating function, and pass that into the mutation function

  // 1. for FETCH_ALL_SKILLS, use the useLazyQuery hook to define a query function that you can call anywhere in your app
  // 2. in the onComplete of the FETCH_USER_SKILLS_RATINGS, if there are no skill ratings, then call the query function to initialize a new user's skill ratings
  // 3.

  const [saveSkillRatings] = useMutation(UPSERT_USER_SKILL_RATINGS, {
    refetchQueries: [{ query: FETCH_USER_SKILLS_RATINGS }],
    onCompleted: () => {
      alert("Your skill ratings have been saved successfully.");
    },
  });

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
                objects: initializeSkillRating(skillIds, user.uid),
              },
            })
          }
        />
      </div>
    </div>
  );
}
