import Link from "next/link";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { activePageSelector, SidebarPage } from "../../../redux/sidebarSlice";
import TooltipComponent from "../../ui/TooltipComponent";

interface FreemiumSidebarItemProps {
  name: string;
  link: string;
  page: SidebarPage;
  icon: ReactElement;
  notifications?: boolean;
  isDisabled: boolean;
}
const FreemiumSidebarItem = ({
  name,
  link,
  page,
  icon,
  notifications,
  isDisabled,
}: FreemiumSidebarItemProps) => {
  const { activePage } = useSelector(activePageSelector);
  const href = isDisabled ? "" : link;
  const onClick = isDisabled ? (e) => e.preventDefault() : undefined;

  return (
    <>
      <TooltipComponent
        message={"This is a premium feature."}
        icon="../../images/freemium/info.svg"
      >
        <div>
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
        </div>
      </TooltipComponent>
    </>
  );
};

export default FreemiumSidebarItem;
