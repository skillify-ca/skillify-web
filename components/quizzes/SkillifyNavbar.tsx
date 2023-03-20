import React from "react";

type skillifyNavbarProps = {
  hidden: boolean;
  onBackClick: () => void;
};
const skillifyNavbar = ({ hidden, onBackClick }: skillifyNavbarProps) => {
  const className = hidden ? "w-16 p-4 opacity-0" : "w-16 p-4";
  return (
    <div className="flex justify-between">
      <div className="flex justify-start">
        <img
          src="/images/backarrow.svg"
          onClick={onBackClick}
          className={className}
        />
      </div>
      <div className="flex justify-center">
        <img src="/images/logo.svg" className="w-40 mr-8" />
      </div>
      <div></div>
    </div>
  );
};

export default skillifyNavbar;
