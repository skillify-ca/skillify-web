const Info = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center h-screen gap-8 bg-gray-200 px-8">
      <h1 className="text-2xl mt-16">Recording Process </h1>
      <p>
        Before you begin recording, we provide a camera preview so you can see 
        how you will appear on the video. Make sure to position yourself 
        comfortably within the frame, and don't forget to allow access to
        the camera and the microphone.
      </p>
      <p>
        <strong>Start Recording:</strong> When you're ready to begin, simply click the 
        "Start Recording" button. The button will then change to a "Stop 
        Recording" button, indicating that the interview is underway.
      </p>
      <p>
        <strong>Stop Recording:</strong> Once you've finished answering the question, click the 
        "Stop Recording" button. You will immediately see a "Download" button 
        that will allow you to save your recording for later review or to share 
        it with potential employers.
      </p>
      <p>
        <strong>Multiple Takes:</strong> We understand that you might want to give your best 
        performance. If you're not entirely happy with your first take, don't 
        worry! You can click "New Recording" to redo the response until you're 
        satisfied.
      </p>
      <button
          className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg"
          onClick={onNext}
        >
          Next
      </button>
    </div>
  );
};

export default Info;
