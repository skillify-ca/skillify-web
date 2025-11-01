import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dialog";
import React from "react";
import { useSelector } from "react-redux";
import { UserCodingBadge } from "../../../../graphql/studentPortal/achievements/fetchUserBadges";
import { themeSelector } from "../../../../redux/themeSlice";

type CodingBadgeProps = {
  badge: UserCodingBadge;
};

const CodingBadgeCard = ({ badge }: CodingBadgeProps) => {
  const { currentTheme } = useSelector(themeSelector);

  return (
    <Root>
      <Trigger asChild>
        {
          <div className="flex items-center gap-4 p-4 shadow cursor-pointer bg-backgroundPrimary rounded-xl">
            <img
              src={badge.coding_badge.image}
              className="w-16 h-16 transition-all border rounded-full shadow lg:w-24 lg:h-24 hover:scale-110 hover:shadow-lg"
            />
            <p>{badge.coding_badge.title}</p>
          </div>
        }
      </Trigger>

      <Portal>
        <Overlay className="bg-opacity-90 bg-gray-500 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Content className={`${currentTheme}`}>
          <div
            className={`fixed h-[600px] w-[300px] md:h-[600px] md:w-[300px] lg:w-[400px] p-4 transform -translate-x-1/2 md:-translate-y-1/2 -translate-y-1/2 ${"bg-backgroundPrimary"} rounded-lg left-1/2 top-1/2 md:top-1/2`}
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
    <div className="flex flex-col justify-center h-full gap-4 p-4 bg-backgroundPrimary text-textPrimary">
      <p className="text-xs text-end">{formatDate(badge.created_at)}</p>
      <p className="text-lg font-bold text-center ">
        {badge.coding_badge.title}
      </p>

      {badge.coding_badge.image ? (
        <img
          src={badge.coding_badge.image}
          className="w-64 h-64 mx-auto border shadow"
        />
      ) : (
        <div className="w-36 h-36 bg-slate-400" />
      )}

      <div className="h-full ">
        <p className="h-40 p-4 mt-4 bg-backgroundSecondary">
          {badge.coding_badge.description}
        </p>
      </div>
    </div>
  );
}
