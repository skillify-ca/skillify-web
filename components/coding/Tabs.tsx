import { useEffect, useRef, useState } from "react";
import { SkillRatingsRow } from "../../redux/skillRatingsSlice";
import SkillSection from "../skillRatings/SkillSection";
export type TabsData = {
  unitName: string;
  content: JSX.Element;
};

export type TabsProps = {
  skillRatings: SkillRatingsRow[];
};

export function Tabs({ skillRatings }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [tabsData, setTabsData] = useState<TabsData[]>([]);

  const tabsRef = useRef([]);
  const data: TabsData[] = skillRatings.map((rating: SkillRatingsRow) => {
    let unitName: string;
    if (rating.unitName === "HTML") {
      unitName = "HTML";
    } else if (rating.unitName === "JavaScript") {
      unitName = "JavaScript";
    }
    return {
      unitName: unitName,
      content: (
        <div className="flex flex-col p-4 m-4">
          {skillRatings && <SkillSection skillSection={skillRatings} />}
        </div>
      ),
    };
  });
  setTabsData(data);

  console.log("Skill Ratings", skillRatings);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="flex space-x-3 border-b">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.unitName}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-teal-500 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}
