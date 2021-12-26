import UnitCard from "../UnitCard";
import Hero from "./Hero";

const PracticeTracker = ({ unlockedUnits, lockedUnits, level, onLevelChange, levels, description, progress }) => {
    return <>
        <Hero level={level} onLevelChange={onLevelChange} levels={levels} description={description} progress={progress} /><div className="grid mt-8 grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {unlockedUnits.map((unit, index) => (
                <div key={index} className="">
                    <UnitCard
                        key={unit.title}
                        title={unit.title}
                        image={unit.image}
                        link={`${unit.link}/${Number.parseInt(level) +1}`}
                        rating={0} />
                </div>
            ))}
            {lockedUnits.map((unit, index) => (
                <div key={index} className="">
                    <UnitCard key={index} title={unit.title} disabled={true} link={`${unit.link}/${Number.parseInt(level) + 1}`} />
                </div>
            ))}
        </div></>

}

export default PracticeTracker;