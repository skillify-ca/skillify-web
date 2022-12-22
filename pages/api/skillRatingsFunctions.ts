import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";
import { useAuth } from "../../lib/authContext";
import { SkillRatingsRow } from "../../redux/skillRatingsSlice";

const { user } = useAuth();

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

  export const transformSkillRatingForDB = (skillRatings: SkillRatingsRow[]) => {
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