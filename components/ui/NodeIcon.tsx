import React from "react";
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
    return (
      <img
        src={src}
        className="w-12 h-12 bg-gray-400 rounded-full p-2 hover:bg-backgroundHover"
      />
    );
  } else {
    return <img src={src} className="w-12 h-12 bg-backgroundHover" />;
  }
};

export default NodeIcon;
