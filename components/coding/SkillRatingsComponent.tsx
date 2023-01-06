import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
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
import SkillSection from "../skillRatings/SkillSection";
import { Button } from "../ui/Button";
import ExpandableContainer from "./ExpandableContainer";

export default function SkillRatingsComponent(props) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { skillRatings } = useSelector(skillRatingsSelector);
  const [activeTab, setActiveTab] = useState("");

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

  const unitNames = skillRatings.map((skill) => skill.unitName);

  const sections = unitNames.filter(
    (unitName, index, array) => array.indexOf(unitName) === index
  );

  return (
    <div className="flex flex-row overflow-auto-bg-scroll">
      <ExpandableContainer open={true} title={""}>
        <div className="flex flex-row space-x-4">
          {sections.map((it) => (
            <button
              className="flex flex-row space-between text-xl text-gray-500 w-20 h-12 cursor-pointer hover:text-black-500 hover:underline hover:hover:decoration-[0.20rem]"
              onClick={() => setActiveTab(it)}
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
