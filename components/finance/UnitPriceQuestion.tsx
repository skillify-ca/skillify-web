import { Button } from "../ui/Button";

type UnitPriceQuestionProps = {
  total: number;
  numberOfObjects: number;
};

export default function UnitPriceQuestion({
  total,
  numberOfObjects,
}: UnitPriceQuestionProps) {
  return (
    <div>
      <div className="flex flex-col gap-4 py-4 overflow-y-hidden max-h-96">
        <p>
          Find the unit price of the item by rounding to the nearest integer.{" "}
          <span className="italic">after</span> calculating.
        </p>
        {""}
        <p className="pl-10">
          Kari has
          <span className="font-bold">{total}</span> objects, and they cost
          <span className="font-bold">${numberOfObjects}</span>
        </p>
        {""}
        <div>
          <p className="mb-4">The unit price of each object is approximately</p>
          <p className="mb-4">
            $
            <input
              id="input"
              type="number"
              value={3}
              className="w-20 font-bold text-right border-2 border-gray-300"
              onChange={(e) => {}}
            ></input>
          </p>
        </div>
        <Button
          backgroundColor="blue"
          textColor="white"
          label="Submit"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
