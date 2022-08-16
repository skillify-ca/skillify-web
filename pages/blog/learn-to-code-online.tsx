import Link from "next/link";
import PostLayout from "../../components/coding/blog/PostLayout";
import { LessonComponentData } from "../../components/coding/studentPortal/LessonComponent";
import SEO from "../../components/SEO";

export default function Page() { 
  return (
    <div>
      <SEO
        title={"How to learn to code in online?"}
        description={
          "Insight into learning one of the most popular programming languages"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-5xl font-bold">How to learn to code in Online?</h1>
        <h2 className="text-xl font-bold"> Introduction</h2>

        <p>
          Coding is one of the most popular things in the world right now. You
          have heard about it online or through your friends. It is the backbone
          of present technology and will continue to play a crucial role in the
          future. The device you use, the website you visited or the app you
          downloaded all involve coding, which shows how prevalent it is in
          today’s society. That brings you here, on a quest to learn to code and
          make an impact on the world. In today's world, learning online is your
          best and most cost effective method of learning to code.
        </p>
        
        <h2 className="text-xl font-bold">Purpose</h2>

        <p>
        The coding/programming space is enormous, with many different languages and applications with these languages. It may seem overwhelming at first, but a great way to overcome this to think about why you want to learn coding. For example, you may be interested in gaming and want to create games, or you may want to start a business and create a website for it. Whatever it may be, make sure you have a vision before you go on this journey.

        </p>
        

        <h2 className="text-xl font-bold">Which Language should you learn ?</h2>
        <p>
        Once you have an idea of what you want to do, start by finding out which language is used for it. Below is a website which displays the different programming.

        </p>
        <a href="https://raygun.com/blog/programming-languages/">https://raygun.com/blog/programming-languages/</a>

        <h2 className="text-xl font-bold">Learning Online</h2>

        <p> Learning online may be daunting and difficult at first, but there are many resources available to you. The best way to start is to learn the core programming fundamentals(loops, variables, conditionals). Then move onto more advanced concepts. Below are some useful resources.
</p>
<a href="https://www.youtube.com/c/BroCodez">https://www.youtube.com/c/BroCodez</a>

<a href="https://www.freecodecamp.org/">https://www.freecodecamp.org/</a>

<a href="https://www.edx.org/">https://www.edx.org/</a>



        
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
