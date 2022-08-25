import { PieChart } from "react-minimal-pie-chart";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./../../../tailwind.config.js";

export type CircularFractionProps = {
  values: number[];
};
export default function CircularFraction({ values }: CircularFractionProps) {
  const fullConfig = resolveConfig(tailwindConfig);
  const colours = fullConfig.theme.colors;

  return (
    <PieChart
      data={values.map((item, index) => {
        return {
          value: item,
          color: colours["blue"][(index + 2) * 100],
        };
      })}
    />
  );
}
