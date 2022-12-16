import { Stringifier } from "postcss";

type BonusProps = {
  num: number;
  title: string;
  value: string;
  thumbnailImg: string;
  feature: string;
  benefits: string[];
};
export default function BonusSection() {
  const bonuses: BonusProps[] = [
    {
      num: 1,
      title: "Insiders Job Search Strategy Bonus Training",
      value: "$9,000",
      thumbnailImg: "",
      feature:
        "Prepare for your interviews with bonus coaching sessions for: Resume Critiques and Mock Interviews",
      benefits: [
        "Access our private job board to connect with employers who want to hire you and will provide you with mentorship",
        "Learn our 6-step framework for dismantling any coding interview challenge",
        "Discover our secret strategy for receiving multiple job offers and negotiating your highest possible salary",
        "Access our exclusive partner tools that will get you referred into your dream company",
      ],
    },
    {
      num: 2,
      title: "Expert Mobile App Development Bonus Training",
      value: "$12,000",
      thumbnailImg: "",
      feature: "Unlimited Access to our Mobile App Development Training",
      benefits: [
        "Build your own mobile games and applications for both iOS and Android devices",
        "Differentiate yourself from every other bootcamp or university graduate who only knows web development",
        "Fast track your path to working at FAANG companies",
        "Get twice as many interviews for both web and mobile developer roles",
        "Demand a higher salary by mastering this highly coveted skillset",
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center w-full max-w-5xl p-4 rounded-xl bg-slate-200">
      <h2 className="text-3xl font-bold text-center">
        Plus a Bonus Package Worth Over
      </h2>
      <h1 className="mb-8 text-5xl font-bold text-center underline text-charmander">
        $20,000
      </h1>
      {bonuses.map((bonus) => {
        const { num, title, value, thumbnailImg, feature, benefits } = bonus;
        return (
          <Bonus
            num={num}
            title={title}
            value={value}
            thumbnailImg={thumbnailImg}
            feature={feature}
            benefits={benefits}
          />
        );
      })}
    </div>
  );
}

function Bonus({
  num,
  title,
  value,
  thumbnailImg,
  feature,
  benefits,
}: BonusProps) {
  return (
    <div className="w-full ">
      <div
        id="header"
        className="flex flex-col items-center justify-between pb-4 border-b-4 sm:flex-row border-slate-500"
      >
        <div className="flex flex-col">
          <p className="w-full font-bold text-center uppercase sm:text-start text-charmander">
            Bonus #{num}
          </p>
          <p className="w-full mb-2 font-bold text-center sm:mb-0">{title}</p>
        </div>
        <div className="flex items-center h-12 p-2 rounded-lg bg-charmander">
          <p className="font-bold text-white">VALUE:</p>
          <p className="ml-2 font-bold text-white">{value}</p>
          <p className="px-2 ml-2 font-bold bg-white rounded-lg text-charmander">
            FREE!
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-4 sm:grid sm:grid-cols-2">
        <div className="flex flex-col items-center w-full h-64 p-4 sm:w-108 heropattern-squares-charmander bg-murkrow">
          <div className="flex flex-col items-center justify-center h-full p-4 bg-white rounded-xl">
            <p className="font-bold uppercase font-3xl text-charmander">
              Bonus #{num}
            </p>
            <p className="text-2xl font-bold text-center font-2xl">{title}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="font-bold">{feature}</p>
          <ul className="list-disc list-inside">
            {benefits.map((b) => (
              <li>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
