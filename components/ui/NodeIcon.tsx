import React, { useState } from "react";
import {
  freemiumImageSrc,
  imageSrc,
} from "../../pages/api/studentPortal/nodeIcons";
export type NodeIconProps = {
  description?: string;
  completed: boolean;
  locked: boolean;
  type: "lesson" | "quiz" | "assignment";
  freemiumMessage?: boolean;
};

export const NodeIcon: React.FC<NodeIconProps> = ({
  completed,
  locked,
  description,
  type,
  freemiumMessage,
}: NodeIconProps) => {
  let src;
  const [isHovered, setIsHovered] = useState(false);
  if (freemiumMessage || description === "") {
    src = freemiumImageSrc(
      completed,
      description,
      locked,
      type,
      freemiumMessage
    );
  } else {
    src = imageSrc(completed, locked, type);
  }
  if (description === "") {
    src = isHovered ? "../../images/freemium/hoverCircleLock.svg" : src;
    return (
      <img
        src={src}
        className="w-12 h-12 bg-gray-400 hover:bg-white rounded-full p-2"
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
