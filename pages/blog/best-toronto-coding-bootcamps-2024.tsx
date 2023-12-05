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
        title={"Best Toronto Coding Bootcamps in 2024"}
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
      text: "Best Toronto Coding Bootcamps in 2024",
    },
    {
      component: "description",
      text: "If you are looking to learn to code in Toronto there are a few solid options. We definitely recommend the program at Skillify for being the most valuable. Skillify offers more personalized training and support compared to others on this list. Three months is not enough time to learn to code, so we recommend the 8-month program at Skillify. All of the programs in the list offer financing options.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Skillify",
          image: "/images/logo-2.png",
          description: "Cost: $12000 for 8 months.",
          link: "https://skillify.ca",
        },
        {
          title: "Lighthouse Labs",
          image:
            "https://www.lighthouselabs.ca/uploads/testimonial/company_logo/32/lighthouselabs.jpg",
          description:
            "Cost: $14000 for 3 months. They are our top pick among our competitors.",

          link: "https://www.lighthouselabs.ca/en/web-development",
        },
        {
          title: "General Assembly",
          image:
            "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/2/original/CMYK-Red_Small_GeneralAssembly-Cog__1_.png",
          description: "Cost: $14000 for 3 months.",
          link: "https://generalassemb.ly/education/software-engineering-immersive",
        },
        {
          title: "Brainstation",
          image:
            "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/62/original/blacksquare-logo.jpg",
          description: "Cost: $16500 for 3 months",

          link: "https://brainstation.io/course-package/software-engineering-bootcamp/online",
        },
        {
          title: "UofT Coding Bootcamp",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png",
          description:
            "Cost: $14000 for a 3-month program. The program teaches you PHP, and jQuery, which are more outdated languages than what is in demand in the current workforce.",
          link: "https://bootcamp.learn.utoronto.ca/faq/",
        },
      ],
    },
  ];
  return { props: { blogComponents } };
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
