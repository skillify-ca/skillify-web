import React from "react";
import { connect, useSelector } from "react-redux";
import DiagnosticData from "../../components/stories/DiagnosticData";
import { useAppDispatch } from "../../redux/store";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticDataPage = () => {
  const dispatch = useAppDispatch();
  const title = useSelector(diagnosticSelector);
  console.log("diagnosticResults", title);
  const diagnosticResults = "null";
  const questionData = [];
  const guessAns = [];
  return (
    <div>
      <p>HELLO {title && JSON.stringify(title)}</p>
      <DiagnosticData
        questions={questionData.map((question) => question.text)}
        guessAns={guessAns}
      />
    </div>
  );
};

export default DiagnosticDataPage;
