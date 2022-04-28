import { useState } from "react";
import { useAuth } from "../../../lib/authContext";
import { Course } from "../../../pages/api/explore";

type CourseListItemProps = {
  course: Course;
  locked?: boolean;
  description?: string;
  enrolled: boolean;
};
const CourseListItem = ({
  course,
  locked,
  description,
  enrolled,
}: CourseListItemProps) => {
  const [isEnrollNowClicked, setIsEnrollNowClicked] = useState(false);
  const { user } = useAuth();

  const handleEnrollClick = async () => {
    setIsEnrollNowClicked(true);
    const url = `https://math-app-1.herokuapp.com/notifications?product=${course.title}`;
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: `[Name] ${user.email} [course] `,
      }),
    };
    await fetch(url, options);
  };
  return (
    <div
      className={`p-8 bg-white m-4 text-xl flex flex-col gap-4 h-80 items-between justify-center text-gray-500 ${
        locked ? "" : "bg-white"
      } shadow-lg`}
    >
      <div>
        <img src={course.image} className="object-center w-24 h-24" />
      </div>
      <div className="flex flex-col">
        <p>{course.title}</p>
        {description && <p className="text-sm">{course.description}</p>}
      </div>
      {enrolled ? (
        <div className="flex items-center text-base text-bulbasaur-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="ml-2 text-lg">Enrolled</p>
        </div>
      ) : isEnrollNowClicked ? (
        <div className="flex items-center text-lg text-charmander">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-2">Enrollment Requested</p>
        </div>
      ) : (
        <div
          onClick={handleEnrollClick}
          className="flex justify-center w-40 px-5 py-3 border-2 border-gray-500 rounded-lg cursor-pointer hover:bg-charmander hover:border-charmander hover:text-white"
        >
          Enroll now
        </div>
      )}
    </div>
  );
};

export default CourseListItem;
