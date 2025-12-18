import Link from "next/link";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { SidebarPage, activePageSelector } from "../../../redux/sidebarSlice";
interface FreemiumSidebarItemProps {
  name: string;
  link: string;
  page: SidebarPage;
  icon: ReactElement;
  notifications?: boolean;
  isDisabled: boolean;
  closeSidebar: () => void;
}
const FreemiumSidebarItem = ({
  name,
  link,
  page,
  icon,
  notifications,
  isDisabled,
  closeSidebar,
}: FreemiumSidebarItemProps) => {
  const { activePage } = useSelector(activePageSelector);

  return (<>
    <div>
      {isDisabled ? (
          <CoachLinkContent
            activePage={activePage}
            page={page}
            isDisabled={isDisabled}
            notifications={notifications}
            icon={icon}
            name={name}
          />
      ) : (
        <Link href={link} legacyBehavior>
          <div onClick={closeSidebar}>
            <CoachLinkContent
              activePage={activePage}
              page={page}
              isDisabled={isDisabled}
              notifications={notifications}
              icon={icon}
              name={name}
            />
          </div>
        </Link>
      )}
    </div>
  </>);
};

function CoachLinkContent({
  activePage,
  page,
  isDisabled,
  notifications,
  icon,
  name,
}) {
  return (
    <div
      className={`flex flex-wrap items-center p-4 cursor-pointer hover:border-l-4 ${
        activePage === page ? "border-charmander text-charmander" : ""
      }  ${
        isDisabled
          ? "border-gray-500 text-gray-500"
          : " hover:border-charmander hover:text-charmander"
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
  );
}
export default FreemiumSidebarItem;
