import React from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

export default function Lesson4Page() {
  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="./assign1">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">How should I introduce myself?</h1>
          <Link href="./try1">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Next
            </button>
          </Link>
        </div>
        <div className="border-b my-4"></div>
        <div className="lesson-content">
          <p>Welcome, aspiring developers!</p>
          <p>
            As current university students seeking internships, one of the
            crucial steps in the application process is introducing yourself
            effectively. A strong self-introduction can make a lasting
            impression on potential employers and increase your chances of
            landing your dream internship.
          </p>
          <p>
            In this lesson, we will explore essential tips and techniques to
            craft an impressive self-introduction that showcases your skills,
            passion, and potential to prospective employers. Let&apos;s dive in!
          </p>

          <div className="border border-black rounded p-4 my-4">
            <h2 className="text-xl font-bold mb-2">
              1. Keep it concise and focused
            </h2>
            <p>
              When introducing yourself to potential employers, it&apos;s
              essential to keep your introduction brief and to the point. Aim
              for a 30 to 60-second elevator pitch that highlights your key
              attributes and accomplishments. Avoid rambling or going into
              excessive detail, as it may lose the listener&apos;s attention.
            </p>
          </div>

          <div className="border border-black rounded p-4 my-4">
            <h2 className="text-xl font-bold mb-2">
              2. Start with a compelling hook
            </h2>
            <p>
              Begin your self-introduction with an attention-grabbing hook that
              summarizes your unique selling proposition. Consider starting with
              an intriguing statement, a relevant achievement, or your passion
              for coding. This will pique the listener&apos;s interest and
              encourage them to pay attention to the rest of your introduction.
            </p>
          </div>

          <div className="border border-black rounded p-4 my-4">
            <h2 className="text-xl font-bold mb-2">
              3. Highlight your relevant skills and projects
            </h2>
            <p>
              Since you are targeting internship opportunities, focus on the
              skills and projects most relevant to the positions you&apos;re
              applying for. Mention specific programming languages, frameworks,
              or tools you are proficient in. Highlight any personal coding
              projects, open-source contributions, or coursework that showcases
              your abilities.
            </p>
          </div>

          <div className="border border-black rounded p-4 my-4">
            <h2 className="text-xl font-bold mb-2">
              4. Emphasize your eagerness to learn and grow
            </h2>
            <p>
              Internships are not only about showcasing your current skills but
              also about your potential to learn and develop further. Express
              your eagerness to learn from experienced professionals, your
              willingness to take on challenges, and your desire to contribute
              to meaningful projects.
            </p>
          </div>

          <div className="border border-black rounded p-4 my-4">
            <h2 className="text-xl font-bold mb-2">
              5. Personalize your introduction
            </h2>
            <p>
              While it&apos;s essential to be professional, don&apos;t forget to
              add a touch of personality to your self-introduction. Share a
              brief anecdote related to coding or technology that reflects your
              passion or motivation. This personal touch can make you more
              memorable to potential employers.
            </p>
          </div>

          <div className="border border-black rounded p-4 my-4">
            <h2 className="text-xl font-bold mb-2">
              6. Practice makes perfect
            </h2>
            <p>
              Before attending any networking events or interviews, practice
              your self-introduction in front of a mirror, with friends, or even
              record yourself. Focus on your tone, clarity, and confidence. The
              more you practice, the more natural and composed you will sound
              when introducing yourself to potential employers.
            </p>
          </div>

          <div className="border border-black rounded p-4 my-4">
            <h2 className="text-xl font-bold mb-2">
              7. Tailor your introduction for each opportunity
            </h2>
            <p>
              Every company and internship position is unique, so make sure to
              customize your self-introduction for each application. Research
              the company&apos;s values, projects, and goals. Incorporate this
              knowledge into your introduction to demonstrate your genuine
              interest in the organization.
            </p>
          </div>

          <div className="border-b my-4"></div>
          <p>Conclusion:</p>
          <p>
            Introducing yourself effectively is a crucial step in the internship
            application process. By following these tips, you&apos;ll be better
            equipped to make a strong impression on potential employers and
            increase your chances of landing the internship you desire. Remember
            to be confident, concise, and authentic while highlighting your
            skills and passion for coding. Best of luck with your internship
            search! Keep honing your coding skills, and success will be right
            around the corner. Happy coding!
          </p>
        </div>
      </div>
    </div>
  );
}

Lesson4Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
