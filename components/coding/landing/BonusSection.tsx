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
      feature: "",
      benefits: [""],
    },
  ];
  return (
    <div>
      <h2>Plus a Bonus Package Worth Over</h2>
      <h1 className="underline">$30, 000</h1>
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
    <div>
      <div id="header" className="grid grid-2-cols">
        <div className="flex flex-col">
          <p>Bonus #{num}</p>
          <p>{title}</p>
        </div>
        <div className="flex">
          <p>VALUE:</p>
          <p>{value}</p>
          <p>FREE!</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img className="w-16 h-16 bg-slate-300" src={thumbnailImg} />
        </div>
        <div>
          <p>{feature}</p>
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
