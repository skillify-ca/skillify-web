import MultiplicationGame from "../../../../components/math/multiplication";

//create big box
export default function BlockComponentGallery() {
  return (
    <div>
      <h1 className="flex justify-center">Multiplication Game</h1>
      <MultiplicationGame />
      <MultiplicationGame />
      <MultiplicationGame />
    </div>
  );
}
