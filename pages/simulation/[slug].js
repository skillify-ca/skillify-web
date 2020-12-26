import { useRouter } from "next/router";
import Link from "next/link";
import ExponentRule from "../../components/ExponentRule";
import EvaluateExponent from "../../components/EvaluateExponent";
import LengthAreaVolumeExponents from "../../components/LengthAreaVolumeExponents";
import PowerExponentRule from "../../components/PowerExponentRule";

const Strand = () => {
  const router = useRouter();
  const { slug } = router.query;

  const initialData = {
    "NA1-01": <EvaluateExponent/>,
    "NA1-02": <LengthAreaVolumeExponents/>,
    "NA1-03": <ExponentRule/>,
    "NA1-04": <PowerExponentRule/>,
  };

  const simulation = initialData[slug];
  if (simulation === undefined) {
    return (
      <div className="flex justify-center p-16 bg-green-500 text-white text-center text-xl">
        Coming Soon
      </div>
    );
  }

  return (
    <div>
      {simulation}
    </div>
  );
};

export default Strand;
