import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import SkillSection, {
  RenderUserSkill,
} from "../components/coding/SkillSection";
import { Button } from "../components/ui/Button";
import {
  FetchUserSkillsRatings,
  FETCH_USER_SKILLS_RATINGS,
  UserSkillsRatings,
} from "../graphql/fetchUserSkillsRatings";

import { useAuth } from "../lib/authContext";

export default function SkillRatings(props) {
  const { user } = useAuth();

  const { data: userSkillRatings } = useQuery<FetchUserSkillsRatings>(
    FETCH_USER_SKILLS_RATINGS,
    {
      variables: {
        userId: user.uid,
      },
    }
  );

  const transformSkillRating = (skillRatings: UserSkillsRatings[]) => {
    const mappedSkillRatings: RenderUserSkill[] = skillRatings.map((row) => {
      return {
        sectionName: row.intro_course_skill["intro_course_unit"]["title"],
        skillName: row.intro_course_skill["name"],
        skillRating: parseInt(row.studentRating),
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
      {userSkillRatings && (
        <SkillSection
          skillSection={transformSkillRating(
            userSkillRatings.intro_course_skills_user
          )}
        />
      )}
    </div>
  );
}
