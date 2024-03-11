import React, { useState } from "react";
import { Theme } from "../../../redux/themeSlice";
import { Button } from "../../ui/Button";
import FreemiumDialogComponent from "./FreemiumDialogueComponent";

export type FreemiumHeaderProps = {
  handleMenuIconClick: () => void;
  handleToggleClick: () => void;
  theme: Theme;
  createdAt: Date;
};
export const FreemiumHeader = ({
  handleToggleClick,
  handleMenuIconClick,
  theme = Theme.DEFAULT,
  createdAt,
}: FreemiumHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid w-full h-16 grid-cols-7 border-b-2 bg-backgroundPrimary">
      <div
        onClick={handleMenuIconClick}
        className="flex items-center pl-4 md:hidden"
      >
        <div className="cursor-pointer text-textPrimary lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center col-span-2 pl-4 md:col-span-3">
        {theme === Theme.DEFAULT ? (
          <img className="w-48 h-8 " src="/images/logo.svg" />
        ) : theme === Theme.DRACULA ? (
          <img className="w-48 h-8" src="/images/logo-dark.svg" />
        ) : null}
      </div>
      <div className="flex items-center justify-end col-span-3 pr-2 space-x-6">
        <Button
          label="Join"
          onClick={(e) => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setIsModalOpen(true);
          }}
        />
        {isModalOpen && (
          <FreemiumDialogComponent
            trigger={false}
            onClose={() => setIsModalOpen(false)}
            startOnUpgradeModal={true}
          />
        )}
      </div>
      <div
        onClick={handleToggleClick}
        className="flex items-center justify-end pr-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-textPrimary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </div>
    </div>
  );
};
