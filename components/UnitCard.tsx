import Link from "next/link";
import React, { useState } from "react";
import { Unit } from "../pages/api/explore";
import UnitItem from "./stories/UnitItem";

export type UnitCardProps = {
  unit: Unit;
  courseId: string;
  disabled?: boolean;
  rating?: number;
  level: number;
  complete?: boolean;
};

export const UnitCard: React.FC<UnitCardProps> = ({
  disabled,
  courseId,
  unit: { image, title, link },
  level,
  complete,
}: UnitCardProps) => {
  const lockedunit = (
    <UnitItem
      level={level}
      disabled={true}
      image={image}
      title={title}
      rating={0}
    />
  );
  const completeUnit = (
    <div className="h-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
      <Link href={`/course/${courseId}/unit/${title}/${level}`}>
        <UnitItem
          level={level}
          image={image}
          title={title}
          rating={0}
          complete={true}
          accessory="completed"
        />
      </Link>
    </div>
  );
  const unlockedunit = (
    <div className="h-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
      <Link href={`/course/${courseId}/unit/${title}/${level}`}>
        <UnitItem
          level={level}
          disabled={disabled}
          image={image}
          title={title}
          rating={0}
        />
      </Link>
    </div>
  );

  return complete ? completeUnit : disabled ? lockedunit : unlockedunit;
};

export default UnitCard;
