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
      question: "How long does the program take to complete?",
      answer:
        "We offer a customized and flexible program for every student, so there is no strict timeframe or deadline like typical coding bootcamps or school. Typically, our students put in anywhere from 10 to 40 hours a week and complete the program within 3-6 months. To provide a rough time frame: if you have never coded before, our program will prepare you for a software developer job in 6 months.",
    },
    {
      question: "What does the program include?",
      answer:
        " - 1:1 and small group coaching\n - An internship experience where you build digital products on a team under the leadership of ex-Spotify engineers\n - Full access to Skillify online learning platform\n - Opportunities to build your own ideas! (e.g., a storefront)\n - Job hunting support and career guidance",
    },
    {
      question: "How do I enroll/apply?",
      answer:
        "To apply for Skillify Coding Academy, click the 'Apply Now' button to book a call with one of our coaches, where you’ll introduce yourself and give us an overview of your background (including your education and coding experience) to determine if you’d be a good fit for our program. Don’t worry - it’s not meant to be intimidating or stressful. During this interview, we want to meet you, get to know you better, and answer all your questions! We want to understand your personal experiences and interests so that we can customize the best plan for you.",
    },
    {
      question: "How long will it take to get a job?",
      answer:
        "Our graduates are employed as software developers within 6 months of completing the program.",
    },
    {
      question: "What kind of job can I get after this program?",
      answer:
        "You can get a job as a software developer. There are many different types of software developer positions that you could apply to, including but not limited to:\n - Web Developer\n - Backend Developer\n - Mobile Developer\n - Game Developer\n - Fullstack Developer",
    },
    {
      question: "What salary can I get after this program?",
      answer:
        "Our graduates have earned between $80K to $160K for their first job after the program.",
    },
    {
      question: "Will you help me find a job?",
      answer:
        "Our coaches have a deep network of technical professionals in the industry all over the world. We will leverage our network to introduce you to potential employers. We can provide resume critique and mock-interview training to help you ace your interviews.",
    },
    {
      question: "Why should I pick your program over another coding bootcamp?",
      answer:
        " - Our teachers are the best. We've worked at top companies in Silicon Valley, Toronto, and New York: Instagram, Spotify, Duolingo, Shopify, PagerDuty, Roblox, NVIDIA, and more!\n - Our program provides twice as much support compared to traditional bootcamps to ensure you're actually prepared to succeed on the job.\n - Our program is customized to your experience and interests. You're working with a team of coaches who all want to see you succeed. You will not find a personalized educational experience anywhere else.\n - Based on your interests, we place you on a track that you're most likely to succeed and get hired.",
    },
    {
      question: "How much does the program cost?",
      answer:
        "We offer varying programs of different lengths and intensities depending on your learning needs. We customize a plan for each student based on their learning and career goals, which will determine the cost. Book a call with one of our coaches to learn more about costs, payment plans, and scholarships.",
    },
    {
      question:
        "Are there any financing options or scholarships available? Can I use my RESP for this?",
      answer:
        "There are no financing or RESP options at the moment, but we have limited scholarships available for people from underrepresented communities, such as POC and women in tech.",
    },
    {
      question: "Can I complete the course on my phone?",
      answer:
        "Some course videos can be viewed on your phone, but in order to build a website or mobile application, you will need to use a laptop/computer.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-8 bg-murkrow">
      <h2 className="p-4 text-2xl font-bold text-charmander">Skillify FAQs</h2>
      <div className="flex flex-col items-start w-full p-8 m-4 max-w-7xl bg-slate-200 rounded-xl">
        {faqItems.map((item) => (
          <div key={item.question} className="flex items-center mb-4">
            <ExpandableContainer open={false} title={item.question}>
              <div className="px-4 pb-4">
                <p className="whitespace-pre-wrap">{item.answer}</p>
              </div>
            </ExpandableContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
