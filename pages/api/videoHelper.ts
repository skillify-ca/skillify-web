import { Skill, Topic } from "./skill";

type ResourceMetadata = {
  link: string;
  videoId?: string;
};

export const getVideosForSkill = (skill: Skill): ResourceMetadata[] => {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return [
        { link: "lessons/addition/single-digit", videoId: "-ou9VvyJNOY" },
      ];
  }
  return [];
};
