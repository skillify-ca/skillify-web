const Feedback = () => {
    return (
      <div className="flex flex-col items-center h-screen gap-8 bg-gray-200 px-8">
        <h1 className="text-4xl mt-16 text-indigo-600">Thanks for recording a mock interview!</h1> 
        <p className="text-xl mt-16 mx-72 text-purple-500"> 
          The recording process has ended. Expect 
          feedback within a day by our reviewers. Remember, practice makes perfect.
        </p>
      </div>
    );
  };

export default Feedback;