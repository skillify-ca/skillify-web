import ExpandableContainer from "../ExpandableContainer";

export default function FAQ() {
  const faqItems = [
    {
      question: "What if I've never coded before? Do I need any experience?",
      answer: "Many of our students have never coded before Skillify. Our curriculum will help anyone learn the fundamentals of coding from scratch. Our expert coaches will provide a unique process that will accelerate your career growth and help you start a career in tech.",
    },
    {
      question: "My job prevents me from spending more time with my family.",
      answer: "answer",
    },
    {
      question: "Life is too expensive and I'm overwhelmed!",
      answer: "answer",
    },
    {
      question: "University and college takes too much time and money.",
      answer: "answer",
    },
    { question: "I will never be able to afford a home.", answer: "answer" },
    {
      question: "Coding is hard to learn. I need coaching and support.",
      answer: "answer",
    },
    {
      question: "I want to be free to travel and work from anywhere!",
      answer: "answer",
    },
    {
      question:
        "Personalized education is a BIG deal, I need a custom solution that fits my needs. ",
      answer: "answer",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-8 bg-murkrow">
      <h2 className="p-4 text-2xl font-bold text-charmander">Skillify FAQs</h2>
      <div className="flex flex-col items-start w-full p-8 m-4 lg:items-center max-w-7xl bg-slate-200 rounded-xl">
        {faqItems.map((item) => (
          <div className="flex items-center transition-all">
            <ExpandableContainer open={false} title={item.question}>
              {item.answer}
            </ExpandableContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
