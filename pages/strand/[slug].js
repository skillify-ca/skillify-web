import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import apiData from "../api/data.json"

const Strand = () => {
  const router = useRouter();
  const { slug } = router.query;

  const initialData = apiData;

  const data = initialData["strand"][slug];
  console.log(initialData[slug]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="grid grid-cols-2 gap-4">
            {data.map((x) => (
              <Link key={x.id} href={"/skill-group/" + x.slug}>
                <div className="gap-0 divide-y-2">
                  <div className="p-8 bg-purple-500">{x.title}</div>
                  <div className="p-4 bg-purple-500">45%</div>
                </div>
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Strand;
