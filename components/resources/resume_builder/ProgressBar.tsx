import React from 'react';

const ProgressBar = ({ currentStage }) => {
  const stages = [
    'Name and contact info',
    'Education',
    'Experiences',
    'Others'
  ];

  const currentIndex = stages.indexOf(currentStage);
  const progressPercentage = ((currentIndex + 1) / stages.length) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200">
      <div
        className="h-2 bg-orange-500"
        style={{ width: `${progressPercentage}%` }}
      />
      <div className="flex justify-between text-sm text-gray-800 p-2">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`${
              currentIndex >= index ? 'text-black' : ''
            } flex-1 text-center`}
          >
            {stage}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
