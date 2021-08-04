import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface LockedBadgeProps {
  title: string;
}

const LockedBadge = ({ title }: LockedBadgeProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      infinite={true}
    >
      <div onClick={toggleFlip}>
        <img src="/images/lockedPic.png" className="w-32" />
      </div>
      <div onClick={toggleFlip} className="w-32 h-32 rounded-xl bg-gray-500 flex justify-center items-center">
        <p className="text-white font-bold text-center">{title}</p>
      </div>
    </ReactCardFlip>
  );
};

export default LockedBadge;
