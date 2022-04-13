import Link from "next/link";
import PostLayout from "../../components/coding/blog/PostLayout";
import LessonComponent, {
  LessonComponentData,
} from "../../components/coding/studentPortal/LessonComponent";
import SEO from "../../components/SEO";

interface PageProps {
  blogComponents: LessonComponentData[];
}
export default function Page({ blogComponents }: PageProps) {
  return (
    <div>
      <SEO
        title={"Do product managers need coding skills?"}
        description={
          "We list benefits of learning to code for product managers"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <h1 className="text-3xl font-bold">
        Do product managers need coding skills?
      </h1>
      <p>
        {" "}
        Not all product managers have coding skills, but the ones that do are
        able gain more trust within the company. In this post, we break down
        some of the benefits of being a product manager that knows how to code.
      </p>
      <ul className="">
        <li>
          <h4 className="mt-4 text-xl font-bold">
            Communicate better with your engineers
          </h4>
          <p>
            A lot of communication and alignment needs to happen from product
            spec all the way to down to the code implementation. When you have
            an idea of how code works, you can have deeper conversations with
            the engineers on your team. This allows you to have deeper
            relationships and trust with your team.
          </p>
        </li>
        <li>
          <h4 className="mt-4 text-xl font-bold">Ship better products</h4>
          <p>
            A product manager that can understand how web and mobile
            applications are built can better define product roadmaps. They can
            evaluate features and ideas based on business impact and ease of
            implementation.
          </p>
        </li>
        <li>
          <h4 className="mt-4 text-xl font-bold">
            Sharpen your problem solving skills
          </h4>
          <p>
            Start thinking about the products you build in a different way. How
            do you break product requirements into something a computer can
            understand? How do define and handle user interactions using code?
          </p>
        </li>
        <li>
          <h4 className="mt-4 text-xl font-bold">Make better decisions</h4>
          <p>
            You can use data to better understand your customers and make
            product and business decisions based off that data. Understanding
            how user tracking and logging is implemented in code can you
            understand what can easily be logged. If you deeply understand how
            your users are using your product you can make the smartest
            decisions around what your team should prioritize.
          </p>
        </li>
        <li>
          <h4 className="mt-4 text-xl font-bold">Feel more confident</h4>
          <p>
            You can communicate better now that you understand how digital
            products work on a deeper level. Your team will respect and trust
            you more because of that. This will help you to feel more confident
            when talking to people of different backgrounds.
          </p>
        </li>
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const blogComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Do product managers need coding skills?",
    },
    {
      component: "list",
      items: ["Communicate better with the engineers on your teams"],
    },
  ];
  return { props: { blogComponents } };
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
