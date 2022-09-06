import Link from "next/link";
import SkillCard from "../../stories/SkillCard";

const PracticePreview = ({ loading, userSkills, skills, courseId }) => {
  const mathUnits = [
    { title: "numbers", image: "/images/skills/numbers.png" },
    { title: "addition", image: "/images/skills/add.png" },
    { title: "subtraction", image: "/images/skills/sub.png" },
    { title: "multiplication", image: "/images/skills/multi.png" },
    { title: "division", image: "/images/skills/division.png" },
  ];
  const financeUnits = [
    { title: "money", image: "" },
    { title: "debt", image: "" },
    { title: "consumer math", image: "" },
    { title: "budgeting", image: "" },
    { title: "investing", image: "" },
    { title: "saving", image: "" },
    { title: "taxes", image: "" },
    { title: "real estate", image: "" },
  ];

  const units = courseId === "finance" ? financeUnits : mathUnits;

  return (
    <>
      {units.map((unit) => {
        return (
          <div>
            {skills.filter((skill) => skill.unit.title === unit.title).length >
            0 ? (
              <>
                <div className="flex items-center w-full p-8 font-bold text-white shadow-lg bg-slate-500">
                  <img
                    className="w-24 mr-8 hover:animate-shake"
                    src={unit.image}
                  />
                  <p>{unit.title}</p>
                </div>
                <SkillsTable
                  skills={skills}
                  unit={unit}
                  loading={loading}
                  userSkills={userSkills}
                  courseId={courseId}
                />
              </>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

type SkillsTableProps = {
  skills: any;
  unit: any;
  loading: boolean;
  userSkills: any;
  courseId: string;
};

function SkillsTable({
  skills,
  unit,
  loading,
  userSkills,
  courseId,
}: SkillsTableProps) {
  return (
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
  );
}

export default PracticePreview;
