import { connect } from "react-redux";
import { setDiagnosticResults } from "../../redux/actions";

const DiagnosticData = (diagnosticResults, setDiagnosticResults) => {
  return <p>HELLO {diagnosticResults.toString()}</p>;
};

const mapStateToProps = (state) => {
  return { diagnosticResults: state.diagnosticResults };
};
export default connect(mapStateToProps, { setDiagnosticResults })(
  DiagnosticData
);
