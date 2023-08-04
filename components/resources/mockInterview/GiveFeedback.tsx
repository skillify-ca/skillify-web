import React, { useState } from 'react';

export default function GiveFeedback() {
  const [videoUrl, setVideoUrl] = useState('');
  const [stage, setStage] = useState(1);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    const videoObjectUrl = URL.createObjectURL(file);
    setVideoUrl(videoObjectUrl);
  };

  const handleClearVideo = () => {
    setVideoUrl('');
  };

  const handleNextStage = () => {
    setStage(2); // Switch to stage 2
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-200">
      {stage === 1 ? ( // Render Stage 1 content
        <div className="flex items-center">
          {/* Red shape fixed to the left */}
          <iframe
            width="360"
            height="315"
            src="https://www.youtube.com/embed/NWWaOWRRR38"
            title="YouTube Video"
            className="fixed left-8 top-1/2 transform -translate-y-1/3"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          {/* <div
            className="fixed left-8 top-1/2 transform -translate-y-1/3 w-96 h-80 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
          >
            Video
          </div> */}

          {videoUrl ? (
            <div className="flex flex-col items-center ml-4 h-80">
              <video controls width="400" height="100%" className="mb-4">
                <source src={videoUrl} type="video/mp4" />
                {/* Add additional <source> elements for other video formats */}
                Your browser does not support the video tag.
              </video>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleClearVideo}
              >
                Clear Video
              </button>
            </div>
          ) : (
            <div>
              <label
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                htmlFor="video-upload"
              >
                Upload Video
              </label>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="sr-only"
              />
            </div>
          )}

          <button
            className="fixed right-28 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleNextStage}
          >
            Submit Feedback
          </button>
        </div>
      ) : (
        <div>
          <h1>Thank you for providing your feedback to the student!</h1>
        </div>
      )}
    </div>
  );
}
