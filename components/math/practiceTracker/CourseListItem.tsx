import { Course } from "../../../pages/api/explore";

type CourseListItemProps = {
  course: Course;
  locked?: boolean;
  description?: string;
};
const CourseListItem = ({
  course,
  locked,
  description,
}: CourseListItemProps) => {
  return (
    <div
      className={`p-4 m-4 text-xl flex items-center rounded-lg text-white ${
        locked
          ? "to-gray-700 hover:to-gray-700 bg-gradient-to-b from-gray-500"
          : "to-blue-700 hover:to-blue-500 bg-gradient-to-b from-blue-500 cursor-pointer"
      } shadow-lg space-x-4`}
    >
      <img src={course.image} className="w-16" />
      <div className="flex flex-col">
        <p>{course.title}</p>
        {description && <p className="text-sm">{course.description}</p>}
      </div>
    </div>
  );
};

export default CourseListItem;
