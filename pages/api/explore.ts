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
              skills: [1, 4],
            },
            {
              title: "subtraction",
              link: "subtraction/1",
              exploreId: "31Uab2PK2clarxNePl6f3t",
              image: "/images/skills/sub.png",
              skills: [2],
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              link: "multiplication/1",
              skills: [3],
            },
            {
              title: "division",
              image: "/images/skills/div.png",
              link: "division/1",
              skills: [3],
            },
            {
              title: "numbers",
              skills: [3],
              locked: true,
              image: "/images/skills/add.png",
              link: "numbers/1",
            },
            {
              title: "fractions",
              skills: [3],
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
              skills: [3],
              link: "addition/2",
              exploreId: "6ugvsJKvPCCKlzsZOIX597",
              image: "/images/skills/add.png",
            },
            {
              skills: [3],
              title: "subtraction",
              link: "subtraction/2",
              exploreId: "6K4Qf3ltqvhnG3WpEyRWqf",
              image: "/images/skills/sub.png",
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              skills: [3],
              link: "multiplication/2",
            },
            {
              title: "division",
              skills: [3],
              image: "/images/skills/div.png",
              link: "division/2",
            },
            {
              title: "numbers",
              locked: true,
              skills: [3],
              image: "/images/skills/add.png",
              link: "numbers/2",
            },
            {
              title: "fractions",
              skills: [3],
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
              skills: [3],
            },
            {
              title: "subtraction",
              link: "subtraction/3",
              exploreId: "31Uab2PK2clarxNePl6f3t",
              image: "/images/skills/sub.png",
              skills: [3],
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              skills: [3],
              link: "multiplication/3",
            },
            {
              title: "division",
              skills: [3],
              image: "/images/skills/div.png",
              link: "division/3",
            },
            {
              title: "numbers",
              locked: true,
              image: "/images/skills/add.png",
              link: "numbers/3",
              skills: [3],
            },
            {
              title: "fractions",
              locked: true,
              image: "/images/skills/add.png",
              link: "fractions/3",
              skills: [3],
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
              skills: [3],
              badgeId: 1,
            },
            {
              title: "subtraction",
              link: "subtraction/1",
              exploreId: "31Uab2PK2clarxNePl6f3t",
              skills: [3],
              image: "/images/skills/sub.png",
              badgeId: 1,
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              link: "multiplication/1",
              skills: [3],
              badgeId: 1,
            },
            {
              title: "division",
              image: "/images/skills/div.png",
              link: "division/1",
              badgeId: 1,
              skills: [3],
            },
            {
              title: "numbers",
              locked: true,
              image: "/images/skills/add.png",
              skills: [3],
              link: "numbers/1",
              badgeId: 1,
            },
            {
              title: "fractions",
              locked: true,
              image: "/images/skills/add.png",
              link: "fractions/1",
              skills: [3],
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
              skills: [3],
            },
            {
              title: "subtraction",
              link: "subtraction/2",
              exploreId: "31Uab2PK2clarxNePl6f3t",
              image: "/images/skills/sub.png",
              badgeId: 1,
              skills: [3],
            },
            {
              title: "multiplication",
              image: "/images/skills/multi.png",
              link: "multiplication/2",
              skills: [3],
              badgeId: 1,
            },
            {
              title: "division",
              image: "/images/skills/div.png",
              skills: [3],
              link: "division/2",
              badgeId: 1,
            },
            {
              title: "numbers",
              locked: true,
              image: "/images/skills/add.png",
              badgeId: 1,
              skills: [3],

              link: "numbers/2",
            },
            {
              title: "fractions",
              badgeId: 1,

              locked: true,
              skills: [3],
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
              skills: [3],
              image: "/images/skills/add.png",
            },
            {
              title: "subtraction",
              link: "subtraction/3",
              badgeId: 1,

              exploreId: "31Uab2PK2clarxNePl6f3t",
              skills: [3],
              image: "/images/skills/sub.png",
            },
            {
              title: "multiplication",
              badgeId: 1,
              skills: [3],
              image: "/images/skills/multi.png",
              link: "multiplication/3",
            },
            {
              title: "division",
              skills: [3],
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
              skills: [3],
            },
            {
              title: "fractions",
              badgeId: 1,
              locked: true,
              image: "/images/skills/add.png",
              link: "fractions",
              skills: [3],
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
              skills: [3],
            },
            {
              title: "CSS",
              badgeId: 1,
              exploreId: "",
              image: "/images/skills/add.png",
              link: "",
              skills: [3],
            },
            {
              title: "Javascript",
              badgeId: 1,
              exploreId: "",
              image: "/images/skills/add.png",
              link: "",
              skills: [3],
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
              skills: [3],
              image: "/images/skills/add.png",
              link: "",
            },
            {
              skills: [3],
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
              skills: [3],
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
