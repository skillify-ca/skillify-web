import Link from "next/link";

const Card = ({ title, image, description, link }) => {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center justify-center h-full p-4 transition-all transform bg-blue-100 shadow-lg cursor-pointer rounded-xl hover:scale-110">
        <div className="flex flex-col items-center">
          <h4 className="mb-4 font-bold">{title}</h4>
          <img src={image} className="w-24 mb-4" />
        </div>
        {description}
      </div>
    </Link>
  );
};
export default Card;

export type CardData = {
  title: string;
  image: string;
  link: string;
  description: string;
};
