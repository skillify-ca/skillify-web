import Link from "next/link";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { activePageSelector, SidebarPage } from "../../../redux/sidebarSlice";

export interface PaidSidebarItemProps {
  name: string;
  link: string;
  page: SidebarPage;
  icon: ReactElement;
  notifications?: boolean;
  isDisabled?: boolean;
  isPremium?: boolean;
}
const PaidSidebarItem = ({
  name,
  link,
  page,
  icon,
  notifications,
}: PaidSidebarItemProps) => {
  const { activePage } = useSelector(activePageSelector);

  return (<>
    <Link href={link} legacyBehavior>
      <div
        className={`flex flex-wrap items-center p-4 cursor-pointer hover:border-l-4 ${
          activePage === page ? "border-charmander text-charmander" : ""
        } hover:border-charmander hover:text-charmander`}
      >
        <div>
          {notifications ? (
            <div className="relative left-6 top-1 ">
              <div className="flex w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          ) : null}
          {icon}
        </div>
        {name}
      </div>
    </Link>
  </>);
};

export default PaidSidebarItem;
