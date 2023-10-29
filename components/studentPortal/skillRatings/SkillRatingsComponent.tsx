import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { FETCH_USER_SKILLS_RATINGS } from "../../../graphql/studentPortal/skillRatings/fetchUserSkillsRatings";
import { UPSERT_USER_SKILL_RATINGS } from "../../../graphql/studentPortal/skillRatings/upsertUserSkillRatings";

import { FETCH_UNITS } from "../../../graphql/studentPortal/skillRatings/fetchUnits";
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

  // fetch units and set as tabs
  useQuery(FETCH_UNITS, {
    onCompleted: (data) => {
      const unitNames = data.intro_course_unit
        .map((unit) => unit.title)
        .filter((it) => it !== "Introduction");
      setSections(unitNames);
      setActiveTab(unitNames[0]);
      setHaveTabsLoaded(true);
    },
  });

  if (activeTab === "") {
    return <div>Loading...</div>;
  }

  const activeTabStyling = (tab: string) => {
    let styling =
      "text-2xl text-textPrimary py-2 h-12 cursor-pointer bg-backgroundPrimary mx-2 rounded ";
    if (tab === activeTab) {
      styling =
        styling +
        "text-primary underline hover:text-brandPrimary decoration-[0.18rem] underline-offset-[18px]";
    } else {
      styling =
        styling +
        "hover:text-primary hover:text-brandPrimary hover:underline hover:decoration-[0.18rem] hover:underline-offset-[18px]";
    }
    return styling;
  };

  return (
    <div className="flex flex-col w-full overflow-auto-bg-scroll">
      <div className="grid grid-cols-4 gap-4 px-2 py-8 rounded-t-lg shadow bg-backgroundSecondary lg:grid-cols-4">
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
        <div className={`"flex flex-col p-4 sm:m-4"} `}>
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
