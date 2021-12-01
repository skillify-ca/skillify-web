export interface SimpleCalculatorProps {
  value1: number;
  value2: number;
  operator: string;
  answer: number;
}
const SimpleCalculator = ({
  value1,
  value2,
  operator,
  answer,
}: SimpleCalculatorProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-16 h-16 p-4 bg-blue-300">
        {value1}
      </div>
      <div className="flex items-center justify-center w-16 h-16 p-4 bg-blue-300">
        {operator}
      </div>
      <div className="flex items-center justify-center w-16 h-16 p-4 bg-blue-300">
        {value2}
      </div>
      <p>=</p>
      <div className="flex items-center justify-center w-16 h-16 p-4 bg-blue-300">
        {answer}
      </div>
    </div>
  );
};

export default SimpleCalculator;
