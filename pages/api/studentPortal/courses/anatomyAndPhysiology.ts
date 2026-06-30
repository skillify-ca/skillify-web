import { LessonComponentData } from "../../../../components/studentPortal/lessons/LessonComponent";
import { Unit } from "../units";

export const anatomyAndPhysiologyUnits: Unit[] = [
    {
        title: "The Chemical Level of Organization",
        nodes: [
            {
                title: "Lesson 1",
                type: "lesson",
                description: "How Matter is Organized",
                link: "introduction",
            },
            {
                title: "Lesson 2",
                type: "lesson",
                description: "Chemical Bonds",
                link: "chemical-bonds",
            },
            {
                title: "Lesson 3",
                type: "lesson",
                description: "Chemical Reactions",
                link: "chemical-reactions",
            },
            {
                title: "Lesson 4",
                type: "lesson",
                description: "Inorganic Compounds and Solutions",
                link: "compounds-solutions",
            },
            {
                title: "Lesson 5",
                type: "lesson",
                description: "Overview of Organic Compounds",
                link: "organic-compounds",
            },
        ],
    },
];

export function getLessonForAnatomyAndPhysiologyCourse(lessonId: string) {
    // if (lessonId === "introduction") {
        return getIntroMatterOrganizationLesson();
    // } else if (lessonId === "chemical-bonds") {
    //     return getChemicalBondsLesson();
    // } else if (lessonId === "chemical-reactions") {
    //     return getChemicalReactionLesson();
    // } else if (lessonId === "compounds-solutions") {
    //     return getOrganicCompondLessonds();
    // }
}

function getIntroMatterOrganizationLesson() {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Introduction to Anatomy and Physiology",
    },
    {
      component: "description",
      text: `Anatomy is the science of the different structures in the body and the relationships between them. Physiology is the science of functions in the body.`,
    },
        {
      component: "description",
      text: `There are six levels of studying the body in anatomy. There are 11 systems of the human body.`,
    },
  ];

  return {lessonComponents, nextSlug: ""}
}
