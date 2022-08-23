import MultiplicationBlock from "../../../../components/math/MultiplicationBlock";
//create big box
export default function BlockComponentGallery() {
  return (
    <div>
      <h1 className="flex justify-center">Multiplication Game</h1>
      <MultiplicationBlock text={""} />
      <MultiplicationBlock text={""} />
      <MultiplicationBlock text={""} />
      <MultiplicationBlock text={""} />
      <MultiplicationBlock text={""} />{" "}
    </div>
  );
}
