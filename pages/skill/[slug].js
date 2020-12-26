import { useRouter } from "next/router";
import Link from "next/link";
import apiData from "../api/data.json";
import ProgressBar from "../../components/ProgressBar";
import Navbar from "../../components/Navbar";

const Strand = () => {
  const router = useRouter();
  const { slug } = router.query;
  const skill = apiData["skills"][slug];

  return (
    <div>
      <Navbar/>
      <div className="bg-yellow-500 p-4">
        <h1 className="text-xl text-center p-4">{skill.title}</h1>
        <h1 className="text-base text-center p-4">{skill.description}</h1>
      </div>
      <div className="bg-purple-500">
        <h1 className="text-xl text-center p-4">Current Mastery: <ProgressBar value={45} color={"purple"}/></h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="p-4 m-4 bg-red-500 flex flex-col">
            <div className="p-4 text-xl text-center">
              <h1>Video Briefing</h1>
            </div>
            <iframe
              className="self-center"
              width="420"
              height="345"
              src={
                "http://www.youtube.com/embed/" + skill.sourceId + "?autoplay=1"
              }
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div>
          <div>
            <Link href={"/simulation/" + slug}>
              <div className="p-4 m-4 text-xl bg-green-500">Simulation</div>
            </Link>
            <Link href={"/practice/" + slug}>
              <div className="p-4 m-4 text-xl bg-blue-500">Practice</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strand;
