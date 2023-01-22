import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSkillsAndRatings,
  FETCH_SKILLS_AND_RATINGS,
} from "../../graphql/fetchSkillsAndRatings";
import { FETCH_USER_SKILLS_RATINGS } from "../../graphql/fetchUserSkillsRatings";
import { UPSERT_USER_SKILL_RATINGS } from "../../graphql/upsertUserSkillRatings";
import { useAuth } from "../../lib/authContext";
import {
  transformSkillRatingForDB,
  transformSkillsAndRatings,
} from "../../pages/api/skillRatingsFunctions";
import {
  skillRatingsSelector,
  setSkillRatings,
} from "../../redux/skillRatingsSlice";
import SkillRow from "../skillRatings/SkillRow";
import { Button } from "../ui/Button";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

export default function SkillRatingsComponent(props) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { skillRatings } = useSelector(skillRatingsSelector);
  const [sections, setSections] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("");
  const [haveTabsLoaded, setHaveTabsLoaded] = useState(false);
  const [springProps, set] = useSpring(() => ({ opacity: 1 }));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    set({ opacity: 0 });
    setTimeout(() => {
      set({ opacity: 1 });
    }, 300);
  };

  const {} = useQuery<FetchSkillsAndRatings>(FETCH_SKILLS_AND_RATINGS, {
    variables: {
      userId: user.uid,
    },
    onCompleted: (data) => {
      dispatch(
        setSkillRatings(transformSkillsAndRatings(data.intro_course_skills))
      );
    },
  });

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
      "ml-8 justify-content-center text-2xl dark:text-white text-gray-500 w-36 py-2 h-12 cursor-pointer ";
    if (tab === activeTab) {
      styling =
        styling +
        "text-black-500 underline dark:hover:text-orange-300 decoration-[0.18rem] underline-offset-[18px]";
    } else {
      styling =
        styling +
        "hover:text-black-500 dark:hover:text-orange-300 hover:underline hover:decoration-[0.18rem] hover:underline-offset-[18px] dark:hover:und";
    }
    return styling;
  };

  return (
    <div className="flex flex-col w-full overflow-auto-bg-scroll">
      <div className="flex justify-center p-4">
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
      </div>
      <div>
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
                  />
                ))}
          </animated.div>
        </div>
      </div>
    </div>
  );
}
