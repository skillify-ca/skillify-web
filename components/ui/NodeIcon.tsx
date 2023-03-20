import React, { useState } from "react";
import { imageSrc } from "../../pages/api/studentPortal/imageSrc";
export type NodeIconProps = {
  completed?: boolean;
  locked?: boolean;
  type: "lesson" | "quiz" | "assignment" | "freemiumMessage" | "grayedOut";
};

export const NodeIcon: React.FC<NodeIconProps> = ({
  completed,
  locked,
  type,
}: NodeIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  let src = imageSrc(completed, locked, type);
  if (type === "grayedOut") {
    src = isHovered ? "../../images/freemium/hoverCircleLock.svg" : src;
    return (
      <img
        src={src}
        className="w-12 h-12 bg-gray-300 hover:bg-white rounded-full p-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  } else {
    return (
      <img src={src} className="w-12 h-12 bg-backgroundHover rounded-full" />
    );
  }
};

export default NodeIcon;
