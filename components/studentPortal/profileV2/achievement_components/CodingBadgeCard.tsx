import { useQuery } from "@apollo/client";
import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dialog";
import React from "react";
import { FETCH_BADGE } from "../../../../graphql/studentPortal/achievements/fetchBadge";
import { UserCodingBadge } from "../../../../graphql/studentPortal/achievements/fetchUserBadges";

type CodingBadgeProps = {
  badge: UserCodingBadge;
};

const CodingBadgeCard = ({ badge }: CodingBadgeProps) => {
  useQuery(FETCH_BADGE, {
    variables: {
      badgeId: badge.coding_badge.id,
    },
    onCompleted: (data) => {
      console.log(data.coding_badges);
    },
  });

  return (
    <Root>
      <Trigger asChild>
        {
          <div className="flex items-center justify-center p-4 cursor-pointer group">
            <img
              src={badge.coding_badge.image}
              className="w-40 h-40 transition-all border rounded-full shadow group-hover:scale-110 group-hover:shadow-lg"
            />
          </div>
        }
      </Trigger>

      <Portal>
        <Overlay className="bg-opacity-90 bg-gray-500 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Content className={`theme-default`}>
          <div
            className={`fixed h-[450px] w-[300px] md:h-[550px] md:w-[900px] md:p-10 px-4 transform -translate-x-1/2 md:-translate-y-1/2 -translate-y-1/2 ${"bg-white"} rounded-lg left-1/2 top-1/2 md:top-1/2`}
          >
            <CodingBadgeCardContent badge={badge} />
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default CodingBadgeCard;

export function CodingBadgeCardContent({ badge }: CodingBadgeProps) {
  function formatDate(date) {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da}-${mo}-${ye}`;
  }
  return (
    <div className="grid h-full grid-cols-2 gap-4 p-4">
      {badge.coding_badge.image ? (
        <img src={badge.coding_badge.image} className="w-full border shadow" />
      ) : (
        <div className="w-36 h-36 bg-slate-400" />
      )}

      <div className="h-full px-2 ">
        <p className="text-lg font-bold ">{badge.coding_badge.title}</p>
        <p className="text-xs">{formatDate(badge.created_at)}</p>
        <p className="mt-4">{badge.coding_badge.description}</p>
      </div>
    </div>
  );
}
