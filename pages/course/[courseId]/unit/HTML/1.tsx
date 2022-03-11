import Card from "../../../../../components/coding/Card";
import Sidebar from "../../../../../components/coding/studentPortal/Sidebar";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";
import Navbar from "../../../../../components/ui/Navbar";
import { ResourceRow } from "../../../../../components/coding/studentPortal/ResourceRow";

const HTML1 = () => {
  return (
    <>
      <Navbar />

      <div className="bg-white p-8 m-8 space-y-4">
        <div className="grid grid-cols-5 gap-x-8 pt-16">
          <Sidebar />
          <div className="col-span-4">
            <div className="mx-20 mb-20">
              <ProgressBar completed={100} />
            </div>
            <h1 className="font-bold text-5xl">HTML</h1>
            <div className="bg-white space-y-4">
              <div className="flex flex-col space-y-4 mt-12">
                <p>
                  HTML is a basic language that all web pages are built on top
                  of. HTML stands for Hyper Text Markup Language. Just like any
                  other language, HTML is made up of a limited number of words
                  that mean different things. You will gain experience with all
                  the possible HTML elements over time.
                </p>
                <h1 className="font-bold">Resources</h1>
                <div className="p-4">
                  <ResourceRow
                    title={"W3Schools HTML tutorial"}
                    description={
                      "A good starting tutorial is the W3Schools website. Start at the beginning and stop after you complete the Lists section."
                    }
                    disabled={false}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png"
                    link={"https://www.w3schools.com/html/default.asp"}
                  />
                </div>
              </div>
            </div>
            {true && (
              <div>
                <p className="font-bold mt-12">Assignment</p>

                <p className="my-4">
                  After you complete the tutorial create your own index.html
                  file and build a simple web page. Your page should include
                  texts, images and lists. Upload it to group channel on Slack.
                </p>
                <p className="font-bold mt-12">Previous Assignments</p>
                <p className="my-4">
                  You can look at how these pages were build by navigating to
                  the page and right-clicking on it. Select View Page Source to
                  see the HTML code that makes up the web page.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <a
                      className="underline text-charmander"
                      href="/coding/foodblog.html"
                    >
                      Food Blog
                    </a>
                    <iframe
                      src="/coding/foodblog.html"
                      className="w-full h-96 p-4 bg-white shadow-lg border-4 border-purple-400"
                    />
                  </div>
                  <div>
                    <a
                      className="underline text-charmander"
                      href="/coding/nba.html"
                    >
                      NBA Blog
                    </a>
                    <iframe
                      src="/coding/nba.html"
                      className="w-full h-96 p-4 bg-white shadow-lg border-4 border-purple-400"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HTML1;
