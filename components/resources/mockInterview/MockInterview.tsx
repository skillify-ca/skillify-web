import { useState } from 'react';
import GetFeedback from './EndingInfo';
import MainPage from './MainPage';
import Info from './PreRecordingInfo';
import RecordedInterview from './RecordedInterview';

const numberOfStages = 4;

const FullScreenComponent = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const handleNext = () => {
    if (currentStage < numberOfStages - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handleBack = () => {
    setCurrentStage(currentStage - 1);
  };

  const renderStage = () => {
    switch (currentStage) {
      case 0:
        return <MainPage onNext={handleNext} />;
      case 1:
        return <Info onNext={handleNext} />;
      case 2:
        return <RecordedInterview onNext={handleNext}/>;
      case 3:
        return (
          <GetFeedback />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {currentStage !== 0 && currentStage !== numberOfStages - 1 && (
        <button
          className="fixed bottom-4 left-4 px-4 py-2 bg-gray-500 text-white rounded"
          onClick={handleBack}
        >
          Back
        </button>
      )}
      {renderStage()}
    </div>
  );
};

export default FullScreenComponent;
