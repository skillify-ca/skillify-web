import { useEffect, useState } from "react";
import {
    fetchSkillsAndRatings,
    FetchSkillsAndRatings,
} from "../../graphql/studentPortal/skillRatings/fetchSkillsAndRatings";

export function useSkillsAndRatings(userId: string) {
  const [data, setData] = useState<FetchSkillsAndRatings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        const rawData = await fetchSkillsAndRatings(userId);

        console.log("rawData", rawData)

        // Transform Supabase response to match expected structure
        const transformedData: FetchSkillsAndRatings = {
          intro_course_skills: (rawData || []).map((skill: any) => {
            // Get nested relationships
            const users = Array.isArray(skill.intro_course_skills_user)
              ? skill.intro_course_skills_user
              : skill.intro_course_skills_user
              ? [skill.intro_course_skills_user]
              : [];

            const unit = Array.isArray(skill.intro_course_unit)
              ? skill.intro_course_unit[0]
              : skill.intro_course_unit;

            // Filter users by userId
            const filteredUsers = users.filter(
              (user: any) => user.userId === userId
            );

            // Extract just the id for intro_course_skills_users
            const userSkillIds = filteredUsers.map((user: any) => ({
              id: user.id,
            }));

            // Extract studentRating for aggregate nodes
            const studentRatings = filteredUsers.map((user: any) => ({
              studentRating: user.studentRating?.toString() || "",
            }));

            if (!unit) return null;

            return {
              id: skill.id,
              name: skill.name,
              intro_course_skills_users: userSkillIds,
              intro_course_unit: { title: unit.title },
              intro_course_skills_users_aggregate: {
                nodes: studentRatings,
              },
            };
          }).filter((skill): skill is NonNullable<typeof skill> => skill !== null),
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

