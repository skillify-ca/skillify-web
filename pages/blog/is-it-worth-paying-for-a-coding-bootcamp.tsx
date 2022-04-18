import Link from "next/link";
import PostLayout from "../../components/coding/blog/PostLayout";
import LessonComponent, {
  LessonComponentData,
} from "../../components/coding/studentPortal/LessonComponent";
import LnadingNavbar from "../../components/LandingNavbar";
import SEO from "../../components/SEO";

interface PageProps {
  blogComponents: LessonComponentData[];
}
export default function Page({ blogComponents }: PageProps) {
  return (
    <div>
      <SEO
        title={"Is it worth paying for a Toronto coding bootcamp?"}
        description={"We break down where you can learn to code in Toronto."}
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col gap-4 p-4">
        {blogComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const blogComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Is it worth paying for a coding bootcamp?",
    },
    {
      component: "description",
      text: "Are Toronto coding bootcamps worth it?",
    },
    {
      component: "description",
      text: "Yes, a Toronto coding bootcamp is worth it for anyone looking for an independent or cohort-based tech training program to help jumpstart your software career.",
    },
    {
      component: "description",
      text: "According to the New York Times, Toronto ranked as the third largest tech-hub in North America. Coding bootcamps can offer affordable in-demand tech skills training. Toronto coding bootcamps can also help you get hired and start your career in software devevlopment.",
    },
    {
      component: "description",
      text: "Most Toronto bootcamps will cost you around $15000 with fees and taxes. The Skillify program is an affordable option with much more personalized attention and mentorship.",
    },
  ];
  return { props: { blogComponents } };
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
