import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";
import { computeLanguageScore } from "./computeScore";

  test("Test computeScore function to tabulate scores for each programming language - all quiz options selected", async () => {
    //arrange
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
                isSelected: true,
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
                isSelected: true,
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
        JavaScript: 15,
        'HTML/CSS': 15,
        Python: 25,
      };
  
    // Act
    const actualScore = computeLanguageScore(quizViewState);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedScore);
  });

  test("Test computeScore function to tabulate scores for each programming language - no quiz options selected", async () => {
    //arrange
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
                isSelected: false,
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
                isSelected: false,
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
                isSelected: false,
                result: 'HTML/CSS',
                weight: 10,
              },
              {
                name:"",
                isSelected: false,
                result: 'Python',
                weight: 20,
              },
            ],
          },
        ],
      };

      const expectedScore = {
        JavaScript: 0,
        'HTML/CSS': 0,
        Python: 0,
      };
  
    // Act
    const actualScore = computeLanguageScore(quizViewState);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedScore);
  });

  test("Test computeScore function to tabulate scores for each programming language - quiz questions with no weights", async () => {
    //arrange
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
                weight: 0,
              },
              {
                name:"",
                isSelected: false,
                result: 'HTML/CSS',
                weight: 0,
              },
              {
                name:"",
                isSelected: true,
                result: 'Python',
                weight: 0,
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
                weight: 0,
              },
              {
                name:"",
                isSelected: true,
                result: 'HTML/CSS',
                weight: 0,
              },
              {
                name:"",
                isSelected: false,
                result: 'Python',
                weight: 0,
              },
            ],
          },
        ],
      };

      const expectedScore = {
        JavaScript: 0,
        'HTML/CSS': 0,
        Python: 0,
      };
  
    // Act
    const actualScore = computeLanguageScore(quizViewState);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedScore);
  });

  test("Test computeScore function to tabulate scores for each programming language - quiz questions with weights & without weights", async () => {
    //arrange
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
                isSelected: false,
                result: 'JavaScript',
                weight: 0,
              },
              {
                name:"",
                isSelected: true,
                result: 'HTML/CSS',
                weight: 5,
              },
              {
                name:"",
                isSelected: true,
                result: 'Python',
                weight: 0,
              },
            ],
          },
          {
            title: "",
            body: "",
            options: [
              {
                name:"",
                isSelected: true,
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
                isSelected: false,
                result: 'Python',
                weight: 20,
              },
            ],
          },
        ],
      };

      const expectedScore = {
        JavaScript: 5,
        'HTML/CSS': 15,
        Python: 0,
      };
  
    // Act
    const actualScore = computeLanguageScore(quizViewState);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedScore);
  });

  test("Test computeScore function to tabulate scores for each programming language - quiz questions with all equal weights", async () => {
    //arrange
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
                isSelected: false,
                result: 'JavaScript',
                weight: 5,
              },
              {
                name:"",
                isSelected: true,
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
                isSelected: true,
                result: 'JavaScript',
                weight: 5,
              },
              {
                name:"",
                isSelected: true,
                result: 'HTML/CSS',
                weight: 5,
              },
              {
                name:"",
                isSelected: false,
                result: 'Python',
                weight: 5,
              },
            ],
          },
        ],
      };

      const expectedScore = {
        JavaScript: 5,
        'HTML/CSS': 10,
        Python: 5,
      };
  
    // Act
    const actualScore = computeLanguageScore(quizViewState);
  
    // Assert
    expect(actualScore).toStrictEqual(expectedScore);
  });
function computeScore(quizViewState: QuizViewState) {
  throw new Error("Function not implemented.");
}

