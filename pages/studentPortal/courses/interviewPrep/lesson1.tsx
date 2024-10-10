import Link from "next/link";
import React from "react";

export default Lesson1Page;
function Lesson1Page() {
  return (
    <div>
      <Lesson1Content />
    </div>
  );
}

const Lesson1Content = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <Link href="./">
              <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
                Back
              </button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold">
            Importance of Interview Preparation
          </h1>
          <div>
            <Link href="./lesson2">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 border-b"></div>
      <div className="prose">
        {/* Add the centered image element here */}
        {/* <div className="flex justify-center mt-6 mb-6">
          <img
            src="/images/interview-images/lesson1.png"
            alt="Lesson 1 Image"
            style={{ maxWidth: '50%', maxHeight: '50%' }}
          />
        </div> */}
        {/* End of centered image element */}
        <div className="max-w-3xl p-4 mx-auto mb-6 bg-white border border-gray-300 rounded-lg">
          <p className="mb-6">
            {`Preparing for job interviews is a crucial step in your career journey.
          Whether you're a recent graduate or an experienced professional,
          interview preparation can significantly impact your chances of
          success. Here are some reasons why interview preparation is essential:`}
          </p>

          {/* <div className="p-4 my-6 border border-black rounded section-box"> */}
          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">1. Confidence Boost</h2>

            <p className="mb-6">
              {`Thorough preparation boosts your confidence. When you know you've
            researched the company, practiced answering common interview
            questions, and highlighted your skills and experiences, you'll feel
            more at ease during the actual interview. Confidence can leave a
            positive impression on the interviewer and increase your chances of
            getting hired.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              2. Showcasing Your Skills
            </h2>
            <p className="mb-6">
              {`Interview preparation allows you to showcase your skills
            effectively. By understanding the job requirements and aligning your
            experiences with them, you can articulate your achievements and how
            you can add value to the company. This alignment demonstrates that
            you are the right fit for the role and can contribute to the
            organization's success.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              3. Handling Tough Questions
            </h2>
            <p className="mb-6">
              {`Interviews often include challenging questions. By preparing in
            advance, you can anticipate these questions and formulate thoughtful
            responses. This preparation prevents you from feeling caught off
            guard and ensures that you provide coherent and well-structured
            answers, showcasing your problem-solving skills and critical
            thinking abilities.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              4. Understanding the Company
            </h2>
            <p className="mb-6">
              {`Researching the company before an interview is essential. It helps
            you understand the company's values, culture, and goals. This
            knowledge allows you to tailor your responses to align with the
            company's vision and mission, demonstrating that you are genuinely
            interested in joining the organization and becoming an integral part
            of their team.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">5. Avoiding Mistakes</h2>
            <p className="mb-6">
              {`Proper preparation can help you avoid common interview mistakes.
            Being well-prepared ensures that you arrive on time, dress
            appropriately, and bring all necessary documents. It also helps you
            maintain a positive and professional demeanor throughout the
            interview process.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              6. Making a Lasting Impression
            </h2>
            <p className="mb-6">
              {`A well-prepared candidate makes a lasting impression on
            interviewers. It shows that you take the opportunity seriously and
            are committed to the role. Interviewers appreciate candidates who
            put in the effort to prepare, as it indicates a strong work ethic
            and dedication to personal and professional growth.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              7. Negotiating with Confidence
            </h2>
            <p className="mb-6">
              {`If you reach the negotiation stage, interview preparation is still
            vital. Knowing your value, market salary rates, and what you bring
            to the table empowers you to negotiate with confidence. Proper
            preparation enables you to advocate for yourself effectively and
            secure a compensation package that aligns with your skills and
            experience.`}
            </p>
          </div>

          <div className="my-4 section-divider"></div>
          <p>
            {`In conclusion, interview preparation is a critical aspect of the job
          search process. It helps you stand out from other candidates,
          demonstrate your abilities, and increase your chances of securing job
          offers. Invest time and effort in preparation, and you'll be
          well-positioned for success in your job interviews!`}
          </p>
        </div>
      </div>

      {/* Additional Notes for Next Steps */}
      <div className="my-4 border-b"></div>
      <div className="prose">
        <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Notes:</h2>
          <textarea className="w-full" />
        </div>
      </div>
    </div>
  );
};
