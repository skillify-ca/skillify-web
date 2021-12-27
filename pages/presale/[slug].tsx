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
    }
  };
  const getDescription = (slug) => {
    switch (slug) {
      case "coding":
        return "Prepare for your digital future";
      case "finance":
        return "Unlock your economic potential";
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
