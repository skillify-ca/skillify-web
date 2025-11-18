import React from "react";
import ExpandableContainer from "../ui/ExpandableContainer";

export default function FAQ() {
  const faqItems = [
    {
      question: "What if I've never coded before? Do I need any experience?",
      answer:
        "Many of our students have never coded before Skillify. Our curriculum will help anyone learn the fundamentals of coding from scratch. Our expert coaches will provide a unique process that will accelerate your career growth and help you start a career in tech.",
    },
    {
      question:
        "What if I already have some coding experience or background in tech?",
      answer:
        "Whether you're at a beginner or advanced level, our program will work for you. It is customized to fit your learning needs so if you already have some experience with coding, you can skip the basics.",
    },
    {
      question: "What if I didn't graduate from university or college?",
      answer:
        "We reserve a select number of seats for students who didn't go to university or college. If you're passionate about learning to code, book a call with us and we'll see if you're a good fit. If we decide that you're not a good fit at this moment, we will send you free resources and training to help you level up your skills until you're ready to work with us.",
    },
    {
      question: "What does Skillify offer?",
      answer:
        " - 1:1 and small group coaching\n - An internship experience where you build products on a team under the leadership of senior software engineers\n - Full access to Skillify online learning platform\n - Job hunting support and career guidance",
    },
    {
      question: "What projects will I build inside the program?",
      answer:
        "The journey to becoming employable will require you to be able to build a variety of different digital products. We will help you build the following projects:\n\nProject 1: An online marketing website\nProject 2: An e-commerce store\nProject 3: A full-stack web application \nProject 4: A multiplayer game\nProject 5: A mobile application\nProject 6: An AI-powered digital product\n\n PS. You will also have the opportunity to bring your own ideas and build them out under the leadership of ex-Spotify engineers!",
    },
    {
      question: "What salary can I get after this program?",
      answer:
        "Our graduates have earned between $80K to $160K for their first job after the program.",
    },
    {
      question: "Will you help me find a job?",
      answer:
        "Our coaches have a deep network of technical professionals in companies all over the world. We leverage our network to introduce you to potential employers. We provide resume critique and mock-interview training to help you ace your interviews. As long as you don't give up on the program, we won't give up on you until you get a job that you're happy with. If you have questions or concerns, schedule a call with us and we'll be happy to answer them.",
    },
    {
      question: "Can I complete the course on my phone?",
      answer:
        "Some course videos and coaching sessions can be done on your phone, but in order to build a website or mobile application, you will need to use a laptop/computer.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-8 bg-murkrow theme-default">
      <h2 className="p-4 text-3xl font-bold text-charmander">Skillify FAQs</h2>
      <div className="flex flex-col items-start w-full p-8 m-4 max-w-7xl bg-slate-200 rounded-xl">
        {faqItems.map((item) => (
          <div
            key={item.question}
            className="flex items-center w-full mb-4 bg-slate-100"
          >
            <ExpandableContainer open={false} title={item.question}>
              <div className="px-4 pb-4">
                <p
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                  className="whitespace-pre-wrap"
                ></p>
              </div>
            </ExpandableContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
