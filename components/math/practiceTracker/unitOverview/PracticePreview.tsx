import Link from "next/link";
import SkillCard from "../../stories/SkillCard";

const PracticePreview = ({ loading, userSkills, skills, courseId }) => {
  const mathUnits = [
    "numbers",
    "addition",
    "subtraction",
    "multiplication",
    "division",
  ];
  const financeUnits = [
    "money",
    "debt",
    "consumer math",
    "budgeting",
    "investing",
    "saving",
    "taxes",
    "real estate",
  ];

  const units = courseId === "finance" ? financeUnits : mathUnits;
  console.log(courseId);

  return (
    <>
      <div className="grid items-stretch grid-cols-1 bg-white shadow-lg rounded-t-xl">
        <div className="p-4 space-y-8 sm:p-8">
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-bold capitalize text-murkrow">
              {" "}
              PRACTICE TIME
            </p>
            <p className="text-murkrow">
              Select a skill to practice questions. You can practice as many
              times as you wish. At the end, you'll be asked to rate your skill
              confidence.
            </p>
          </div>
        </div>

        {units.map((unit) => {
          return (
            <div>
              {skills.filter((skill) => skill.unit.title === unit).length >
              0 ? (
                <>
                  <p className="px-8 font-bold text-murkrow">{unit}</p>
                  <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills
                      .filter((skill) => skill.unit.title === unit)
                      .sort((a, b) => a.unit.level - b.unit.level)
                      .map((skill) => (
                        <div className="p-2">
                          <SkillCard
                            loading={loading}
                            userSkillData={userSkills}
                            skill={skill}
                          />
                        </div>
                      ))}
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PracticePreview;
