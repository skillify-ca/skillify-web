export default function WhoItsFor() {
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
        If any of this strikes a chord, then it’s time to learn with Skillify...
      </h2>
      <div className="flex flex-col items-start w-full p-8 m-4 lg:items-center max-w-7xl bg-slate-200 rounded-xl">
        {listItems.map((item) => (
          <div className="flex items-center transition-all hover:scale-110 hover:font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
            <p className="w-full p-4 text-xl">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
