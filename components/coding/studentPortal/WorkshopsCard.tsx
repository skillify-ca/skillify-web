import { Button } from "../../ui/Button";

// type WorkshopsCardProps = {
//   title: string;
// };

export default function WorkshopsCard(props) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="font-bold">{props.title}</h2>
      <video src={props.video} controls={true} />
      <a href={props.starterFile}>
        <div className="mt-4">
          {props.starterFile ? <Button label={"Starter Files"} /> : null}
        </div>
      </a>
    </div>
  );
}
