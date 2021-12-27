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
};

export const UnitCard: React.FC<UnitCardProps> = ({
  disabled,
  courseId,
  unit: { image, title, link },
  level,
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
  const unlockedunit = (
    <div className="h-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
      <Link href={`/course/${courseId}/unit/${link}`}>
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

  return disabled ? lockedunit : unlockedunit;
};

export default UnitCard;
