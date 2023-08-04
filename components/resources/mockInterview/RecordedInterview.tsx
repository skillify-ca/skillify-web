import { useEffect, useState } from 'react';
import CameraPreview from './CameraPreview';
import VideoRecorder from './VideoRecorder';

const RecordedInterview = ( {onNext} ) => {
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [showStopButton, setShowStopButton] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [showRecordingEnded, setShowRecordingEnded] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(true); 

  useEffect(() => {
    const enableCamera = async () => {
      try {
        if (cameraEnabled) {
          const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          setStream(mediaStream);
        } else {
          if (stream) {
            stream.getTracks().forEach((track) => {
              track.stop();
            });
            //setStream(null);
          }
        }
      } catch (error) {
        console.error('Error accessing video stream:', error);
      }   
    };    

    enableCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [cameraEnabled]);

  const handleStartRecording = () => {
    setRecording(true);
    setShowStopButton(true);
    setShowRecordingEnded(false);
    setCameraEnabled(true);
  };

  const handleStopRecording = () => {
    setRecording(false);
    setShowDownloadButton(true);
    setShowRecordingEnded(true);
    setCameraEnabled(false);
  };

  const handleNewRecording = () => {
    setShowStopButton(false);
    setShowDownloadButton(false);
    setShowRecordingEnded(false);
    setCameraEnabled(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col items-center mt-8">
        <div
          className="bg-green-200 rounded-lg p-4 mb-4"
          style={{
            position: 'fixed',
            top: '100px', // Adjust the top position as needed
            left: '50%', // Center the box horizontally
            transform: 'translateX(-50%)', // Center the box horizontally
            zIndex: 999, // Ensure the box is on top of other elements
          }}
        >
          <h2 className="text-xl">Question: Tell me a bit about yourself?</h2>
        </div>

        {!showRecordingEnded ? (
          <CameraPreview stream={stream} />
        ) : (
          <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Recording Ended</h1>
        )}

        <VideoRecorder
          stream={stream}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
          onNewRecording={handleNewRecording}
          recording={recording}
          showStopButton={showStopButton}
          showDownloadButton={showDownloadButton}
        />

        {showRecordingEnded && (
          <button className="bg-orange-500 text-white rounded-md px-4 py-2 mt-4" onClick={onNext}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default RecordedInterview;
