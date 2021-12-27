import Link from "next/link";
import Navbar from "../components/Navbar";
import CourseListItem from "../components/practiceTracker/CourseListItem";
import courseData from "./api/explore";

const Courses = () => {
  return (
    <div className="heropattern-pixeldots-gray-100 min-h-screen bg-gray-200">
      <Navbar />
      <h1 className="text-5xl font-bold text-center p-4">Courses</h1>

      {courseData.courses.map((course) =>
        course.locked ? (
          <CourseListItem
            course={course}
            locked={true}
            description={course.description}
          />
        ) : (
          <a href={course.presale ? `/presale/${course.url}` : course.url}>
            <>
              <CourseListItem course={course} />
            </>
          </a>
        )
      )}
    </div>
  );
};

export default Courses;
