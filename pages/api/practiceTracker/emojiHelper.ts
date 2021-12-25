export const getUserEmojiValue = (data, skillId: number) => {
    const userSkillResults = data.user_skills.filter(
      (it) => it.skill_id == skillId
    );
    if (userSkillResults.length > 0) {
      return userSkillResults[0].emoji;
    } else {
      return undefined;
    }
  };