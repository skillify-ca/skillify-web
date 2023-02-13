import ExpandableContainer from "../ExpandableContainer";

export default function FAQ() {
  const faqItems = [
    {
      question: "What if I've never coded before? Do I need any experience?",
      answer: "Many of our students have never coded before Skillify. Our curriculum will help anyone learn the fundamentals of coding from scratch. Our expert coaches will provide a unique process that will accelerate your career growth and help you start a career in tech.",
    },
    {
      question: "What if I already have some coding experience or background in tech?",
      answer: "Whether you're at a beginner or advanced level, our program will work for you. It is customized to fit your learning needs so if you already have some experience with coding, you can skip the basics.",
    },
    {
      question: "How long does the program take to complete?",
      answer: "We offer a customized and flexible program for every student, so there is no strict timeframe or deadline like typical coding bootcamps or school. Typically, our students put in anywhere from 10 to 40 hours a week and complete the program within 3-6 months. To provide a rough time frame: if you have never coded before, our program will prepare you for a software developer job in 6 months.",
    },
    {
      question: "What does the program include?",
      answer: " - 1:1 and small group coaching\n - An internship experience where you build digital products on a team under the leadership of ex-Spotify engineers \n - Full access to Skillify online learning platform \n - Opportunities to build your own ideas! (e.g., a storefront) \n - Job hunting support and career guidance",
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
