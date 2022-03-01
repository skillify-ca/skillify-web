import React, { useEffect } from "react";
import "react-simple-hook-modal/dist/styles.css";
import Link from "next/link";
import data from "../../api/profile/data.json";
import StatementRow from "../../../components/math/stories/StatementRow";

const Practice = ({ slug }) => {
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
      <div className="p-4">
        <h1 className="text-gray-800 font-bold">
          Select an I can statement to practice it
        </h1>

        <ul className="">
          {statements.map((it, index) => {
            return (
              <Link href={"/practice/" + slug + "/" + it.key}>
                <li className="">
                  <StatementRow text={it.text} complete={index < 3} />
                </li>
              </Link>
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
      { params: { slug: "division" } },
    ],
    fallback: true,
  };
}

export default Practice;
