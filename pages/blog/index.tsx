import Link from "next/link";
import Card from "../../components/coding/Card";
import LandingNavbar from "../../components/LandingNavbar";

export default function Blog() {
  return (
    <div>
      <LandingNavbar />
      <div className="flex flex-col items-center gap-16 p-4">
        <h1 className="text-5xl font-bold">Blog</h1>

        <div>
          <h4>March 30, 2022</h4>
          <Card
            title={"Where can I learn to code in Toronto?"}
            image={undefined}
            description={
              "This resource lists the top coding bootcamps in Toronto"
            }
            link={"/blog/best-toronto-coding-bootcamps-2022"}
          />
        </div>
        <div>
          <h4>Apriil 2, 2022</h4>
          <Card
            title={"Are Toronto coding bootcamps worth it?"}
            image={undefined}
            description={
              "This resource lists the top coding bootcamps in Toronto"
            }
            link={"/blog/is-it-worth-paying-for-a-coding-bootcamp"}
          />
        </div>
      </div>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
