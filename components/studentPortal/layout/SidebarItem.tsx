import Link from "next/link";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { activePageSelector, SidebarPage } from "../../../redux/sidebarSlice";

interface SidebarItemProps {
  name: string;
  link: string;
  page: SidebarPage;
  icon: ReactElement;
  notifications?: boolean;
  isDisabled: boolean;
}
const SidebarItem = ({
  name,
  link,
  page,
  icon,
  notifications,
  isDisabled,
}: SidebarItemProps) => {
  const { activePage } = useSelector(activePageSelector);
  const href = isDisabled ? "" : link;
  const onClick = isDisabled ? (e) => e.preventDefault() : undefined;

  return (
    <>
      <Link onClick={onClick} href={href}>
        <div
          className={`flex flex-wrap items-center p-4 cursor-pointer hover:border-l-4 ${
            activePage === page ? "border-charmander text-charmander" : ""
          } hover:border-charmander hover:text-charmander ${
            isDisabled ? "border-gray-500 text-gray-500" : ""
          }`}
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
    </>
  );
};

export default SidebarItem;
