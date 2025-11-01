import { supabase } from "../../../lib/supabase";

export async function fetchSkillsAndRatings(userId: string) {
  const { data, error } = await supabase
    .from("intro_course_skills")
    .select(`
      id,
      name,
      intro_course_skills_user (
        id,
        studentRating,
        userId
      ),
      intro_course_unit (
        title
      )
    `);

  if (error) {
    throw error;
  }

  return data;
}



export type FetchSkillsAndRatings = {
  intro_course_skills: SkillsAndRatings[]
};

export type SkillsAndRatings = {
  id: string;
  name: string;
  intro_course_skills_users: UserSkillIds[];
  intro_course_unit: SkillDescription;
  intro_course_skills_users_aggregate: NodeSkillRatings;
};

export type UserSkillIds = {
    id: string;
  };

export type SkillDescription = {
  title: string;
};

export type NodeSkillRatings = {
  nodes: StudentRatings[];
};
export type StudentRatings = {
    studentRating: string;
  };
