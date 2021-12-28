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
        return "Trying to keep up with the fast-changing digital world? Our course will help prepare you for your digital future for just $5";
      case "finance":
        return "Feeling stressed or anxious about money? Our course will help you become the master of your finances for just $5.";
      case "climate":
        return "Anxious about our planet's future? Our course  will help you prepare to fight the climate crisit for just $5";
      case "crypto":
        return "Have no idea how crypto works? Our course will help prepare you for your digital future for just $5";
      case "social":
        return "Want to prioritize your mental health? Our course will help you become a master of communication and your emotions for just $5";
      case "sales":
        return "Trying to get into sales? Our course will help level up your skills for just $5";
    }
  };
  return (
    <div>
      <LandingPagev3
        curriculumLink={`/course/${slug}`}
        images={[
          "/images/about/td.png",
          "/images/about/instagram.png",
          "/images/about/spotify.png",
          "/images/about/sap.jpg",
          "/images/about/bmo.jpg",
          "/images/about/wordsWithFriends.png",
        ]}
        title={getTitle(slug)}
        description={getDescription(slug)}
      />
    </div>
  );
};
export default Presale;
