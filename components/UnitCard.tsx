import Link from "next/link";
import React, { useState } from "react";
import UnitItem from "./stories/UnitItem";

export type UnitCardProps = {
  title: string;
  image?: string;
  disabled?: boolean;
  link: string;
  rating?: number;
};

export const UnitCard: React.FC<UnitCardProps> = ({
  title,
  image,
  disabled,
  link,
}: UnitCardProps) => {
  const lockedunit = (
    <UnitItem disabled={true} image={image} title={title} rating={0} />
  );
  const unlockedunit = (
    <div className="h-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
      <Link href={`/unit-overview/${link}`}>
        <UnitItem disabled={disabled} image={image} title={title} rating={0} />
      </Link>
    </div>
  );

  return disabled ? lockedunit : unlockedunit;
};

export default UnitCard;
