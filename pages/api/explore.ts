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
      id: "coding",
      image: "/images/courses/coding.jpg",
      title: "Web Development",
      description: "Learn how to build web apps with ReactJS",
      url: "course/coding",
    },
    {
      id: "coding",
      image: "/images/courses/coding.jpg",
      title: "Mobile Development",
      description: "Learn how to build an Android app",
      url: "course/coding",
    },
    {
      id: "coding",
      image: "/images/courses/coding.jpg",
      title: "Coding Interviews",
      description: "Learn how to master your coding interviews",
      url: "course/coding",
    },
    {
      id: "design",
      image: "/images/courses/coding.jpg",
      url: "design",
      title: "UX Design",
      description: "Learn how to design digital products",
      locked: true,
    },
    {
      id: "product",
      image: "/images/courses/coding.jpg",
      url: "product",
      title: "Product Management",
      description: "Learn how to ship digital products",
      locked: true,
    },
    {
      id: "math1",
      image: "/images/courses/math.png",
      url: "course/math1",
      description: "Learn the basic math skills for adults",
      title: "Math Basics",
    },
    {
      id: "finance",
      image: "/images/skills/finance.png",
      url: "finance",
      title: "Financial Literacy",
      description: "Learn how to invest, save, budget and pay taxes",
      locked: true,
    },

    {
      id: "climate",
      image: "/images/skills/climate.png",
      url: "climate",
      title: "Climate Change",
      description: "Learn how climate change is affecting the world",
      locked: true,
    },
    {
      id: "social",
      image: "/images/skills/social.png",
      url: "social",
      description: "Learn how to have meaninful relationships",
      title: "Emotional Intelligence and Communication",
      locked: true,
    },
    {
      id: "crypto",
      image: "/images/skills/crypto.png",
      url: "crypto",
      title: "Cryptocurrency Basics",
      description: "Learn the basics of crypto and web3",
      locked: true,
    },
    {
      id: "sales",
      image: "/images/skills/sales.png",
      description: "Learn how to attract and gain customers",
      url: "sales",
      title: "Marketing and Sales",
      locked: true,
    },
  ],
};

export default courseData;
