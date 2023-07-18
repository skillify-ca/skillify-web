import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import MockInterview from "../../../components/resources/mockInterview/MockInterview";

export default function MockInterviewPage() {
  return (
    <div>
      <MockInterview/>
    </div>
  );
}

MockInterviewPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};