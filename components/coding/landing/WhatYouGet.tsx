type Feature = {
  title: string;
  value: string;
  description: string;
};

export default function WhatYouGet() {
  const features: Feature[] = [
    {
      title: "Access To World Class Tech Professionals",
      value: "$25,000 Value",
      description:
        "Our highly trained team of tech professionals help you attract employers, ",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="my-8 text-3xl font-bold">
        Here's Everything You Get as a Member of the Skillify Coding Academy
      </h2>
      <div className="flex flex-col items-center w-full p-8 max-w-7xl bg-slate-200 rounded-xl">
        {features.map((item) => (
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
            <p className="p-4 text-xl ">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
