import { getFillBlankQuestion, getRandomFillBlankQuestion } from "./additionPropertyQuestionGenerator";
import { Skill } from "./skill";

test("Fill in the Blanks test", async () => {

  
    // Act
    const question = getFillBlankQuestion(10, 11, 12, '+', Skill.ADDITION_PROPERTIES);
  
    // Assert
    expect(question.fillInTheBlank.options[0].text).toBe("10 + 11 + 12 = 11 + 10 + 12");
    expect(question)
  });

  //`${a} + ${b} + ${c} = ${b} + ${a} + ${c}`
