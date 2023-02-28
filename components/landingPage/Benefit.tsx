interface BenefitProps {
  image: React.ReactNode;
  title: string;
  description: string;
}

export default function Benefit({ image, title, description }: BenefitProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-24 h-24 bg-white rounded-full place-self-center">
        {image}
      </div>
      <p className="text-xl font-bold text-center text-charmander">{title}</p>
      <p className="text-center text-white">{description}</p>
    </div>
  );
}
