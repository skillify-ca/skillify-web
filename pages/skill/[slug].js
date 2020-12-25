import { useRouter } from "next/router";
import Link from "next/link";

const Strand = () => {
  const router = useRouter();
  const { slug } = router.query;

  const initialData = {
   
  };


  return (
    <div>
      <h1 className="text-xl text-center p-4">Current Mastery: 45%</h1>
       <Link href="/strand/number-sense-and-algebra">
        <div className="p-4 m-4 bg-red-500">Video Briefing</div>
      </Link>
      <Link href="/strand/linear-relations">
        <div className="p-4 m-4 bg-green-500">Simulation</div>
      </Link>
      <Link href="/strand/analytic-geometry">
        <div className="p-4 m-4 bg-blue-500">Practice</div>
      </Link>
    </div>
  );
};

export default Strand;
