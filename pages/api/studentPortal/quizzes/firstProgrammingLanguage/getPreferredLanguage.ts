// I chose this TypeScript type alias to easily support the introduction of new languages
export type LanguageQuizScore = {
  [key: string]: number;
}

// This function outputs the preferred programming language based on a score object
export const getPreferredLanguageForQuizResults = (
  languageQuizScore:LanguageQuizScore
  ) => {
  const maxLanguageQuizScore = Math.max(...Object.values(languageQuizScore));
  const preferredLanguagesArray = Object.keys(languageQuizScore).filter((language) => languageQuizScore[language] === maxLanguageQuizScore);
  /**
If there is a tie between programming languages, the below ternary statement is designed to return the most preferred language based on the Skillify curriculum.
JavaScript is preferred over HTML/CSS and Python. & HTML/CSS is preferred over Python.
**/
  return maxLanguageQuizScore == 0 // if no quiz question options are selected return sample output of "JavaScript"! 
  ? "JavaScript"
  : preferredLanguagesArray.length > 1 && preferredLanguagesArray.includes("JavaScript")
  ? "JavaScript"
  : preferredLanguagesArray.length > 1 && preferredLanguagesArray.includes("HTML/CSS")
  ? "HTML/CSS"
  : preferredLanguagesArray[0];
}
