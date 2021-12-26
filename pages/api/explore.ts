type Unit = {
  title: string;
  image: string;
  link: string;
  exploreId?: string;
  locked?: boolean;
};
type CourseData = {
  math: Course;
  coding: Course;
  finance: Course;
};
type Course = {
  levels: Level[];
};
type Level = {
  title: string;
  units: Unit[];
};

const courseData: CourseData = {
  math: {
    levels: [
      {
        title: "Grade 1",
        units: [
          {
            title: "addition",
            link: "addition",
            exploreId: "6ugvsJKvPCCKlzsZOIX597",
            image: "/images/skills/add.png",
          },
          {
            title: "subtraction",
            link: "subtraction",
            exploreId: "31Uab2PK2clarxNePl6f3t",
            image: "/images/skills/sub.png",
          },
          {
            title: "multiplication",
            image: "/images/skills/multi.png",
            link: "multiplication",
          },
          {
            title: "division",
            image: "/images/skills/div.png",
            link: "division",
          },
          {
            title: "numbers",
            locked: true,
            image: "/images/skills/add.png",
            link: "numbers",
          },
          {
            title: "fractions",
            locked: true,
            image: "/images/skills/add.png",
            link: "fractions",
          },
        ],
      },
      {
        title: "Grade 2",
        units: [
          {
            title: "addition",
            link: "addition",
            exploreId: "6ugvsJKvPCCKlzsZOIX597",
            image: "/images/skills/add.png",
          },
          {
            title: "subtraction",
            link: "subtraction",
            exploreId: "31Uab2PK2clarxNePl6f3t",
            image: "/images/skills/sub.png",
          },
          {
            title: "multiplication",
            image: "/images/skills/multi.png",
            link: "multiplication",
          },
          {
            title: "division",
            image: "/images/skills/div.png",
            link: "division",
          },
          {
            title: "numbers",
            locked: true,
            image: "/images/skills/add.png",
            link: "numbers",
          },
          {
            title: "fractions",
            locked: true,
            image: "/images/skills/add.png",
            link: "fractions",
          },
        ],
      },
      {
        title: "Grade 3",
        units: [
          {
            title: "addition",
            link: "addition",
            exploreId: "6ugvsJKvPCCKlzsZOIX597",
            image: "/images/skills/add.png",
          },
          {
            title: "subtraction",
            link: "subtraction",
            exploreId: "31Uab2PK2clarxNePl6f3t",
            image: "/images/skills/sub.png",
          },
          {
            title: "multiplication",
            image: "/images/skills/multi.png",
            link: "multiplication",
          },
          {
            title: "division",
            image: "/images/skills/div.png",
            link: "division",
          },
          {
            title: "numbers",
            locked: true,
            image: "/images/skills/add.png",
            link: "numbers",
          },
          {
            title: "fractions",
            locked: true,
            image: "/images/skills/add.png",
            link: "fractions",
          },
        ],
      },
    ],
  },
  finance: {
    levels: [],
  },
  coding: {
    levels: [
      {
        title: "Web Basics",
        units: [
          {
            title: "HTML",
            exploreId: "",
            image: "/images/skills/add.png",
            link: "",
          },
          {
            title: "CSS",
            exploreId: "",
            image: "/images/skills/add.png",
            link: "",
          },
          {
            title: "Javascript",
            exploreId: "",
            image: "/images/skills/add.png",
            link: "",
          },
        ],
      },
      {
        title: "React Basics",
        units: [
          {
            title: "Components",
            exploreId: "",
            image: "/images/skills/add.png",
            link: "",
          },
          {
            title: "Props",
            exploreId: "",
            image: "/images/skills/add.png",
            link: "",
          },
          {
            title: "useState",
            exploreId: "",
            image: "/images/skills/add.png",
            link: "",
          },
        ],
      },
    ],
  },
};

export const getEntryId = (
  topic: string,
  courseIndex: number,
  unitTitle: string
) => {
  const units: any[] = courseData[topic].levels[courseIndex - 1].units;
  return units.find((it) => it.title.toLowerCase() === unitTitle.toLowerCase())
    .exploreId;
};

export default courseData;
