import MultiplicationBlock from "../../../../components/math/MultiplicationBlock";
//create big box
export default function BlockComponentGallery() {
  return (
    <div>
      <h1 className="flex justify-center">Multiplication Game</h1>
      <MultiplicationBlock text={"72"} />
      <MultiplicationBlock text={"8 x 9"} />
      <MultiplicationBlock text={"8"} />
      <MultiplicationBlock text={"2 x 4"} />
      <MultiplicationBlock text={"12"} />{" "}
    </div>
  );
}
