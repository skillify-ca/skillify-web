import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";
import { computeScore } from "./computeScore";

  test("Test computeScore function - return object with scores for each programming language", async () => {
    //set 
    //intialized a simplified quizViewState object
    const quizViewState:QuizViewState = {
        title:"",
        body: "",
        currentQuestion: 1,
        progress: 1,
        questions: [
          {
            title: "",
            body: "",
            options: [
              {
                name:"",
                isSelected: true,
                result: 'JavaScript',
                weight: 10,
              },
              {
                name:"",
                isSelected: false,
                result: 'HTML/CSS',
                weight: 5,
              },
              {
                name:"",
                isSelected: true,
                result: 'Python',
                weight: 5,
              },
            ],
          },
          {
            title: "",
            body: "",
            options: [
              {
                name:"",
                isSelected: false,
                result: 'JavaScript',
                weight: 5,
              },
              {
                name:"",
                isSelected: true,
                result: 'HTML/CSS',
                weight: 10,
              },
              {
                name:"",
                isSelected: true,
                result: 'Python',
                weight: 20,
              },
            ],
          },
        ],
      };

      const expectedScore = {
        JavaScript: 10,
        'HTML/CSS': 10,
        Python: 25,
      };
  
    // Act
    const actualScore = computeScore(quizViewState);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedScore);
  });
  