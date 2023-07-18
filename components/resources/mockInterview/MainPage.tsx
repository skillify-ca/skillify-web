import React from 'react';

const MainPage = ({ onNext }) => {
  const boxStyle = {
    backgroundColor: 'cyan',
    borderRadius: '0.5rem',
    padding: '1rem',
    cursor: 'pointer',
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="grid grid-cols-3 gap-4">
        <div
          className="flex items-center justify-center"
          style={boxStyle}
          onClick={onNext}
        >
          Next
        </div>
        <div
          className="flex items-center justify-center"
          style={boxStyle}
          onClick={onNext}
        >
          Next
        </div>
        <div
          className="flex items-center justify-center"
          style={boxStyle}
          onClick={onNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default MainPage;
