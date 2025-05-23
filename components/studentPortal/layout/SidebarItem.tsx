import React from "react";
import { UserRole } from "../../../redux/profileSlice";
import FreemiumSidebarItem from "../freemium/FreemiumSidebarItem";
import PaidSidebarItem, { PaidSidebarItemProps } from "./PaidSidebarItem";

export type SidebarItemProps = {
  userRole: UserRole;
  it: PaidSidebarItemProps;
  closeSidebar: () => void;
};

export default function SidebarItem({
  userRole,
  it,
  closeSidebar,
}: SidebarItemProps) {
  if (it.isDisabled) {
    return (
      <div className="flex flex-wrap items-center p-4 bg-gray-300 cursor-not-allowed">
        <div>{it.icon}</div>
        {it.name}
      </div>
    );
  }
  if (it.isPremium && userRole && userRole === UserRole.FREEMIUM) {
    return (
      <FreemiumSidebarItem
        key={it.name}
        name={it.name}
        notifications={it.notifications}
        link={it.link}
        page={it.page}
        icon={it.icon}
        isDisabled={true}
        closeSidebar={closeSidebar}
      />
    );
  } else {
    return (
      <PaidSidebarItem
        key={it.name}
        name={it.name}
        notifications={it.notifications}
        link={it.link}
        page={it.page}
        icon={it.icon}
        isDisabled={it.isDisabled}
      />
    );
  }
}
