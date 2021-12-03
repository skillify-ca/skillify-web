export interface SimpleCalculatorProps {
  value1: number;
  value2: number;
  operator: string;
  answer: number;
  disabled?: boolean;
}

const DisabledCalculator = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-24 h-24 p-4 text-2xl bg-gray-300">
        X
      </div>
      <div className="flex items-center justify-center w-24 h-24 p-4 bg-gray-300">
        operator
      </div>
      <div className="flex items-center justify-center w-24 h-24 p-4 text-2xl bg-gray-300">
        Y
      </div>
      <p>=</p>
      <div className="flex items-center justify-center w-24 h-24 p-4 text-2xl bg-gray-300">
        ?
      </div>
    </div>
  );
};
const SimpleCalculator = ({
  value1,
  value2,
  operator,
  answer,
  disabled = false,
}: SimpleCalculatorProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">Simple Calculator</p>
      {disabled ? (
        <DisabledCalculator />
      ) : (
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-24 h-24 p-4 text-2xl bg-blue-300">
            {value1}
          </div>
          <div className="flex items-center justify-center w-24 h-24 p-4 text-2xl bg-blue-300">
            {operator}
          </div>
          <div className="flex items-center justify-center w-24 h-24 p-4 text-2xl bg-blue-300">
            {value2}
          </div>
          <p>=</p>
          <div className="flex items-center justify-center w-24 h-24 p-4 text-2xl bg-blue-300">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleCalculator;
