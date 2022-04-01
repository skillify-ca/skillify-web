import Navbar from "../../../../../components/ui/Navbar";

const MultiDigitAddition = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 p-4 m-4 space-y-4 bg-white sm:p-8 sm:m-8">
        <h1 className="text-5xl font-bold">4, 5, and 6 Digit Addition</h1>
        <div className="grid grid-cols-1 space-y-4 bg-white">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lesson</p>
            <p>
              When it comes to the addition of 4, 5, and 6 digit numbers we can
              use the column addition method. To do this, you must first write
              your numbers in a column making sure you align the least
              significant digits (LSDs).
            </p>
            <p>
              For instance, let’s consider the values 1256 and 432. The LSD of
              1256 is 6 and that of 432 is 2.{" "}
            </p>
            <img
              src="/images/math1/addition/2/addition_1.png"
              className="lg:w-2/3"
            />

            <p>
              Once you have written your numbers in a column, you can proceed to
              add the digits starting from right to left i.e. from the least
              significant digit to the most significant digit.
            </p>
            <p>Let’s consider the example 1253 + 1642</p>
            <img
              src="/images/math1/addition/2/addition_2.png"
              className="lg:w-2/3"
            />

            <p>Let’s try another one! What is 1253 + 1667?</p>
            <img
              src="/images/math1/addition/2/addition_3.png"
              className="lg:w-2/3"
            />

            <p>
              This is where your knowledge of place values comes to play. In the
              above example, we are left with 10 ones. And we know that 10 ones
              makes one 10. Hence, you will be adding 1 to the 10s place.
            </p>
            <img
              src="/images/math1/addition/2/addition_4.png"
              className="lg:w-2/3"
            />
            <img
              src="/images/math1/addition/2/addition_5.png"
              className="lg:w-2/3"
            />

            <p>
              The same concept applies to 5 and 6 digit addition as well. Let’s
              try it out with some practical questions!
            </p>
            <img
              src="/images/math1/addition/2/addition_6.png"
              className="lg:w-2/3"
            />

            <p>
              Jake gained 65,271 new subscribers after his reaction video to a
              popular boy band went viral. How many subscribers does he have
              now?
            </p>
            <img
              src="/images/math1/addition/2/addition_7.png"
              className="lg:w-2/3"
            />

            <p>
              Explanation: In this answer the LSDs of the two numbers are not
              aligned. Therefore, it’s wrong. The correct answer is 167,629
              subscribers.
            </p>
            <img
              src="/images/math1/addition/2/addition_8.png"
              className="lg:w-2/3"
            />

            <p>
              Melissa had $3,900 in her bank account. She deposited another
              $1,500. How much money does Melissa have in her account now?
            </p>
            <div className="flex flex-col sm:flex-row">
              <img
                src="/images/math1/addition/2/addition_9.png"
                className="w-full sm:w-1/2"
              />
              <img
                src="/images/math1/addition/2/addition_10.png"
                className="w-full sm:w-1/2"
              />
            </div>
            <p>Who is right?</p>
            <p>
              Explanation: Melissa has added the digits starting from the left
              therefore is incorrect.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiDigitAddition;
