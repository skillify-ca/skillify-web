import dynamic from "next/dynamic";
import SEO from "../../components/SEO";
import PostLayout from "../../components/blog/PostLayout";

const LessonComponent = dynamic(
  () => import("../../components/studentPortal/lessons/LessonComponent"),
  { ssr: false }
);

interface PageProps {
  alternatives: CompetitorSectionProps[];
}

export interface CompetitorSectionProps {
  title: string;
  id: string;
  index?: number;
  image: string;
  description: string;
  features: string[];
  benefits: string[];
  downsides?: string[];
  pricing: string;
}

const CompetitorSection = ({
  title,
  id,
  image,
  index,
  description,
  features,
  benefits,
  downsides,
  pricing,
}: CompetitorSectionProps) => (
  <div id={id}>
    <h2 className="text-2xl font-bold">
      {index ? `${index}.` : ""} {title}
    </h2>
    <img className="w-64" src={image} alt={title} />
    <p className="whitespace-pre-wrap">{description}</p>
    <h3 className="mt-4 text-xl">Features</h3>
    <ul className="list-disc list-inside">
      {features.map((it, index) => (
        <li key={index}>{it}</li>
      ))}
    </ul>
    <h3 className="mt-4 text-xl">Benefits</h3>
    <ul className="list-disc list-inside">
      {benefits.map((it, index) => (
        <li key={index}>{it}</li>
      ))}
    </ul>
    {downsides && (
      <>
        <h3 className="mt-4 text-xl">Downsides</h3>
        <ul className="list-disc list-inside">
          {downsides.map((it, index) => (
            <li key={index}>{it}</li>
          ))}
        </ul>
      </>
    )}
    <h3 className="mt-4 text-xl">Pricing</h3>
    <p>{pricing}</p>
  </div>
);

export default function Page({ alternatives }: PageProps) {
  const lighthouseLabs: CompetitorSectionProps = {
    title: "Lighthouse Labs",
    id: "lighthouse-labs",
    features: [
      "3-month coding bootcamp",
      "Full-time and part-time options",
      "Career services",
    ],
    benefits: [
      "Curriculum is not as outdated as competitors",
      "Strong community",
    ],
    downsides: [
      "Expensive",
      "All graduates end up with the same projects so it's hard to differentiate yourself",
      "Instructors are not as experienced",
      "Misleading job statistics",
      "Graduates are not job ready",
    ],
    description:
      "Lighthouse Labs is a traditional coding bootcamp that teaches the basics of coding fundamentals in a 3-month intensive bootcamp. They are one of the most popular options for people who want to learn to basics code in a short amount of time. Lighthouse Labs offers full-time and part-time options, and they have a strong community of students and alumni. They also offer career services to try to help you find a job after you graduate.",
    image:
      "https://www.lighthouselabs.ca/uploads/testimonial/company_logo/32/lighthouselabs.jpg",
    pricing: "$14000 for 3 months",
  };
  return (
    <div>
      <SEO
        title={"5 Best Lighthouse Labs Alternatives in 2024"}
        description={
          "We break down the best alternatives to Lighthouse Labs in 2024."
        }
        image={"https://images.unsplash.com/photo-1522679056866-8dbbc8774a9d"}
      />
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-5xl font-bold">
          3 Best Lighthouse Labs Alternatives
        </h1>
        <p>Vithushan - September 12, 2024</p>

        <h2 className="text-3xl ">
          Find the best alternative to Lighthouse Labs for learning to code,
          building digital products, and growing your career.
        </h2>

        {/* Table of Contents */}
        <div className="p-4 bg-blue-50">
          <h2 className="text-2xl font-bold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li className="">
              <a className="text-orange-400 underline" href="#lighthouse-labs">
                Lighthouse Labs Pros and Cons
              </a>
            </li>
            <li>
              <a className="text-orange-400 underline" href="#alternatives">
                3 best alternatives to Lighthouse Labs
              </a>
            </li>
            {alternatives.map((it) => (
              <li key={it.title}>
                <a className="text-orange-400 underline" href={`#${it.id}`}>
                  {it.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="">
          The tech industry is bigger than ever, and its growth shows how much
          opportunity there is for people who want to learn to code.
        </p>
        <p>
          Because of the shift from in-person to remote work, companies from all
          over the world will hire you if you have the right skills. AI has made
          it easier than ever to learn to code, and there are dozens of tools
          available for people who want to accelerate their learning. There has
          never been a better time for learning to code and starting a career in
          tech.
        </p>
        <p>
          There are dozens of bootcamps and schools available for people who to
          learn coding and AI. One of the most popular options is Lighthouse
          Labs, a traditional coding bootcamp that teaches the basics of coding
          fundamentals in a 3-month intensive bootcamp.
        </p>
        <p>
          In this guide, we will discuss the pros and cons of Lighthouse Labs
          for coding students and aspiring software engineers, plus five
          Lighthouse Labs alternatives to help you start your learning journey.
        </p>

        <p className="italic">
          Note: All pricing is accurate at the time of writing, but this is
          subject to change over time.
        </p>
        <CompetitorSection {...lighthouseLabs} />
        <h2 className="text-3xl font-bold" id="alternatives">
          3 Best Alternatives to Lighthouse Labs
        </h2>
        {alternatives.map((it, index) => (
          <CompetitorSection key={it.title} {...it} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const alternatives: CompetitorSectionProps[] = [
    {
      id: "skillify",
      title: "Skillify",
      index: 1,
      image: "/images/logo-2.png",
      description:
        "Skillify is an all-in-one platform where students can learn digital skills and train to get high-paying and fulfulling jobs. With Skillify, you can build a portfolio of digital products under the supervision of senior software engineers from companies like Spotify, Meta and Duolingo. Learn to build websites, apps and games. Access expert coaching, online lessons, webinars, and community memberships, all from one dashboard.\n\nUnlike Lighthouse Labs, Skillify also offers on-demand coaching, pre-interview prep calls, recruiter matching programs, and salary negotiations, making it easy to get a new job and earn more money.\n\nYou can also use Skillify to learn more advanced skills like mobile app development, web3 and AI to make yourself even more desirable in the workforce, without the frustration of trying to learn alone. Former data analyst and Skillify graduate Raveen explains: “Skillify makes learning to code so fun. I feel like I could build a website or mobile app for any business idea in the future, and it would look great. There is something to be said for how supportive and motivating the instructors are. Skillify has the best instructors by far.",
      features: [
        "Small Group Coaching",
        "1:1 Coaching",
        "Online Courses",
        "Live Workshops",
        "Community of Learners and Instructors",
      ],
      benefits: [
        "All-in-one education and career platform",
        "Flexible scheduling",
        "Personalized curriculum to help you stand out reach your goals",
        "On-Demand Instructor support",
        "Engaging and Interactive Lessons",
      ],
      pricing: "$6000 for 3 months",
    },
    {
      id: "general-assembly",
      title: "General Assembly",
      index: 2,
      image:
        "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/2/original/CMYK-Red_Small_GeneralAssembly-Cog__1_.png",
      description:
        "General Assembly is a coding bootcamp that offers a 3-month intensive bootcamp. They are one of the most popular options for people who want to learn to basics code in a short amount of time. General Assembly offers full-time and part-time options, and they have a strong community of students and alumni. They also offer career services to try to help you find a job after you graduate.",
      features: [
        "3-month coding bootcamp",
        "Full-time and part-time options",
        "Learn HTML, CSS and JavaScript",
      ],
      benefits: ["Short and structured program"],
      downsides: [
        "Expensive",
        "Misleading job statistics",
        "Graduates are not job ready",
      ],
      pricing: "$14000 for 3 months",
    },
    {
      id: "brainstation",
      title: "Brainstation",
      index: 3,
      image:
        "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/62/original/blacksquare-logo.jpg",
      description:
        "Brainstation is a coding bootcamp that offers a 3-month intensive bootcamp. They are a popular options for people who want to learn to upskill themselves and transition into a new career. Brainstation offers full-time and part-time options, and they have a strong community of students and alumni.",
      features: [
        "3-month coding bootcamp",
        "Full-time and part-time options",
        "Offers a variety of courses in Coding, UX Design, Product Management, and Data Science",
      ],
      benefits: ["Short and structured program"],
      downsides: [
        "Expensive",
        "Graduates all end up with the same projects, so it's hard to stand out",
        "Misleading job statistics",
        "Graduates are not job ready",
      ],
      pricing: "$16500 for 3 months",
    },
  ];

  return { props: { alternatives } };
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
