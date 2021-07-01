import { Skill, Topic } from "./skill";

type ResourceMetadata = {
  link: string;
  videoId: string;
};

export const getVideosForSkill = (skill: Skill): ResourceMetadata[] => {
  switch (skill) {
    case Skill.NUMBERS_50:
      return [
        {
          link: "https://www.youtube.com/watch?v=GddAGHgH1IM",
          videoId: "GddAGHgH1IM",
        },
        {
          link: "https://www.youtube.com/watch?v=hQSBGyWOjNs&t=57s",
          videoId: "hQSBGyWOjNs",
        },
      ];
    case Skill.ADDITION_SINGLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=-ou9VvyJNOY",
          videoId: "-ou9VvyJNOY",
        },
        {
          link: "https://www.youtube.com/watch?v=k9IMztXsCAs&t=102s",
          videoId: "k9IMztXsCAs",
        },
      ];
    case Skill.ADDITION_DOUBLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=Q9sLfMrH8_w&t=1s",
          videoId: "Q9sLfMrH8_w",
        },
        {
          link: "https://www.youtube.com/watch?v=Q9sLfMrH8_w&t=1s",
          videoId: "ayFAh4VNMFA",
        },
      ];
    case Skill.ADDITION_TRIPLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=HBa8XBHnJ4U",
          videoId: "HBa8XBHnJ4U",
        },
        {
          link: "https://www.youtube.com/watch?v=5MaXPXVfETo",
          videoId: "5MaXPXVfETo",
        },
      ];
    case Skill.ADDITION_PROPERTIES:
      return [
        {
          link: "https://www.youtube.com/watch?v=njfx1sDb45Y",
          videoId: "njfx1sDb45Y",
        },
        {
          link: "https://www.youtube.com/watch?v=81NfQ350vw8&t=31s",
          videoId: "81NfQ350vw8",
        },
      ];
    case Skill.SUBTRACTION_SINGLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
          videoId: "rqiu_xcvSk4",
        },
        {
          link: "https://www.youtube.com/watch?v=-BLNxW2Ya5M",
          videoId: "-BLNxW2Ya5M",
        },
      ];
    case Skill.SUBTRACTION_DOUBLE:
      return [
        {
          link:
            "https://www.youtube.com/watch?v=qKxQ33KcRWQ&t=48swww.youtube.com/watch?v=rqiu_xcvSk4",
          videoId: "qKxQ33KcRWQ",
        },
        {
          link: "https://www.youtube.com/watch?v=gbZDcEaJer8",
          videoId: "gbZDcEaJer8",
        },
      ];
    case Skill.SUBTRACTION_TRIPLE:
      return [
        {
          link: "https://www.youtube.com/watch?v=A6QUX4BYDR8",
          videoId: "A6QUX4BYDR8",
        },
        {
          link: "https://www.youtube.com/watch?v=gbZDcEaJer8",
          videoId: "xF0LKqExY80",
        },
      ];
    case Skill.EQUAL_GROUP_10_ITEMS:
      return [
        {
          link: "https://www.youtube.com/watch?v=K50zMUFvafE&t=58s",
          videoId: "K50zMUFvafE",
        },
      ];
    case Skill.MULTIPLICATION_5:
      return [
        {
          link: "https://www.youtube.com/watch?v=a1zBdLQgNZ4",
          videoId: "a1zBdLQgNZ4",
        },
        {
          link: "https://www.youtube.com/watch?v=h0RF0N5TOPE",
          videoId: "h0RF0N5TOPE",
        },
      ];
    case Skill.MULTIPLICATION_10:
      return [
        {
          link: "https://www.youtube.com/watch?v=A6QUX4BYDR8",
          videoId: "A6QUX4BYDR8",
        },
      ];
    case Skill.EQUAL_SHARING_8_ITEMS:
      return [
        {
          link: "https://www.youtube.com/watch?v=nBa0wftKUJg",
          videoId: "nBa0wftKUJg",
        },
      ];
    case Skill.DIVIDE_12_EQUALLY:
      return [
        {
          link: "https://www.youtube.com/watch?v=MNykrb5G2hU",
          videoId: "MNykrb5G2hU",
        },
        {
          link: "https://www.youtube.com/watch?v=oF2fITujB4c",
          videoId: "oF2fITujB4c",
        },
      ];
    case Skill.DIVIDE_100:
      return [
        {
          link: "https://www.youtube.com/watch?v=7nsfneMa64U",
          videoId: "7nsfneMa64U",
        },
      ];
  }
  return [];
};
