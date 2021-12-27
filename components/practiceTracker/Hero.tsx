import ProgressRing from "../ui/ProgressRing";

const Hero = ({ progress, description, level, onLevelChange, levels }) => {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 rounded-lg shadow-lg sm:grid-cols-2 bg-blue-50">
      <div className="flex flex-col space-y-4">
        <p className="text-2xl font-bold">Practice Tracker</p>

        <p className="">{description}</p>
        <div className="flex flex-col space-y-2">
          <p className="flex items-center"> Set your level:</p>
          <select
            value={level}
            defaultValue={0}
            onChange={(e) => onLevelChange(+e.target.value)}
            className="flex items-center w-56 py-2 text-sm text-blue-900 bg-transparent border border-black border-solid outline-none focus:outline-none rounded-xl"
          >
            {" "}
            {levels.map((it, index) => (
              <option value={index + 1}>{it}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 sm:items-end sm:pr-8">
        <p className="text-lg font-bold"> Overall Progress</p>
        <div className="p-4">
          <ProgressRing percentage={progress} radius={24} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
