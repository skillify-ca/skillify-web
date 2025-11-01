import { CheckCircleIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { supabase } from "../../../../lib/supabase";
import { Button } from "../../../ui/Button";
import UserSkillRow from "./UserSkillRow";

interface FetchSkillsAndRatings {
  intro_course_skills: any[];
}

interface FetchUserSkillsRatings {
  intro_course_skills_user: any[];
}

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

  const [ratingToSave, setRatingToSave] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    set({ opacity: 0 });
    setTimeout(() => {
      set({ opacity: 1 });
    }, 300);
  };

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const { data, error } = await supabase
          .from("intro_course_unit")
          .select("title");
        if (error) {
          throw error;
        }
        const unitNames = data
          .map((unit) => unit.title)
          .filter((it) => it !== "Introduction");
        setSections(unitNames);
        setActiveTab(unitNames[0]);
        setHaveTabsLoaded(true);
      } catch (error) {
        console.error("Error fetching units:", error);
      }
    };

    fetchUnits();
  }, []);

  const saveUserSkillRating = async () => {
    if (!ratingToSave) return;
    try {
      const { error } = await supabase
        .from("intro_course_skills_user")
        .update({ studentRating: ratingToSave.studentRating })
        .eq("id", ratingToSave.userSkillId);
      if (error) {
        throw error;
      }
      alert("Rating saved");
    } catch (error) {
      console.error("Error saving user skill rating:", error);
    }
  };

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
