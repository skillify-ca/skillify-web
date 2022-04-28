import Link from "next/link";
import Navbar from "../components/ui/Navbar";
import CourseListItem from "../components/math/practiceTracker/CourseListItem";
import courseData from "./api/explore";
import { useAuth } from "../lib/authContext";
import moment from "moment";

const Courses = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <div className="w-full max-w-5xl">
        <div className="p-4 mx-6 mb-8 bg-white shadow-md sm:p-8 dark:bg-gray-900">
          <p className="font-bold">{moment().format("MMM Do YYYY")}</p>
          <p className="text-3xl font-bold">
            Let's start learning, {user.displayName}
          </p>
        </div>

        <div className="grid grid-cols-1 p-2 sm:grid-cols-2">
          {courseData.courses.map((course) =>
            course.locked ? (
              <CourseListItem
                course={course}
                locked={true}
                enrolled={course.id === "coding"}
                description={course.description}
              />
            ) : (
              <>
                <CourseListItem
                  course={course}
                  enrolled={course.id === "coding"}
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
