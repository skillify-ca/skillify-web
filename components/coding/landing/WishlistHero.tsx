import Link from "next/link";
import { Button } from "../../ui/Button";

export default function WishlistHero() {
  return (
    <div className="">
      <div className="grid grid-cols-1 m-8 sm:grid-cols-2">
        <div className="mr-8 md:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="">The </span>{" "}
            <span className="text-yellow-600 ">spring bootcamp</span>{" "}
            <span className="">
              is closed, but I want to give you the next best thing...{" "}
            </span>{" "}
            <span className="text-yellow-600 ">for FREE</span>{" "}
          </h1>
          <p className="my-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Get access to a personalized roadmap, industry mentors and a
            community of learners.
          </p>
          <Link href={"/studentPortal/intro"}>
            <Button label={"Start Learning"} size="large" />
          </Link>
        </div>
        <div className="w-full">
          <div className="w-full overflow-hidden ">
            <img
              className="object-cover object-center w-full overflow-hidden rounded-3xl"
              src="/images/about/vithushan.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
