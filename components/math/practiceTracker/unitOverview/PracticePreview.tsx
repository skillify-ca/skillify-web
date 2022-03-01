import Link from "next/link";
import SkillCard from "../../stories/SkillCard";

const PracticePreview = ({ loading, userSkills, skills }) => {
  return (
    <>
      <div className="grid items-stretch grid-cols-1 bg-white shadow-lg rounded-t-xl">
        <div className="space-y-8 p-4 sm:p-8">
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-bold text-blue-900 capitalize">
              {" "}
              PRACTICE TIME
            </p>
            <p className="text">
              Select a skill to practice questions. You can practice as many
              times as you wish. At the end, you'll be asked to rate your skill
              confidence.
            </p>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div className="p-2">
                <SkillCard
                  loading={loading}
                  userSkillData={userSkills}
                  skill={skill}
                />
              </div>
            ))
          ) : (
            <div className="bg-white p-4">NO SKILLS FOUND</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PracticePreview;
