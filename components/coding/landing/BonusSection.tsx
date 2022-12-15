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
      title: "Our Insiders Job Search Strategy",
      value: "$5,000",
      thumbnailImg: "",
      feature: "Feature 1",
      benefits: ["Benefit 1", "Benefit 2"],
    },
  ];
  return (
    <div className="flex flex-col items-center w-full p-4 rounded-xl bg-slate-200">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center">
          Plus a Bonus Package Worth Over
        </h2>
        <h1 className="mb-8 text-5xl font-bold text-center underline text-charmander">
          $30, 000
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
        className="flex justify-between pb-4 border-b-4 border-slate-500"
      >
        <div className="flex flex-col">
          <p className="font-bold uppercase text-charmander">Bonus #{num}</p>
          <p className="font-bold">{title}</p>
        </div>
        <div className="flex items-center p-2 rounded-lg bg-charmander">
          <p className="font-bold text-white">VALUE:</p>
          <p className="ml-2 font-bold text-white">{value}</p>
          <p className="p-2 ml-2 font-bold bg-white rounded-lg text-charmander">
            FREE!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-4">
        <div>
          <img className="w-full h-24 bg-slate-300" src={thumbnailImg} />
        </div>
        <div>
          <p className="font-bold">{feature}</p>
          <ul>
            {benefits.map((b) => (
              <ul>{b}</ul>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
