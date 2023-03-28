import LangResults from "../../../components/quizzes/langQuiz/LangResults";

export default function Test() {
  return (
    <div>
      <LangResults
        onBackClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        score={{}}
      />
    </div>
  );
}
