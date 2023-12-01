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
      question: "How long does the program take to complete?",
      answer:
        "We offer a customized and flexible program for every student, so there is no strict timeframe or deadline like typical coding bootcamps or school. Typically, our students put in anywhere from 10 to 40 hours a week and complete the program within 5-10 months. To provide a rough time frame: If you already have some coding experience and you're a fast learner, you can complete the program in 5-7 months. If you have no experience, are a slower learner, or have other comittments, you can complete the program in 8-10 months. We will work with you to create a customized plan that fits your learning needs and career goals.",
    },
    {
      question: "What does the program include?",
      answer:
        " - 1:1 and small group coaching\n - An internship experience where you build products on a team under the leadership of senior software engineers\n - Full access to Skillify online learning platform\n - Job hunting support and career guidance",
    },
    {
      question: "What projects will I build inside the program?",
      answer:
        "Project 1: An online marketing website\nProject 2: An e-commerce store\nProject 3: A full-stack web application \nProject 4: A multiplayer game\nProject 5: A mobile application\nProject 6: An AI-powered digital product\n\n PS. You also have the opportunity to bring your own ideas and build them out under the leadership of ex-Spotify engineers!",
    },
    {
      question: "How do I enroll/apply?",
      answer:
        "To apply for Skillify Coding Academy, click the 'Apply Now' button to book a call with one of our coaches, where you’ll introduce yourself and give us an overview of your background (including your education and coding experience) to determine if you’d be a good fit for our program. Don’t worry - it’s not meant to be intimidating or stressful. During this interview, we want to meet you, get to know you better, and answer all your questions! We want to understand your personal experiences and interests so that we can customize the best plan for you.",
    },
    {
      question: "How long will it take to get a job?",
      answer:
        "Our graduates are employed as software developers within 6 months of completing the program. The job market for software engineers has gotten harder so you might need to spend a bit longer honing your craft and elevating your digital skills to a more intermediate level. The path to software engineering does require hard work, but for those of you who are willing to put in the effort, we will be there to support you every step of the way and make sure that you don't waste your time.",
    },
    {
      question: "What kind of job can I get after this program?",
      answer:
        "You can get a job as a software developer. There are many different types of software developer positions that you could apply to, including but not limited to:\n - Web Developer\n - Backend Developer\n - Mobile Developer\n - Game Developer\n - Fullstack Developer\n - Dev Ops Engineer\n - Sales Engineer\n\nCheck out our job personality quiz to see which role is best for you!",
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
      question: "Why should I pick your program over another coding bootcamp?",
      answer:
        "- Our teachers are the best. We've worked at top companies in Silicon Valley, Toronto, and New York: Instagram, Spotify, Duolingo, Shopify, PagerDuty, Roblox, NVIDIA, and more! We connect our top students with hiring managers from these companies.\n- We customize our program based on your personal needs.\n- You are not just a number to us. We match you with expert instructors who care about you and want to see you succeed.\n- You can actually talk to us. Most other schools make it hard to connect with your instructor until you pay them a huge amount of money. Get to know who you'll be learning from before making such a big purchase.",
    },
    {
      question: "How much does the program cost?",
      answer:
        'Check out our prices and prices for our competitors at <a class="underline text-brandPrimary" href="/blog/best-toronto-coding-bootcamps-2024">this blog post.</a> Book a call with one of our coaches to learn more about costs, payment plans, and scholarships.',
    },
    {
      question: "Can I use my RESP or OSAP to pay for this?",
      answer:
        "There are no OSAP or RESP options at the moment, but we are working to change this.",
    },
    {
      question: "Are there any financing options? Can my company pay for this?",
      answer:
        "Some students are able to get reimbursed for their Skillify training costs by their employer through a professional development benefit.",
    },
    {
      question: "Do you provide any scholarships or financial aid?",
      answer:
        "We have limited scholarships available for people from underrepresented communities, such as POC and women in tech.",
    },
    {
      question: "Can I complete the course on my phone?",
      answer:
        "Some course videos can be viewed on your phone, but in order to build a website or mobile application, you will need to use a laptop/computer.",
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
