import UnitCard from "../UnitCard";
import Hero from "./Hero";

const PracticeTracker = ({
  unlockedUnits,
  lockedUnits,
  level,
  onLevelChange,
  levels,
  description,
  progress,
  courseId,
}) => {
  return (
    <>
      <Hero
        level={level}
        onLevelChange={onLevelChange}
        levels={levels}
        description={description}
        progress={progress}
      />
      <div className="grid mt-8 grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {unlockedUnits.map((unit, index) => (
          <div key={index} className="">
            <UnitCard
              key={unit.title}
              unit={unit}
              rating={0}
              courseId={courseId}
              level={level}
            />
          </div>
        ))}
        {lockedUnits.map((unit, index) => (
          <div key={index} className="">
            <UnitCard
              key={index}
              unit={unit}
              disabled={true}
              courseId={courseId}
              level={level}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PracticeTracker;
