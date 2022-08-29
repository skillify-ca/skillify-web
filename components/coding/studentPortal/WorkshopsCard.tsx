import { Button } from "../../ui/Button";

type WorkshopsCardProps = {
  title: string;
  video: string;
  starterFile?: string;
};

export default function WorkshopsCard({
  title,
  video,
  starterFile,
}: WorkshopsCardProps) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="font-bold">{title}</h2>
      <video src={video} controls={true} />
      <a href={starterFile}>
        <div className="mt-4">
          {starterFile ? <Button label={"Starter Files"} /> : null}
        </div>
      </a>
    </div>
  );
}
