import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import apiData from "../api/data.json"

const SkillGroup = () => {
  const router = useRouter();
  const { slug } = router.query;
  const initialData = apiData;
  const data = initialData["skillGroups"][slug];
  console.log(data);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="grid grid-cols-2 gap-4">
          {data.map((x) => (
            <Link key={x.id} href={"/skill/" + x.id}>
              <div className="gap-0 divide-y-2">
                <div className="p-8 bg-pink-500">{x.title}</div>
                <div className="p-4 bg-pink-500">
                  {Math.round(Math.random() * 100)}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SkillGroup;
