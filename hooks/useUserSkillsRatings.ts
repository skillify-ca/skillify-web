import { useEffect, useState } from "react";
import {
  fetchUserSkillsRatings,
  FetchUserSkillsRatings,
} from "../graphql/studentPortal/skillRatings/fetchUserSkillsRatings";

export function useUserSkillsRatings(userId: string) {
  const [data, setData] = useState<FetchUserSkillsRatings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        const rawData = await fetchUserSkillsRatings(userId);
        
        // Transform Supabase response to match expected structure
        // Supabase returns array directly, but we need it wrapped in intro_course_skills_user
        const transformedData: FetchUserSkillsRatings = {
          intro_course_skills_user: (rawData || [])
            .map((item: any) => {
              const skill = Array.isArray(item.intro_course_skills)
                ? item.intro_course_skills[0]
                : item.intro_course_skills;

              const unit = Array.isArray(skill?.intro_course_unit)
                ? skill.intro_course_unit[0]
                : skill?.intro_course_unit;

              if (!skill) return null;

              return {
                id: item.id,
                studentRating: item.studentRating,
                intro_course_skill: {
                  ...skill,
                  intro_course_unit: unit,
                },
              };
            })
            .filter((item): item is NonNullable<typeof item> => item !== null),
        };
        setData(transformedData);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return {
    data,
    loading,
    error,
  };
}

