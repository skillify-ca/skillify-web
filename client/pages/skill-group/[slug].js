import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import apiData from "../api/data.json";
import ProgressBar from "../../components/ProgressBar";
import Navbar from "../../components/Navbar";

const SkillGroup = () => {
  const router = useRouter();
  const { slug } = router.query;
  const initialData = apiData;
  const data = initialData["skillGroups"][slug];
  if (data === undefined) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center p-16 bg-purple-500 text-white text-center text-xl">
          Coming Soon
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="text-xl text-center p-4">{data.title}</div>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4">
          {data.skills.map((x) => (
            <Link key={x.id} href={"/skill/" + x.id}>
              <div className="gap-0 divide-y-2">
                <div className="p-2 bg-yellow-500">{x.title}</div>
                <div className="p-2 bg-yellow-500">
                  <ProgressBar
                    value={Math.round(Math.random() * 100)}
                    color="pink"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillGroup;
