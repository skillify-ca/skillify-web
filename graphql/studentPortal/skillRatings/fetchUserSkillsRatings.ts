import { supabase } from "../../../lib/supabase";

export async function fetchUserSkillsRatings(userId: string) {
  const { data, error } = await supabase
    .from("intro_course_skills_user")
    .select(`
      id,
      studentRating,
      intro_course_skills (
        name,
        id,
        unitId,
        intro_course_unit (
          title
        )
      )
    `)
    .eq("userId", userId);

  if (error) {
    throw error;
  }

  return data;
}

export type FetchUserSkillsRatings = {
  intro_course_skills_user: Array<UserSkillsRatings>;
};

export type UserSkillsRatings = {
  id: string;
  studentRating: number;
  intro_course_skill: SkillDescription;
};

export type SkillDescription = {
  name: string;
  id: string;
  unitId: boolean;
  intro_course_unit: CourseUnitDescription;
};

export type CourseUnitDescription = {
  title: string;
};
