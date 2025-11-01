import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

import { CheckCircleIcon } from "@heroicons/react/outline";
import { FetchSkillsAndRatings } from "../../../../graphql/studentPortal/skillRatings/fetchSkillsAndRatings";
import { FETCH_UNITS } from "../../../../graphql/studentPortal/skillRatings/fetchUnits";
import { FetchUserSkillsRatings } from "../../../../graphql/studentPortal/skillRatings/fetchUserSkillsRatings";
import {
  UPDATE_USER_SKILL_RATING,
  UpdateUserSkillRatingArgs,
} from "../../../../graphql/studentPortal/skillRatings/updateUserSkillRating";
import { Button } from "../../../ui/Button";
import UserSkillRow from "./UserSkillRow";

export type SkillRatingsProps = {
  userId: string;
  skillRatings: FetchSkillsAndRatings;
  userSkillRatings: FetchUserSkillsRatings;
  isEditable: boolean;
};

export default function SkillRatingsComponent({
  skillRatings,
  userSkillRatings,
  isEditable,
}: SkillRatingsProps) {
  const [activeTab, setActiveTab] = useState("");
  const [sections, setSections] = useState<string[]>([]);
  const [haveTabsLoaded, setHaveTabsLoaded] = useState(false);
  const [springProps, set] = useSpring(() => ({ opacity: 1 }));

  const [ratingToSave, setRatingToSave] = useState<UpdateUserSkillRatingArgs>();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    set({ opacity: 0 });
    setTimeout(() => {
      set({ opacity: 1 });
    }, 300);
  };

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

  // call update user skill rating mutation
  const [saveUserSkillRating] = useMutation(UPDATE_USER_SKILL_RATING, {
    variables: ratingToSave,
    onCompleted: () => {
      alert("Rating saved");
    },
  });

  if (activeTab === "") {
    return <div>Loading...</div>;
  }

  const activeTabStyling = (tab: string) => {
    let styling =
      "text-2xl group text-textPrimary py-2 h-12 cursor-pointer bg-backgroundPrimary mx-2 rounded transition-all";
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
      <div className="grid grid-cols-2 gap-4 px-2 py-8 rounded-t-lg shadow sm:grid-cols-4 bg-backgroundSecondary lg:grid-cols-4">
        {sections.map((it, i) => (
          <animated.button
            key={i}
            className={activeTabStyling(it)}
            onClick={() => {
              handleTabClick(it);
              activeTabStyling(it);
            }}
          >
            <div className="flex items-center justify-center w-full gap-2">
              <p className="">{it}</p>
              {skillRatings &&
              userSkillRatings &&
              skillRatings.intro_course_skills.length ===
                userSkillRatings.intro_course_skills_user.length &&
              userSkillRatings.intro_course_skills_user.filter(
                (skill) =>
                  skill.intro_course_skill.intro_course_unit.title === it &&
                  skill.studentRating !== 100
              ).length === 0 ? (
                <CheckCircleIcon className="w-6 h-6 text-green-500 transition-all rounded-full group-hover:text-brandPrimary" />
              ) : (
                ""
              )}
            </div>
          </animated.button>
        ))}
      </div>
      <div>
        <div className={`"flex flex-col p-4 sm:m-4"} `}>
          <animated.div style={springProps}>
            {userSkillRatings &&
              userSkillRatings.intro_course_skills_user
                .filter(
                  (skill) =>
                    skill.intro_course_skill.intro_course_unit.title ===
                    activeTab
                )
                .map((it) => (
                  <UserSkillRow
                    key={it.id}
                    userSkillRating={it}
                    isEditable={isEditable}
                    handleUserSkillRatingChange={(rating) => {
                      setRatingToSave({
                        userSkillId: it.id,
                        studentRating: rating,
                      });
                    }}
                  />
                ))}
          </animated.div>
        </div>
      </div>
      <div className="p-4">
        {isEditable ? (
          <Button
            label="Save"
            onClick={() => {
              saveUserSkillRating();
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
