import Link from "next/link";
import Navbar from "../components/ui/Navbar";
import CourseListItem from "../components/math/practiceTracker/CourseListItem";
import courseData from "./api/explore";

const Courses = () => {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <div className="w-full max-w-5xl">
        <h1 className="p-4 text-5xl font-bold text-center">Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {courseData.courses.map((course) =>
            course.locked ? (
              <CourseListItem
                course={course}
                locked={true}
                description={course.description}
              />
            ) : (
              <>
                <CourseListItem
                  course={course}
                  description={course.description}
                />
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
