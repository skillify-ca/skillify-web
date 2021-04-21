import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import apiData from "../api/practice.json";
import "react-simple-hook-modal/dist/styles.css";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import { CREATE_GUESS } from "../../graphql/createGuess";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER_SKILLS } from "../../graphql/updateUserSkills";
import { FETCH_USER_SKILLS } from "../../graphql/fetchUserSkills";
import { FETCH_USER_SKILL } from "../../graphql/fetchUserSkill";
import { UNLOCK_NEXT_SKILL } from "../../graphql/unlockNextSkill";
import { generateQuestions } from "../api/questionGenerator";
import { v4 as uuidv4 } from "uuid";
import { getSkillIdFromSlug, userId } from "../../graphql/utils/constants";
import { useSession } from "next-auth/client";
import Card from "../../components/stories/Card";
import { Button } from "../../components/stories/Button";
import { VerticalEquation } from "../../components/stories/VerticalEquation";
import data from "../api/profile/data.json";
import StatementRow from "../../components/stories/StatementRow";

const Practice = ({ slug }) => {
  const { query } = useRouter();
  const [session] = useSession();
  const [statements, setStatements] = React.useState([]);

  useEffect(() => {
    console.log(slug);
    const filteredList = data.data.filter((it) => it.name === slug);
    if (filteredList.length > 0) {
      setStatements(filteredList[0].statements);
    } else {
      setStatements([]);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-gray-800 font-bold">
          Select an I can statement to practice it
        </h1>
        <ul className="">
          {statements.map((it, index) => {
            return (
              <li className="">
                <StatementRow text={it.text} complete={index < 3} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "addition", level: "1" } },
      { params: { slug: "subtraction" } },
      { params: { slug: "multiplication" } },
    ],
    fallback: true,
  };
}

export default Practice;
