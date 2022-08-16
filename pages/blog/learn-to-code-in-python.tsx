import Link from "next/link";
import PostLayout from "../../components/coding/blog/PostLayout";
import { LessonComponentData } from "../../components/coding/studentPortal/LessonComponent";
import SEO from "../../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={"How to learn to code in Python?"}
        description={
          "Insight into learning one of the most popular programming languages"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-5xl font-bold">How to learn to code in Python?</h1>
        <h2 className="text-xl font-bold"> Learning the Basics</h2>

        <p>
          A good foundation is crucial in programming as many of the concepts
          from python are transferable into other languages. You should start
          your journey by learning the basics. Basics : Variables , Control
          Structures, Loops , Functions, Operators, basic data structures …
          Medium : Lamba, Comprehensions Advanced Data Structures and
          Algorithms, Object Oriented Programming… The video below gives a good
          overview on a suggested roadmap to learn Python
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
          The best way to reinforce your learning is to practice. While learning
          python, you can do problem solving questions, or you can create your
          own project. Using the skills you’ve learned helps reinforce what
          you’ve learned, which is essential while learning Python. Below are
          some resources for practicing Python.
        </p>
        <a className="underline text-charmander" href="https://dmoj.ca/">
          https://dmoj.ca/
        </a>
        <a
          className="underline text-charmander"
          href="https://www.dataquest.io/blog/python-projects-for-beginners/"
        >
          https://www.dataquest.io/blog/python-projects-for-beginners/
        </a>
        <a
          className="underline text-charmander"
          href="https://codingbat.com/python"
        >
          https://codingbat.com/python
        </a>

        <h2 className="text-xl font-bold">Directing your Learning</h2>
        <p>
          After you have a good grasp on Python, try to apply the skills you’ve
          learned into different spaces, such as Machine Learning , Backend Web
          Development , AI, data analysis etc. Try to pick something you’re
          interested in !
        </p>

        <h2 className="text-xl font-bold">Resources</h2>

        <p>Here are some useful resources for learning Python Content.</p>

        <a
          className="underline text-charmander"
          href="https://docs.python.org/3//<"
        >
          https://docs.python.org/3//
        </a>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XKHEtdqhLK8"
          title="YouTube video player"
          frameBorder={"0"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <a
          className="underline text-charmander"
          href="https://www.w3schools.com/python/"
        >
          https://www.w3schools.com/python/
        </a>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
