import { Skill, Topic } from "./skill";

type ResourceMetadata = {
  link: string;
  videoId?: string;
  vidTitle: string;
  caption?: string;
};

export const getVideosForSkill = (skill: Skill): ResourceMetadata[] => {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=-ou9VvyJNOY",
          videoId: "-ou9VvyJNOY",
          vidTitle: "Learning to add with Dinosaurs",
        },
        {
          link: "https://www.youtube.com/watch?v=k9IMztXsCAs&t=102s",
          videoId: "k9IMztXsCAs",
          vidTitle: "Single Digit Addition",
        },
      ];
    case Skill.ADDITION_DOUBLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=Q9sLfMrH8_w&t=1s",
          videoId: "Q9sLfMrH8_w",
          vidTitle: "Double Digit Addition for Kids",
        },
        {
          link: "https://www.youtube.com/watch?v=Q9sLfMrH8_w&t=1s",
          videoId: "ayFAh4VNMFA",
          vidTitle: "Double Digit Addition with Regrouping",
        },
      ];
    case Skill.ADDITION_TRIPLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=HBa8XBHnJ4U",
          videoId: "HBa8XBHnJ4U",
          vidTitle: "Addition with Regrouping",
        },
        {
          link: "https://www.youtube.com/watch?v=5MaXPXVfETo",
          videoId: "5MaXPXVfETo",
          vidTitle: "3-digit Addition: Regrouping",
        },
      ];
    case Skill.SUBTRACTION_SINGLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
          videoId: "rqiu_xcvSk4",
          vidTitle: "Subtractions for kids",
        },
        {
          link: "https://www.youtube.com/watch?v=-BLNxW2Ya5M",
          videoId: "-BLNxW2Ya5M",
          vidTitle: "Number line subtraction",
        },
      ];
    case Skill.SUBTRACTION_DOUBLE:
      return [
        {
          link:
            "https://www.youtube.com/watch?v=qKxQ33KcRWQ&t=48swww.youtube.com/watch?v=rqiu_xcvSk4",
          videoId: "qKxQ33KcRWQ",
          vidTitle: "Double Digit Subtraction",
        },
        {
          link: "https://www.youtube.com/watch?v=gbZDcEaJer8",
          videoId: "gbZDcEaJer8",
          vidTitle: "Double Digit Subtraction For Kids",
        },
      ];
    case Skill.SUBTRACTION_TRIPLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=A6QUX4BYDR8",
          videoId: "A6QUX4BYDR8",
          vidTitle: "Subtract 3 digit numbers",
        },
        {
          link: "https://www.youtube.com/watch?v=hfzUdTePyJo",
          videoId: "hfzUdTePyJo",
          vidTitle: "Snakes and Ladders",
          caption: "Tip: Pay attention from 4:00 to 9:00"
        },
        {
          link: "https://www.youtube.com/watch?v=gbZDcEaJer8",
          videoId: "xF0LKqExY80",
          vidTitle: "Subtraction: 3 Digit",
        }
      ];
  }
  return [];
};
