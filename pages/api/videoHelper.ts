import { Skill, Topic } from "./skill";

type ResourceMetadata = {
  link: string;
  videoId?: string;
  vidTitle: string;
};

export const getVideosForSkill = (skill: Skill): ResourceMetadata[] => {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return [
        {
          link: "lessons/addition/single-digit",
          videoId: "-ou9VvyJNOY",
          vidTitle: "Learning to add with Dinosaurs",
        },
        {
          link: "lessons/addition/double-digit",
          videoId: "k9IMztXsCAs",
          vidTitle: "Single Digit Addition",
        },
      ];
    case Skill.ADDITION_DOUBLE:
      return [
        {
          link: "lessons/addition/double-digit",
          videoId: "Q9sLfMrH8_w",
          vidTitle: "Double Digit Addition",
        },
      ];
    case Skill.ADDITION_TRIPLE:
      return [
        {
          link: "lessons/addition/triple-digit",
          videoId: "HBa8XBHnJ4U",
          vidTitle: "Triple Digit Addition",
        },
      ];
  }
  return [];
};
