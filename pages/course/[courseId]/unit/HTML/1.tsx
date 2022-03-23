import Card from "../../../../../components/coding/Card";
import Sidebar from "../../../../../components/coding/studentPortal/Sidebar";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";
import Navbar from "../../../../../components/ui/Navbar";
import { ResourceRow } from "../../../../../components/coding/studentPortal/ResourceRow";
import { Button } from "../../../../../components/ui/Button";
import Layout from "../../../../../components/coding/studentPortal/Layout";

const HTML1 = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-x-8">
          <div className="">
            <ProgressBar completed={100} />
            <h1 className="font-bold text-5xl">HTML</h1>
            <div className="space-y-4 ">
              <div className="flex flex-col space-y-4 mt-12">
                <p>
                  HTML is a basic language that all web pages are built on top
                  of. HTML stands for Hyper Text Markup Language. Just like any
                  other language, HTML is made up of a limited number of words
                  that mean different things. You will gain experience with all
                  the possible HTML elements over time.
                </p>
                <h1 className="font-bold">Resources</h1>
                <div className="">
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
            <div className="flex sm:justify-end mt-12">
              <a href={""}>
                <Button label="Continue" disabled={false} />
              </a>
            </div>
            {false && (
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
