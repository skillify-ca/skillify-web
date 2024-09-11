import dynamic from "next/dynamic";
import SEO from "../../components/SEO";
import PostLayout from "../../components/blog/PostLayout";
import { LessonComponentData } from "../../components/studentPortal/lessons/LessonComponent";

const LessonComponent = dynamic(
  () => import("../../components/studentPortal/lessons/LessonComponent"),
  { ssr: false }
);

interface PageProps {
  blogComponents: LessonComponentData[];
}
export default function Page({ blogComponents }: PageProps) {
  return (
    <div>
      <SEO
        title={"The Secret Mindset to Becoming a Better Software Engineer"}
        description={
          "We reveal a secret mindset that will help any engineer to grow in their career."
        }
        image={"https://images.unsplash.com/photo-1629109079207-1b79be8af6a8"}
      />
      <div className="flex flex-col gap-4 p-4">
        {blogComponents.map((it, index) => (
          <LessonComponent data={it} key={index} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const lines: LessonComponentData[] = [
    "I'm good at solving problems. I like challenges and I meet them head on.",
    "Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals.",
    "There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face.",
    "When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth.",
    "Because I know that problems are a key ingredient in my spiritual and mental education and prepartion, I recognize that all problems are important to me.",
    "I do not fear problems, I solve them. I do not ignore my problems, I confront them. I do not avoid problems, I conquer them!",
    "I know that every problem holds within itself the keys to its own solution. Therfore, the better I understand the problem, the clearer I am able to see its solution.",
    "Having problems is not a problem for me. I am confident, self-assured, positive, and determined.",
    "I always know that I am going to overcome any problem I encounter - and I always do!",
    "I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is.",
    "I never worry. I turn 'worry time' into positive, constructive, 'solution time'. I keep my mind alert and open to all solutions - and solutions come quickly and easily to me.",
    "I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place.",
    "I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create.",
    "Challenge, conquer, solution, and win are words that I live by daily. 'Challenges' are the opportunities. 'Conquering them' is the inevitable outcome. 'Solutions' are the stepping stones to my success, and 'Winning' is my way of life.",
  ].map((text) => ({ component: "description", text }));

  const blogComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "The Secret Mindset to Solving All Of Your Problems",
    },
    {
      component: "caption",
      text: "The following is an excerpt from the book 'What to Say When You Talk to Yourself' by Shad Helmstetter.",
    },
    ...[...lines],
  ];
  return { props: { blogComponents } };
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
