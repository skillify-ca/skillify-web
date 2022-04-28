export type Unit = {
  title: string;
  image: string;
  link: string;
  exploreId?: string;
  locked?: boolean;
  badgeId?: number;
  skills: number[];
};
type CourseData = {
  courses: Course[];
};
export type Course = {
  id: string;
  title: string;
  url: string;
  image: string;
  presale?: boolean;
  description?: string;
  locked?: boolean;
};
type Level = {
  title: string;
  units: Unit[];
};

export const getCourse = (id): Course => {
  return courseData.courses.find((course) => course.id === id);
};

const courseData: CourseData = {
  courses: [
    {
      id: "coding",
      image: "/images/courses/coding.jpg",
      title: "Coding Basics",
      description: "Learn the basics of HTML, CSS and JavaScript",
      url: "course/coding",
    },
    {
      id: "web-dev",
      image: "/images/courses/coding.jpg",
      title: "Web Development",
      description: "Learn how to build web apps with ReactJS",
      url: "course/coding",
    },
    {
      id: "mobile-dev",
      image: "/images/courses/coding.jpg",
      title: "Mobile Development",
      description: "Learn how to build an Android app",
      url: "course/coding",
    },
    {
      id: "interviews",
      image: "/images/courses/coding.jpg",
      title: "Coding Interviews",
      description: "Learn how to master your coding interviews",
      url: "course/coding",
    },
    {
      id: "web3",
      image: "/images/courses/coding.jpg",
      title: "Web3 Basics",
      description: "Learn about Web3, NFTs, Crypto and all things Metaverse",
      url: "course/coding",
    },
  ],
};

export default courseData;
