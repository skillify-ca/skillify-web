export default function Test() {
  type QuizContext = {
    title: string;
    body: string;
  };
  const context: QuizContext[] = [
    {
      title: "What Coding Language Should I Learn First?",
      body: "Take this free quiz to find out what coding language you should learn first.",
    },
    {
      title: "Why do you want to learn coding?",
      body: "Select all that apply.",
    },
    {
      title: "What field of work are you interested in?",
      body: "Select 1-3 choices.",
    },
    {
      title: "What are you interested in building?",
      body: "Select all that apply.",
    },
  ];

  console.log(typeof context[0].title);

  return <div>{context[0].title}</div>;
}
