export interface SimpleCalculatorProps {
  value1?: number;
  value2?: number;
  operator?: string;
  answer?: number;
  disabled?: boolean;
}

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
      <div className="flex items-center gap-4">
        <div
          className={`transform transition-colors duration-300 ease-in-out flex items-center justify-center w-20 h-20 p-4 text-2xl ${
            disabled ? "bg-gray-300" : "bg-blue-300"
          }`}
        >
          <p
            className={`transform transition-all duration-300 ease-in-out ${
              disabled ? "opacity-0" : "opacity-100"
            }`}
          >
            {value1}
          </p>
        </div>
        <div
          className={`transform transition-colors duration-500 ease-in-out flex items-center justify-center w-20 h-20 p-4 text-2xl ${
            disabled ? "bg-gray-300" : "bg-blue-300"
          }`}
        >
          <p
            className={`transform transition-all duration-500 ease-in-out ${
              disabled ? "opacity-0" : "opacity-100"
            }`}
          >
            {operator}
          </p>
        </div>
        <div
          className={`transform transition-colors duration-700 ease-in-out flex items-center justify-center w-20 h-20 p-4 text-2xl ${
            disabled ? "bg-gray-300" : "bg-blue-300"
          }`}
        >
          <p
            className={`transform transition-all duration-700 ease-in-out ${
              disabled ? "opacity-0" : "opacity-100"
            }`}
          >
            {value2}
          </p>
        </div>
        <p>=</p>
        <div
          className={`transform transition-colors duration-1000 ease-in-out flex items-center justify-center w-20 h-20 p-4 text-2xl ${
            disabled ? "bg-gray-300" : "bg-blue-300"
          }`}
        >
          <p
            className={`transform transition-all duration-1000 ease-in-out ${
              disabled ? "opacity-0" : "opacity-100"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;
