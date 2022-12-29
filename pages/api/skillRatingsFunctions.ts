import { SkillsAndRatings } from "../../graphql/fetchSkillsAndRatings";
import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";
import { SkillRatingsRow } from "../../redux/skillRatingsSlice";



export const initializeSkillRating = (skillIds: string[], userId: string) => {
    const newSkillRatings = skillIds.map((skillId) => {
      return {
        skillId: skillId,
        userId: userId,
        studentRating: 0,
      };
    });
  
    return newSkillRatings;
  };

  export const transformSkillRating = (skillRatings: UserSkillsRatings[]) => {
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

  export const transformSkillsAndRatings = (skillRatings: SkillsAndRatings[]) => {
    // map to redux type
    const mappedSkillRating: SkillRatingsRow[] = skillRatings.map((row) => {
        const studentRating = row.intro_course_skills_users_aggregate["nodes"]["studentRating"] ?? 0;
        return {
            userSkillId: row.intro_course_skills_users["id"],
            skillId: row.id,
            skillName: row.name,
            unitName: row.intro_course_unit.title,
            studentRating: studentRating,
        };
    });
    console.log(mappedSkillRating)  
    return mappedSkillRating;

  };
 
  
  
