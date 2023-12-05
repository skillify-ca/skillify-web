import React from "react";
import SEO from "../../components/SEO";
import PostLayout from "../../components/blog/PostLayout";
import LessonComponent, {
  LessonComponentData,
} from "../../components/studentPortal/lessons/LessonComponent";

interface PageProps {
  blogComponents: LessonComponentData[];
}
export default function Page({ blogComponents }: PageProps) {
  return (
    <div>
      <SEO
        title={"Best Coding Bootcamps in Toronto According to Reddit"}
        description={
          "We aggregrate a list of Reddit threads discussing the best coding bootcamps in Toronto."
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col gap-4 p-4">
        {blogComponents.map((it, index) => (
          <LessonComponent data={it} key={index} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const blogComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Best Coding Bootcamps in Toronto According to Reddit",
    },
    {
      component: "description",
      text:
        "Coding bootcamps in Toronto can be valuable for anyone looking to learn to code and start a career in tech, but are expensive to pay for. " +
        "Saavy buyers might turn to Reddit, as it is a great place to find information about the best coding courses in Toronto before making such a large purchase. " +
        "In this blog post, we aggregrate a list of Reddit threads discussing the best coding bootcamps in Toronto. " +
        "If you are not sure which program is right for you, you can apply to have a call with a senior software engineer on our team " +
        "to discuss your options. On the call, we will aim to better understand your career goals help you find the best coding bootcamp in Toronto " +
        " for you (if any).",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Getting Hired",
          link: "https://www.reddit.com/r/codingbootcamp/comments/11qmip6/getting_hired/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",

          description: "r/codingbootcamp - 9 months ago",
        },

        {
          title: "Is taking this bootcamp from UofT worth it?",
          link: "https://www.reddit.com/r/cscareerquestionsCAD/comments/11vq9qt/is_taking_this_bootcamp_from_uoft_worth_it/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "cscareerquestionsCAD - 9 months ago",
        },
        {
          title: "Best Canadian coding boot camp that actually works?",
          link: "https://www.reddit.com/r/learnprogramming/comments/xuy7zk/best_canadian_coding_boot_camp_that_actually/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/learnprogramming - 1 year ago",
        },
        {
          title: "Is coding/IT bootcamp worth it in Toronto?",
          link: "https://www.reddit.com/r/askTO/comments/xwdir1/is_codingit_bootcamp_worth_it_in_toronto/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/askTO - 1 year ago",
        },
        {
          title: "Best affordable bootcamps for Canadians?",
          link: "https://www.reddit.com/r/FreeCodeCamp/comments/u9u2o3/best_affordable_bootcamps_for_canadians/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/FreeCodeCamp - 2 years ago",
        },
        {
          title: "Are coding bootcamps worth it?",
          link: "https://www.reddit.com/r/learnprogramming/comments/u1akdr/are_coding_bootcamps_worth_it/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/learnprogramming - 2 years ago",
        },
        {
          title: "University of Toronto Coding Bootcamp Graduates out there?",
          link: "https://www.reddit.com/r/webdev/comments/t2f3ib/university_of_toronto_coding_bootcamp_graduates/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/webdev - 2 years ago",
        },
        {
          title:
            "People that have taken coding bootcamps, what was your experience like?",
          link: "https://www.reddit.com/r/askTO/comments/m0kvxa/people_that_have_taken_coding_bootcamps_what_was/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/askTO - 3 years ago",
        },
        {
          title: "Has anyone taken a coding bootcamp?",
          link: "https://www.reddit.com/r/askTO/comments/9w94il/has_anyone_taken_a_coding_bootcamp/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/askTO - 5 years ago",
        },
        {
          title: "Has anyone taken a coding bootcamp?",
          link: "https://www.reddit.com/r/askTO/comments/9w94il/has_anyone_taken_a_coding_bootcamp/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/askTO - 5 years ago",
        },
        {
          title: "Are coding bootcamps still worth it?",
          link: "https://www.reddit.com/r/askTO/comments/vhl5dk/are_coding_bootcamps_still_worth_it/",
          image: "/images/blog/best-coding-bootcamps-toronto-reddit/reddit.png",
          description: "r/askTO - 5 years ago",
        },
      ],
    },
  ];
  return { props: { blogComponents } };
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
