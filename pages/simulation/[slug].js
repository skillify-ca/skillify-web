import { useRouter } from "next/router";
import Link from "next/link";
import ExponentRule from "../../components/ExponentRule";
import Area from "../../components/Area";
import EvaluateExponent from "../../components/EvaluateExponent";

const Strand = () => {
  const router = useRouter();
  const { slug } = router.query;

  const initialData = {
    "NA1-01": <EvaluateExponent/>,
    "NA1-02": <Area/>,
    "NA1-03": <ExponentRule/>,
  };

  const simulation = initialData[slug];

  return (
    <div>
      <h1 className="text-xl text-center p-4">Current Mastery: 45%</h1>

      {simulation}
    </div>
  );
};

export default Strand;
