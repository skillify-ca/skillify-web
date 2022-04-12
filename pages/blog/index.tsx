import { HeartIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Card from "../../components/coding/Card";
import LandingNavbar from "../../components/LandingNavbar";
import SEO from "../../components/SEO";

export default function Blog() {
  return (
    <div>
      <SEO title={"Blog"} description={"The Skillify Blog"} image={""} />
      <LandingNavbar />
      <h1 className="w-full p-4 text-5xl font-bold text-center ">Blog</h1>

      <div className="absolute w-full">
        <div className="absolute top-0 w-full h-full opacity-5"></div>

        <div className="flex flex-col items-center w-full gap-16 p-4 ">
          <div>
            <h4>March 30, 2022</h4>
            <Card
              title={"Where can I learn to code in Toronto?"}
              image={
                "https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg"
              }
              description={
                "This resource lists the top coding bootcamps in Toronto"
              }
              link={"/blog/best-toronto-coding-bootcamps-2022"}
              color={1}
            />
          </div>
          <div>
            <h4>Apriil 2, 2022</h4>
            <Card
              title={"Are Toronto coding bootcamps worth it?"}
              image={
                "https://www.trilogyed.com/blog/wp-content/uploads/2018/05/columbia_coding_boot_camp2_brandon_colbert.jpg"
              }
              description={
                "This resource lists the top coding bootcamps in Toronto"
              }
              link={"/blog/is-it-worth-paying-for-a-coding-bootcamp"}
              color={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
