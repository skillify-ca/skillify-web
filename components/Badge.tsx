import React from "react";
import DonutChart from "./DonutChart";

export type BadgeProps = {
  text: string;
};
const Badge = ({ text }: BadgeProps) => {
  return (
    <div>
   Bronze | Silver | Gold
      {text}
    </div>
  );
};

export default Badge;
