import React from "react";
import ProgressBar from "../../../../components/ui/ProgressBar";


const LessonPage = () => {

  return (
    <div className="grid max-w-5xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12">
      <ProgressBar completed={100} exitLink="/studentPortal/courses/anatomyAndPhysiology" />

      <h1>Chemical Reactions</h1>
      

    </div>
  );
};

type Monosaccharide = "triose" | "tetrose" | "pentose" | "hexose" | "heptose";
type Disaccharide = {
  monosaccharide1: Monosaccharide;
  monosaccharide2: Monosaccharide;
}
type Polysaccharide = {
  monosaccharides: Monosaccharide[];
}

function hydrolysis(disaccharide: Disaccharide): Monosaccharide[] {
  return [disaccharide.monosaccharide1, disaccharide.monosaccharide2];
}

function dehydrationSynthesis(monosaccharides: Monosaccharide[]): Disaccharide | Polysaccharide {
  if (monosaccharides.length === 2) {
    return {
      monosaccharide1: monosaccharides[0],
      monosaccharide2: monosaccharides[1],
    };
  } else {
    return {
      monosaccharides,
    };
  }
}


export default LessonPage;
