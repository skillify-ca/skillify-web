const Card = ({ title, image, description, link }) => {
  return (
    <a href={link}>
      <div className="h-full items-center justify-center flex flex-col shadow-lg p-4 rounded-xl bg-blue-100 hover:scale-110 transform transition-all">
        <a className="flex flex-col items-center" href="">
          <p className="mb-4">{title}</p>
          <img src={image} className="w-24 mb-4" />
        </a>
        {description}
      </div>
    </a>
  );
};
export default Card;

export type CardData = {
  title: string;
  image: string;
  link: string;
  description: string;
};
