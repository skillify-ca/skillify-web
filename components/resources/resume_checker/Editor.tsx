import React, { useState } from 'react';

const Editor = () => {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState([]);

  // Function to simulate backend feedback generation
  const generateFeedback = (inputText) => {
    // You would send 'inputText' to your backend here and get the feedback as a response.
    // For this example, let's just generate some mock feedback.
    const mockFeedback = [
      { startIndex: 10, endIndex: 20, message: 'Possible spelling mistake' },
      { startIndex: 25, endIndex: 35, message: 'Grammar issue: consider rephrasing' },
    ];
    setFeedback(mockFeedback);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setText(value);
    generateFeedback(value);
  };

  return (

    <div className="flex justify-center items-center">
      <div className="w-full my-10 bg-white rounded-lg">
        {/*Input Text */}
        <div>
        <label htmlFor="inputText" className="text-lg font-semibold text-gray-400">
            Enter Your Text
        </label>
        <textarea
            id="inputText"
            className="w-full h-48 mt-2 p-2 border border-gray-300 rounded"
            value={text}
            onChange={handleInputChange}
            placeholder="Type your text here..."
        />
        </div>
      </div>
    </div>
  );
};

export default Editor;
