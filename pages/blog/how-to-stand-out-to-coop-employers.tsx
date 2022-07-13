import Link from "next/link";
import PostLayout from "../../components/coding/blog/PostLayout";
import { LessonComponentData } from "../../components/coding/studentPortal/LessonComponent";
import SEO from "../../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={"How do you stand out to coop employers?"}
        description={
          "We share an employers perspective on what they're looking for when hiring first or second year students"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-5xl font-bold">
          How do you stand out to coop employers?
        </h1>
        <p>
          Are you preparing for a co-op term at the University of Waterloo or
          another co-op program?
        </p>
        <h2 className="text-xl font-bold">Problem</h2>

        <p>
          The transition from high school to university is a steep curve that
          leaves many students unprepared. In your first two years, you're
          taking many similar classes to your classmates so how is a co-op
          employer supposed to pick your resume out from a bunch?
        </p>
        <p>
          Your first two years at University will have you taking courses like
          physics, chemistry or discreet math. None of these are super relevant
          to employers, so the only way to stand out among your peers is to have
          the highest grades to prove that you're bright and can learn new
          things on the job.
        </p>
        <h2 className="text-xl font-bold">Solution</h2>

        <p>
          My recommendation is to create side projects that can prove you
          already know how to code. Start building a portfolio website using
          ReactJS.
        </p>
        <p>
          Most employers want to hire fourth-year students, it's really hard to
          stand out as a first or second year.
        </p>
        <h2 className="text-xl font-bold">My experience</h2>
        <p>
          When I was looking to hire Waterloo coops, I looked at the applicants'
          Github profiles that they provided on their resumes. I shortlisted a
          few people who had consistent Github contribution activity.
        </p>
        <img
          src={
            "/images/blog/how-to-stand-out-to-coop-employers/github-contribution.png"
          }
        />
        <p>
          After I interviewed all the applicants, I went back to their Github
          profiles and started looking at their commit history on their side
          projects.
        </p>
        <p>
          Some applicants were making small commits frequently with descriptive
          commit names, versus others who just committed all their code at once
          with a lacklustre title.
        </p>
        <img
          src={"/images/blog/how-to-stand-out-to-coop-employers/commit.png"}
        />
        <p>
          Think about side project code as a form of communication with your
          future employers. When you're writing it, write it in a way that
          others can easily read it and understand what's going on.
        </p>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
