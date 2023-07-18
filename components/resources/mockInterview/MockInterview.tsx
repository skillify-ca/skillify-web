import React, { useRef, useState } from 'react';
import MainPage from './MainPage';
import Modes from './Modes';
import RecordedInterview from './RecordedInterview';

const numberOfStages = 3;

const FullScreenComponent = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const mediaStreamRef = useRef(null);  
  const chunksRef = useRef([]);

  const handleNext = () => {
    if (currentStage < numberOfStages - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handleBack = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      mediaStreamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
    } catch (error) {
      console.error('Error accessing video stream:', error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      mediaStreamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
      mediaStreamRef.current = null;
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  const handleDownload = () => {
    const blob = new Blob(chunksRef.current, { type: 'video/webm; codecs=vp9,opus' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recorded_video.webm';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const renderStage = () => {
    switch (currentStage) {
      case 0:
        return <MainPage onNext={handleNext} />;
      case 1:
        return <Modes onNext={handleNext} />;
      case 2:
        return (
          <RecordedInterview
            onStartRecording={handleStartRecording}
            onStopRecording={handleStopRecording}
            onDownload={handleDownload}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {currentStage !== 0 && (
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
