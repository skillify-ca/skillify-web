import React from "react";
import { connect, useSelector } from "react-redux";
import DiagnosticData from "../../components/stories/DiagnosticData";
import { useAppDispatch } from "../../redux/store";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticDataPage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  const questionData = diagnosticResults.questions;
  const guessAns = diagnosticResults.guessAns;
  return (
    <div>
      <DiagnosticData
        questions={questionData.map((question) => question.text)}
        guessAns={guessAns}
      />
    </div>
  );
};

export default DiagnosticDataPage;
