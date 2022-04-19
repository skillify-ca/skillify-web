import Link from "next/link";
import { Button } from "../../ui/Button";

export default function Hero() {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-160">
        <div className="p-8 lg:p-16 md:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="">Learn new </span>{" "}
            <span className="text-yellow-600 ">skills</span>{" "}
            <span className="">to </span>{" "}
            <div className="text-yellow-600 ">start a career</div>{" "}
            <span className="">in tech.</span>{" "}
          </h1>
          <p className="my-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Get access to a personalized roadmap, industry mentors and a
            community of learners.
          </p>
          <Link href={"/studentPortal/intro"}>
            <Button label={"Start Learning"} size="large" />
          </Link>
        </div>
        <div className="">
          <img
            className="object-cover w-full h-full md:h-160"
            src="/images/landingPage/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
