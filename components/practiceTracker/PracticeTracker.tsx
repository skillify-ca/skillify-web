import UnitCard from "../UnitCard";
import Hero from "./Hero";

const PracticeTracker = ({
  units,
  level,
  badgeData,
  onLevelChange,
  levels,
  description,
  progress,
  courseId,
}) => {
  const isComplete = (unit) => {
    return badgeData
      .filter((badge) => !badge.locked)
      .map((badge) => badge.badge.id)
      .includes(unit.badgeId);
  };
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
        {units.map((unit, index) => (
          <div key={index} className="">
            <UnitCard
              key={index}
              unit={unit}
              rating={0}
              courseId={courseId}
              level={level}
              disabled={unit.locked}
              complete={isComplete(unit)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PracticeTracker;
