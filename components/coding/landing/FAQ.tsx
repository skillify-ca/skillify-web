import ExpandableContainer from "../ExpandableContainer";

export default function FAQ() {
  const listItems = [
    "I graduated from a degree that I have ZERO interest in.",
    "My job prevents me from spending more time with my family.",
    "Life is too expensive and I'm overwhelmed!",
    "University and college takes too much time and money.",
    "I will never be able to afford a home.",
    "Coding is hard to learn. I need coaching and support.",
    "I want to be free to travel and work from anywhere!",
    "Personalized education is a BIG deal, I need a custom solution that fits my needs. ",
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 bg-murkrow w-full">
      <h2 className="p-4 text-2xl font-bold text-charmander">
        Skillify FAQs
      </h2>
      <div className="flex flex-col items-start w-full p-8 m-4 lg:items-center max-w-7xl bg-slate-200 rounded-xl">
        {listItems.map((item) => (
          <div className="flex items-center transition-all">
            <ExpandableContainer open={false} title={item}>answer</ExpandableContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
