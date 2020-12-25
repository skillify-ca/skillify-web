import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const SkillGroup = () => {
  const router = useRouter();
  const { slug } = router.query;

  const initialData = {
    "operating-with-exponents": {
      description: "Exponent rules of multiplication and division",
      skills: [
        {
          id: "NA1-01",
          title:
            "Substitute into and evaluate algebraic expressions involving exponents",
          description:
            "Evaluate expressions involving natural-number exponents with rational-number bases",
        },
        {
          id: "NA1-02",
          title:
            "Describe the relationship between the algebraic and geometric representations of a single-variable term up to degree three",
          description:
            "[i.e., length, which is one dimensional, can be represented by x ; area, which is two dimensional, can be represented by (x)(x) or x2; volume, which is three dimensional, can be represented by (x)(x)(x),(x2)(x), or x3 ]",
        },
        {
          id: "NA1-03",
          title:
            "Derive the exponent rules for multiplying and dividing monomials",
          description:
            "apply these rules in expressions involving one and two variables with positive exponents",
        },
        {
          id: "NA1-04",
          title:
            "Extend the multiplication rule to derive and understand the power of a power rule",
          description:
            "apply it to simplify expressions involving one and two variables with positive exponents",
        },
      ],
    },
    "manipulating-expressions-solving-equations": [],
  };

  const data = initialData[slug].skills;
  console.log(initialData[slug]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="flex items-center justify-center">
          <div>
            {data.map((x) => (
              <Link key={x.id} href={"/skill/" + x.id}>
                <div className="p-4 m-4 bg-pink-500">25% | {x.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkillGroup;
