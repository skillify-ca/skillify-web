import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Strand = () => {
  const router = useRouter();
  const { slug } = router.query;

  const initialData = {
    "number-sense-and-algebra": [
      {
        id: "NSA1",
        title: "Operating with Exponents",
        slug: "operating-with-exponents",
      },
      {
        id: "NSA2",
        title: "Solving Equations",
        slug: "manipulating-expressions-solving-equations",
      },
    ],
    "linear-relations": [
      {
        id: "LR1",
        title: "Data Management Techniques",
        slug: "using-data-management-to-investigate-relationships",
      },
      {
        id: "LR2",
        title: "Characteristics of Linear Relations",
        slug: "understanding-characteristics-of-linear-relations",
      },
      {
        id: "LR3",
        title: "Representations of Linear Relations",
        slug: "connecting-various-representations-of-linear-relations",
      },
    ],
    "analytic-geometry": [
      {
        id: "AG1",
        title: "Equation of a Relation and the Shape of its Graph",
        slug:
          "investigating-the-relationship-between-the-equation-of-a-relation-and-the-shape-of-its-graph",
      },
      {
        id: "AG2",
        title: "Properties of a Slope",
        slug: "investigating-the-properties-of-a-slope",
      },
      {
        id: "AG3",
        title: "Properties of Linear Relations",
        slug: "properties-of-linear-relations",
      },
    ],
    "measurement-geometry": [
      {
        id: "MG1",
        title: "Optimal Values of Measurements",
        slug: "optimal-values-of-measurements",
      },
      {
        id: "MG2",
        title: "Perimeter Area Surface Area and Volume",
        slug: "perimeter-area-surface-area-and-volume",
      },
      {
        id: "MG3",
        title: "Geometric Relationships",
        slug: "geometric-relationships",
      },
    ],
  };

  const data = initialData[slug];
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
