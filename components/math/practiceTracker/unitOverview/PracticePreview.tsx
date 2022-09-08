import Link from "next/link";
import SkillCard from "../../stories/SkillCard";

const PracticePreview = ({ loading, userSkills, skills, courseId }) => {
  const mathUnits = [
    { title: "numbers", image: "/images/skills/numbers.png" },
    { title: "addition", image: "/images/skills/add.png" },
    { title: "subtraction", image: "/images/skills/sub.png" },
    { title: "multiplication", image: "/images/skills/multi.png" },
    { title: "division", image: "/images/skills/division.png" },
    { title: "Algebra", image: "/images/skills/algebra.jpg" },
    {
      title: "Financial Literacy",
      image: "/images/skills/financial-literacy.jpg",
    },
  ];
  const financeUnits = [
    { title: "money", image: "/images/finance/debt.jpg" },
    { title: "debt", image: "/images/finance/debt.jpg" },
    { title: "consumer math", image: "/images/finance/sale.jpg" },
    { title: "budgeting", image: "/images/finance/budget.jpg" },
    { title: "investing", image: "/images/finance/investing.jpg" },
    { title: "saving", image: "" },
    { title: "taxes", image: "/images/finance/taxes.png" },
    { title: "real estate", image: "" },
  ];

  const units = courseId === "finance" ? financeUnits : mathUnits;

  return (
    <div className="flex justify-center">
      <div className="grid items-stretch max-w-4xl grid-cols-1 bg-white shadow-lg rounded-t-xl">
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
              {skills.filter((skill) => skill.unit.title === unit.title)
                .length > 0 ? (
                <>
                  <div className="flex items-center w-full p-8 font-bold text-white shadow-lg bg-slate-500">
                    <img
                      className="w-24 mr-8 hover:animate-shake"
                      src={unit.image}
                    />
                    <p>{unit.title}</p>
                  </div>
                  <div className="grid grid-cols-1 p-8 sm:grid-cols-4">
                    {skills
                      .filter((skill) => skill.unit.title === unit.title)
                      .sort((a, b) => a.unit.level - b.unit.level)
                      .map((skill) => (
                        <div className="p-2">
                          <SkillCard
                            loading={loading}
                            userSkillData={userSkills}
                            skill={skill}
                            courseId={courseId}
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
    </div>
  );
};

export default PracticePreview;
