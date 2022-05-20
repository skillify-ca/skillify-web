import { HeartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import Card from "../../components/coding/Card";
import LandingNavbar from "../../components/LandingNavbar";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>{"Skillify Blog"}</title>
        <meta
          name="description"
          content={"Articles and resources about Toronto coding bootcamps"}
        />
        <meta property="og:title" content={"Skillify Blog"} />
        <meta
          property="og:image"
          content={"https://www.skillify.ca/images/skillify-header.jpeg"}
        />
        <meta
          property="og:description"
          content={"Articles and resources about Toronto coding bootcamps"}
        />
        <meta property="og:url" content="https://skillify.ca/" />
        <meta property="og:type" content="website" />
      </Head>
      <LandingNavbar />
      <h1 className="w-full p-4 text-5xl font-bold text-center ">Blog</h1>

      <div className="absolute w-full ">
        <div className="absolute top-0 w-full h-full p-8 md:p-16 opacity-5"></div>

        <div className="grid items-center w-full grid-cols-1 gap-16 p-4 sm:grid-cols-2 lg:grid-cols-3">
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
              color={0}
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
              color={1}
            />
          </div>
          <div>
            <h4>Apriil 13, 2022</h4>
            <Card
              title={"Do Product Manager Need Coding Skills?"}
              image={
                "https://www.gooddata.com/img/blog/_1200x630/project-manager-bg.jpg"
              }
              description={
                "We talk about whether product managers should learn how to code"
              }
              link={"/blog/do-product-managers-need-coding-skills"}
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
