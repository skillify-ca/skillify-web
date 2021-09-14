import { Skill, Topic } from "./skill";

type ResourceMetadata = {
  link: string;
  videoId: string;
};

export const getVideosForSkill = (skill: number): ResourceMetadata[] => {
  switch (skill) {
    case 53:
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
    case 1:
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
    case 2:
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
    case 3:
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
    case 4:
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
    case 34:
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
    case 35:
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
    case 36:
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
    case 37:
      return [
        {
          link: "https://www.youtube.com/watch?v=K50zMUFvafE&t=58s",
          videoId: "K50zMUFvafE",
        },
      ];
    case 38:
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
    case 39:
      return [
        {
          link: "https://www.youtube.com/watch?v=A6QUX4BYDR8",
          videoId: "A6QUX4BYDR8",
        },
      ];
    case 40:
      return [
        {
          link: "https://www.youtube.com/watch?v=nBa0wftKUJg",
          videoId: "nBa0wftKUJg",
        },
      ];
    case 41:
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
    case 42:
      return [
        {
          link: "https://www.youtube.com/watch?v=7nsfneMa64U",
          videoId: "7nsfneMa64U",
        },
      ];
  }
  return [];
};
