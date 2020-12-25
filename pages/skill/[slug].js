import { useRouter } from "next/router";
import Link from "next/link";

const Strand = () => {
  const router = useRouter();
  const { slug } = router.query;

  const initialData = {
    "NA1-01": {
      title:
        "Substitute into and evaluate algebraic expressions involving exponents",
      description:
        "You should be able to evaluate expressions involving natural-number exponents with rational-number bases",
      sourceId: "XZRQhkii0h0",
    },
    "NA1-02": {
      title:
        "Describe the relationship between the algebraic and geometric representations of a single-variable term up to degree three",
      description:
        "[i.e., length, which is one dimensional, can be represented by x ; area, which is two dimensional, can be represented by (x)(x) or x2; volume, which is three dimensional, can be represented by (x)(x)(x),(x2)(x), or x3 ]",
      sourceId: "uJ49XUGhejw",
    },
    "NA1-03": {
      title: "Derive the exponent rules for multiplying and dividing monomials",
      description:
        "apply these rules in expressions involving one and two variables with positive exponents",
      sourceId: "7gZBCTw2EmI",
    },
  };

  const skill = initialData[slug];

  return (
    <div>
      <div className="bg-yellow-500 p-4">
        <h1 className="text-xl text-center p-4">Current Mastery: 45%</h1>
        <h1 className="text-xl text-center p-4">{skill.title}</h1>
        <h1 className="text-base text-center p-4">{skill.description}</h1>
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
