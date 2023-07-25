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
      <div className="flex flex-col items-center">
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
          <button
            style={{ background: 'blue', color: 'white', borderRadius: '0.5rem', padding: '1rem' }}
            onClick={onNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default RecordedInterview;
