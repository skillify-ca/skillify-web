import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { SidebarPage, activePageSelector } from "../../../redux/sidebarSlice";
import FreemiumDialogComponent from "./FreemiumDialogueComponent";
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
  const onClick = isDisabled
    ? () => {
        setIsModalOpen(true);
      }
    : undefined;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        {isDisabled ? (
          <div onClick={onClick}>
            <CoachLinkContent
              activePage={activePage}
              page={page}
              isDisabled={isDisabled}
              notifications={notifications}
              icon={icon}
              name={name}
            />
          </div>
        ) : (
          <Link href={link}>
            <div>
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
        {isModalOpen && (
          <FreemiumDialogComponent
            trigger={false}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
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
