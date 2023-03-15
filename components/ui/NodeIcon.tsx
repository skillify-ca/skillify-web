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

  if (freemiumMessage) {
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

  return <img src={src} className="w-12 h-12" />;
};

export default NodeIcon;
