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
import ExpandableContainer from "./ExpandableContainer";

export default function SkillRatingsComponent(props) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { skillRatings } = useSelector(skillRatingsSelector);
  const [activeTab, setActiveTab] = useState("");
  const [sections, setSections] = useState<string[]>([]);
  const [hasRun, setHasRun] = useState(false);

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
    if (!hasRun && skillRatings.length > 0) {
      const unitNames = skillRatings.map((skill) => skill.unitName);
      const sections = unitNames.filter(
        (unitName, index, array) => array.indexOf(unitName) === index
      );
      setSections(sections);
      setActiveTab(sections[0]);
      setHasRun(true);
    }
  }, [skillRatings]);

  if (activeTab === "") {
    return <div>Loading...</div>;
  }

  const activeTabStyling = (tab: string) => {
    let styling =
      "ml-8 justify-content-center text-2xl text-gray-500 w-36 py-2 h-12 cursor-pointer ";
    if (tab === activeTab) {
      styling =
        styling +
        "text-black-500 underline decoration-[0.18rem] underline-offset-[18px]";
    } else {
      styling =
        styling +
        "hover:text-black-500 hover:underline hover:decoration-[0.18rem] hover:underline-offset-[18px]";
    }
    return styling;
  };

  return (
    <div className="flex flex-row overflow-auto-bg-scroll">
      <ExpandableContainer open={true} title={""}>
        <div className="space-x-10">
          {sections.map((it) => (
            <button
              className={activeTabStyling(it)}
              onClick={() => {
                setActiveTab(it);
                activeTabStyling(it);
              }}
            >
              {it}
            </button>
          ))}
          <div className={`${activeTab ? "flex flex-col p-4 m-4" : "hidden"} `}>
            {skillRatings &&
              skillRatings
                .filter((skill) => skill.unitName === activeTab)
                .map((it) => (
                  <SkillRow
                    skillRow={{
                      userSkillId: it.userSkillId,
                      skillId: it.skillId,
                      skillName: it.skillName,
                      unitName: it.unitName,
                      studentRating: it.studentRating,
                    }}
                  />
                ))}
          </div>
        </div>
        <div className="flex float-right p-4 mr-8 mt-8">
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
      </ExpandableContainer>
    </div>
  );
}
