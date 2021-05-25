import { useRouter } from "next/router";
import Link from "next/link";
import apiData from "../api/data.json";
import ProgressBar from "../../components/ProgressBar";
import Navbar from "../../components/Navbar";

const Strand = () => {
  const router = useRouter();
  const { slug } = router.query;

  const initialData = apiData;

  const data = initialData["strand"][slug];
  if (data === undefined) {
    return (
      <div className="flex justify-center p-16 bg-purple-500 text-white text-center text-xl">
        Coming Soon
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
          <div className="grid grid-cols-2 gap-4">
            {data.skillGroups.map((x) => (
              <Link key={x.id} href={"/skill-group/" + x.slug}>
                <div className="gap-0 divide-y-2">
                  <div className="p-8 bg-purple-500 text-center">{x.title}</div>
                  <div className="p-4 bg-purple-500">
                    <ProgressBar value={45} color="purple" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Strand;
