export type Unit = {
  title: string;
  image: string;
  link: string;
  exploreId?: string;
  locked?: boolean;
  badgeId?: number;
};
type CourseData = {
  courses: Course[];
};
export type Course = {
  id: string;
  title: string;
  url: string;
  image: string;
  levels: Level[];
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
      id: "math1",
      image: "/images/courses/math.png",
      url: "course/math1",
      title: "Math Champ 1",
      levels: [
        {
          title: "Bronze",
          units: [
            {
              title: "addition",
              link: "addition/1",
              exploreId: "6ugvsJKvPCCKlzsZOIX597",
              image: "/images/skills/add.png",
            },
            {
              title: "subtraction",
              link: "subtraction/1",
              exploreId: "31Uab2PK2clarxNePl6f3t",
              image: "/images/skills/sub.png",
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              link: "multiplication/1",
            },
            {
              title: "division",
              image: "/images/skills/div.png",
              link: "division/1",
            },
            {
              title: "numbers",
              locked: true,
              image: "/images/skills/add.png",
              link: "numbers/1",
            },
            {
              title: "fractions",
              locked: true,
              image: "/images/skills/add.png",
              link: "fractions/1",
            },
          ],
        },
        {
          title: "Silver",
          units: [
            {
              title: "addition",
              link: "addition/2",
              exploreId: "6ugvsJKvPCCKlzsZOIX597",
              image: "/images/skills/add.png",
            },
            {
              title: "subtraction",
              link: "subtraction/2",
              exploreId: "6K4Qf3ltqvhnG3WpEyRWqf",
              image: "/images/skills/sub.png",
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              link: "multiplication/2",
            },
            {
              title: "division",
              image: "/images/skills/div.png",
              link: "division/2",
            },
            {
              title: "numbers",
              locked: true,
              image: "/images/skills/add.png",
              link: "numbers/2",
            },
            {
              title: "fractions",
              locked: true,
              image: "/images/skills/add.png",
              link: "fractions/2",
            },
          ],
        },
        {
          title: "Gold",
          units: [
            {
              title: "addition",
              link: "addition/3",
              exploreId: "6ugvsJKvPCCKlzsZOIX597",
              image: "/images/skills/add.png",
            },
            {
              title: "subtraction",
              link: "subtraction/3",
              exploreId: "31Uab2PK2clarxNePl6f3t",
              image: "/images/skills/sub.png",
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              link: "multiplication/3",
            },
            {
              title: "division",
              image: "/images/skills/div.png",
              link: "division/3",
            },
            {
              title: "numbers",
              locked: true,
              image: "/images/skills/add.png",
              link: "numbers/3",
            },
            {
              title: "fractions",
              locked: true,
              image: "/images/skills/add.png",
              link: "fractions/3",
            },
          ],
        },
      ],
    },
    {
      id: "math2",
      image: "/images/courses/math.png",
      url: "course/math2",
      title: "Math Champ 2",
      locked: true,
      description: "Complete Math Champ 1 to unlock this course",
      levels: [
        {
          title: "Bronze",
          units: [
            {
              title: "addition",
              link: "addition/1",
              exploreId: "6ugvsJKvPCCKlzsZOIX597",
              image: "/images/skills/add.png",
              badgeId: 1,
            },
            {
              title: "subtraction",
              link: "subtraction/1",
              exploreId: "31Uab2PK2clarxNePl6f3t",
              image: "/images/skills/sub.png",
              badgeId: 1,
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              link: "multiplication/1",
              badgeId: 1,
            },
            {
              title: "division",
              image: "/images/skills/div.png",
              link: "division/1",
              badgeId: 1,
            },
            {
              title: "numbers",
              locked: true,
              image: "/images/skills/add.png",
              link: "numbers/1",
              badgeId: 1,
            },
            {
              title: "fractions",
              locked: true,
              image: "/images/skills/add.png",
              link: "fractions/1",
              badgeId: 1,
            },
          ],
        },
        {
          title: "Silver",
          units: [
            {
              title: "addition",
              link: "addition/2",
              exploreId: "6ugvsJKvPCCKlzsZOIX597",
              image: "/images/skills/add.png",
              badgeId: 1,
            },
            {
              title: "subtraction",
              link: "subtraction/2",
              exploreId: "31Uab2PK2clarxNePl6f3t",
              image: "/images/skills/sub.png",
              badgeId: 1,
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              link: "multiplication/2",
              badgeId: 1,
            },
            {
              title: "division",
              image: "/images/skills/div.png",
              link: "division/2",
              badgeId: 1,
            },
            {
              title: "numbers",
              locked: true,
              image: "/images/skills/add.png",
              badgeId: 1,

              link: "numbers/2",
            },
            {
              title: "fractions",
              badgeId: 1,

              locked: true,
              image: "/images/skills/add.png",
              link: "fractions/2",
            },
          ],
        },
        {
          title: "Gold",
          units: [
            {
              title: "addition",
              badgeId: 1,

              link: "addition/3",
              exploreId: "6ugvsJKvPCCKlzsZOIX597",
              image: "/images/skills/add.png",
            },
            {
              title: "subtraction",
              link: "subtraction/3",
              badgeId: 1,

              exploreId: "31Uab2PK2clarxNePl6f3t",
              image: "/images/skills/sub.png",
            },
            {
              title: "multiplication",
              badgeId: 1,
              image: "/images/skills/multi.png",
              link: "multiplication/3",
            },
            {
              title: "division",
              badgeId: 1,
              image: "/images/skills/div.png",
              link: "division/3",
            },
            {
              title: "numbers",
              badgeId: 1,
              locked: true,
              image: "/images/skills/add.png",
              link: "numbers",
            },
            {
              title: "fractions",
              badgeId: 1,
              locked: true,
              image: "/images/skills/add.png",
              link: "fractions",
            },
          ],
        },
      ],
    },
    {
      id: "coding",
      image: "/images/courses/coding.jpg",
      title: "CS Champ",
      levels: [],
      url: "coding",
      presale: true,
    },
    {
      id: "finance",
      image: "/images/skills/finance.png",
      url: "finance",
      title: "Finance Champ",
      presale: true,
      levels: [
        {
          title: "Web Basics",
          units: [
            {
              title: "HTML",
              badgeId: 1,
              exploreId: "",
              image: "/images/skills/add.png",
              link: "",
            },
            {
              title: "CSS",
              badgeId: 1,
              exploreId: "",
              image: "/images/skills/add.png",
              link: "",
            },
            {
              title: "Javascript",
              badgeId: 1,
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
              badgeId: 1,
              exploreId: "",
              image: "/images/skills/add.png",
              link: "",
            },
            {
              title: "Props",
              badgeId: 1,
              exploreId: "",
              image: "/images/skills/add.png",
              link: "",
            },
            {
              title: "useState",
              badgeId: 1,
              exploreId: "",
              image: "/images/skills/add.png",
              link: "",
            },
          ],
        },
      ],
    },
  ],
};

export const getEntryId = (
  courseId: string,
  courseIndex: number,
  unitTitle: string
) => {
  const units: any[] = getCourse(courseId).levels[courseIndex - 1].units;
  return units.find((it) => it.title.toLowerCase() === unitTitle.toLowerCase())
    .exploreId;
};

export default courseData;
