import Link from "next/link";
import { Button } from "../../ui/Button";

const ExplorePreview = ({ courseId, unitTitle, level }) => {
  return (
    <>
      <div className="grid items-stretch grid-cols-1 sm:grid-cols-2 bg-white shadow-lg rounded-xl">
        <div className="space-y-8 p-4 sm:p-8">
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-bold text-blue-900 capitalize">
              {" "}
              Explore
            </p>{" "}
            <p className="">
              Complete the lesson to better understand the skills for this unit.
            </p>
            <Link href={`/course/${courseId}/explore/${unitTitle}/${level}`}>
              <Button
                label="Start Interactive Lesson"
                backgroundColor="blue"
                textColor="white"
              />
            </Link>
          </div>
        </div>
        <img
          className="object-cover rounded-t-xl max-h-80"
          alt="student-image"
          src="/images/practiceAdd.png"
        />
      </div>
    </>
  );
};

export default ExplorePreview;
