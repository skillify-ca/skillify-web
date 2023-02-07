import Link from "next/link";
import PostLayout from "../../components/coding/blog/PostLayout";
import { LessonComponentData } from "../../components/coding/studentPortal/LessonComponent";
import SEO from "../../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={"How to learn to code in Java?"}
        description={
          "A step by step model into tackling one of the most useful programming languages."
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-5xl font-bold">How to learn to code in Java?</h1>
        <h2 className="text-xl font-bold"> Introduction</h2>

        <p>
          Introduction Java is a popular language, which is used by around 6
          million people around the world. Learning it may seem daunting at
          first, but establishing a good foundation and following this guide
          will help you succeed.
        </p>

        <h2 className="text-xl font-bold">Learning the basics</h2>

        <p>
          While learning Java, you may see syntaxc that seems confusing or
          unfamiliar initially. Soe of the introductory concepts in Java, such
          as user input through the scanner and the concept of classes will make
          much more sense as you move further through your journey.
        </p>

        <p>
          Getting familiar with Java syntax is important, especially if you come
          form a different programming language. For beginners, try tp=o
          understand all the programming fundaementals, including loops,
          primitves vs non-primitves and conditional statements. You can then
          move onto classes aand objects, exception handling and inheritance,
          which are slightly more difficult concepts. Below, is a video with a
          suggested roadmap to master Java.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p15xzjzR9j0"
          title="YouTube video player"
          frameBorder={"0"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h2 className="text-xl font-bold">Practice</h2>
        <p>
          Practice makes perfect and alongwith making your own projects, I
          believe problem-solving is a great way to wrap your head around Java
          throughly. You can start by doing a couple simple exercises to
          reinforce the core programming fundaementals. Learning data structures
          and algorithms can also help you tackle harder problem solving
          questions. Below is a great video to learn data structures and
          algorithms in Java.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OWCao3Ul6n4"
          title="YouTube video player"
          frameBorder={"0"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h2 className="text-xl font-bold">Expanding your learning</h2>

        <p>
          Expanding your learning is a great way to create something interesting
          and new with the content you have learned. Some of the things you can
          do with Java include mobile applications, AI, games and many more.
        </p>

        <h2 className="text-xl font-bold">Extra Resources</h2>

        <p>
          Here are some extra resources, which may aid you in learning Java.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xk4_1vDrzzo"
          title="YouTube video player"
          frameBorder={"0"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <a
          className="underline text-charmander"
          href="https://codingbat.com/java"
        >
          Coding Bat Tutorial
        </a>
        <a className="underline text-charmander" href="https://dev.java/learn/">
          Dev Java Tutorial
        </a>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
