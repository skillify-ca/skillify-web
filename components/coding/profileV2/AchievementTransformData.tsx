import { Data } from "../../../graphql/coding/userBadges/fetchUserBadges";
export type BadgesSectionProps = {
  data: User;
};
export type userCodingBadge = {
  id: number;
};
export type unitProps = {
  unitTitle: string;
  codingBadges: codingBadges[];
};
export type codingBadges = {
  id: number;
  title: string;
  userCodingBadge: userCodingBadge[];
  isAwarded: boolean;
};
export const transformUserBadgeData = (data: Data) => {
  const transformedOutput = data?.intro_course_unit.map((unit) => {
    return {
      unitTitle: unit.title,
      codingBadges: unit.coding_badges.map((badge) => {
        return {
          id: badge.id,
          title: badge.title,
          userCodingBadge: badge.user_coding_badges.map((b) => b),
          isAwarded: badge.user_coding_badges.length > 0,
        };
      }),
    };
  });
  return transformedOutput;
};
