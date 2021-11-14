import { ReactNode } from "react";

interface SidebarItemProps {
  children: ReactNode;
  onClick: (_: any) => void;
}
export const SidebarItem = ({ children, onClick }: SidebarItemProps) => {
  return (
    <div
      onClick={onClick}
      className="p-8 transform border-blue-900 border-t-4 border-b-4 bg-blue-200 hover:bg-blue-400 cursor-pointer"
    >
      {children}
    </div>
  );
};
