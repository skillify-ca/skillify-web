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
        title={"Best Toronto Coding Bootcamps in 2022"}
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
      text: "Best Toronto Coding Bootcamps in 2022",
    },
    {
      component: "description",
      text:
        "If you are looking to learn to code in Toronto there are a few solid options. We definitely recommend the program at Skillify for being more afforable and more personalized compared to our competitors on this list.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Skillify",
          image: "/images/logo-2.png",
          description: "Cost: $3000 for a 3 months. $50 for self-paced courses",
          link: "https://skillify.ca",
        },
        {
          title: "Brainstation",
          image:
            "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/62/original/blacksquare-logo.jpg",
          description: "Cost: $12500 for 3 months",

          link: "https://brainstation.io",
        },
        {
          title: "Lighthouse Labs",
          image:
            "https://www.lighthouselabs.ca/uploads/testimonial/company_logo/32/lighthouselabs.jpg",
          description: "Cost: $12500 for 3 months.",

          link: "https://lighthouselabs.ca",
        },
        {
          title: "General Assembly",
          image:
            "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/2/original/CMYK-Red_Small_GeneralAssembly-Cog__1_.png",
          description: "Cost: $15000 for 3 months.",
          link: "https://generalassemb.ly",
        },
        {
          title: "UofT Coding Bootcamp",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png",
          description:
            "Cost: $12000 for a 6-month program. The program teaches you PHP, and jQuery, which are more outdated languages than what is in demand in the current workforce.",
          link: "https://bootcamp.learn.utoronto.ca/",
        },
      ],
    },
  ];
  return { props: { blogComponents } };
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
