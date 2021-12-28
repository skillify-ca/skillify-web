import { useRouter } from "next/router";
import React from "react";
import LandingPagev3 from "../../components/stories/LandingPagev3";

const Presale = () => {
  const slug = useRouter().query.slug;
  const getTitle = (slug) => {
    switch (slug) {
      case "coding":
        return "to code";
      case "finance":
        return "financial literacy";
      case "climate":
        return "climate change";
      case "crypto":
        return "crypto";
      case "social":
        return "social skills";
      case "sales":
        return "sales skills";
    }
  };
  const getDescription = (slug) => {
    switch (slug) {
      case "coding":
        return "Prepare for your digital future";
      case "finance":
        return "Unlock your economic potential";
      case "climate":
        return "Prepare for your future climate";
      case "crypto":
        return "Prepare for your digital future";
      case "social":
        return "Learn how to communicate your emotions";
      case "sales":
        return "Land a job in sales";
    }
  };
  return (
    <div>
      <LandingPagev3
        pages={[]}
        title={getTitle(slug)}
        description={getDescription(slug)}
      />
    </div>
  );
};
export default Presale;
