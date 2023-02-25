import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { FETCH_USER_SKILLS_RATINGS } from "../../../graphql/fetchUserSkillsRatings";
import { UPSERT_USER_SKILL_RATINGS } from "../../../graphql/upsertUserSkillRatings";
import { useAuth } from "../../../lib/authContext";
import { transformSkillRatingForDB } from "../../../pages/api/skillRatingsFunctions";
import { SkillRatingsRow } from "../../../redux/skillRatingsSlice";
import { Button } from "../../ui/Button";
import SkillRow from "./SkillRow";

export type SkillRatingsProps = {
  skillRatings: SkillRatingsRow[];
  isEditable: boolean;
};

export default function SkillRatingsComponent({
  skillRatings,
  isEditable,
}: SkillRatingsProps) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("");
  const [sections, setSections] = useState<string[]>([]);
  const [haveTabsLoaded, setHaveTabsLoaded] = useState(false);
  const [springProps, set] = useSpring(() => ({ opacity: 1 }));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    set({ opacity: 0 });
    setTimeout(() => {
      set({ opacity: 1 });
    }, 300);
  };

  const [saveSkillRatings] = useMutation(UPSERT_USER_SKILL_RATINGS, {
    refetchQueries: [{ query: FETCH_USER_SKILLS_RATINGS }],
    onCompleted: () => {
      alert("Your skill ratings have been saved successfully.");
    },
  });

  useEffect(() => {
    if (!haveTabsLoaded && skillRatings.length > 0) {
      const unitNames = skillRatings.map((skill) => skill.unitName);
      const sections = unitNames.filter(
        (unitName, index, array) => array.indexOf(unitName) === index
      );
      setSections(sections);
      setActiveTab(sections[0]);
      setHaveTabsLoaded(true);
    }
  }, [skillRatings]);

  if (activeTab === "") {
    return <div>Loading...</div>;
  }

  const activeTabStyling = (tab: string) => {
    let styling =
      "ml-8 justify-content-center text-2xl text-textPrimary w-36 py-2 h-12 cursor-pointer ";
    if (tab === activeTab) {
      styling =
        styling +
        "text-black-500 underline hover:text-brandPrimary decoration-[0.18rem] underline-offset-[18px]";
    } else {
      styling =
        styling +
        "hover:text-black-500 hover:text-brandPrimary hover:underline hover:decoration-[0.18rem] hover:underline-offset-[18px]";
    }
    return styling;
  };

  return (
    <div className="flex flex-col w-full py-8 overflow-auto-bg-scroll">
      <div className="">
        {sections.map((it, i) => (
          <animated.button
            key={i}
            className={activeTabStyling(it)}
            onClick={() => {
              handleTabClick(it);
              activeTabStyling(it);
            }}
          >
            {it}
          </animated.button>
        ))}
      </div>
      <div>
        <div
          className={`${activeTab ? "flex flex-col sm:p-4 sm:m-4" : "hidden"} `}
        >
          <animated.div style={springProps}>
            {skillRatings &&
              skillRatings
                .filter((skill) => skill.unitName === activeTab)
                .map((it, i) => (
                  <SkillRow
                    key={i}
                    skillRow={{
                      userSkillId: it.userSkillId,
                      skillId: it.skillId,
                      skillName: it.skillName,
                      unitName: it.unitName,
                      studentRating: it.studentRating,
                    }}
                    isEditable={isEditable}
                  />
                ))}
          </animated.div>
        </div>
      </div>
      <div className="p-4">
        {isEditable ? (
          <Button
            label="Save"
            onClick={() =>
              saveSkillRatings({
                variables: {
                  objects: transformSkillRatingForDB(skillRatings, user),
                },
              })
            }
          />
        ) : null}
      </div>
    </div>
  );
}
