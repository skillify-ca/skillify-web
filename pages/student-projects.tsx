import LandingNavbar from "../components/landingPage/LandingNavbar";

const StudentProjectsPage = () => {
  return (
    <div>
      <LandingNavbar />
      <div className="flex flex-col items-center justify-center space-y-2 py-8">
        <h1 className="text-charmander text-4xl font-bold text-center mt-4">
          Hello
        </h1>
      </div>
    </div>
  );
};

export default StudentProjectsPage;

StudentProjectsPage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
