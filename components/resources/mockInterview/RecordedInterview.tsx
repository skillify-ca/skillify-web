import { useEffect, useRef, useState } from 'react';
import CameraPreview from './CameraPreview';
import VideoRecorder from './VideoRecorder';

const RecordedInterview = ({ onStartRecording, onStopRecording, onDownload }) => {
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [showStopButton, setShowStopButton] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [showRecordingEnded, setShowRecordingEnded] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(true); 
  const videoRef = useRef(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        if (cameraEnabled) {
          const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          setStream(mediaStream);
          videoRef.current.srcObject = mediaStream;
        } else {
          if (stream) {
            stream.getTracks().forEach((track) => {
              track.stop();
            });
            setStream(null);
            videoRef.current.srcObject = null;
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

  const toggleCamera = () => {
    setCameraEnabled(prevCameraEnabled => !prevCameraEnabled);
  };

  const handleStartRecording = () => {
    setRecording(true);
    setShowStopButton(true);
    setShowRecordingEnded(false);
    setCameraEnabled(true);
    onStartRecording();
  };

  const handleStopRecording = () => {
    setRecording(false);
    setShowDownloadButton(true);
    setShowRecordingEnded(true);
    setCameraEnabled(false);
    onStopRecording();
  };
  
  const handleDownload = () => {
    onDownload();
    setShowDownloadButton(false);
    setShowStopButton(false);
  };

  const handleNewRecording = () => {
    setRecording(false);
    setShowStopButton(false);
    setShowDownloadButton(false);
    setShowRecordingEnded(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col items-center">
        <div className="absolute top-20 left-8 m-4">
          <button onClick={toggleCamera} className="bg-blue-500 text-white px-4 py-2 rounded">
            {cameraEnabled ? 'Turn Off Camera' : 'Turn On Camera'}
          </button>
        </div>
        {!showRecordingEnded ? (
          <CameraPreview stream={stream} cameraEnabled={cameraEnabled} />
        ) : (
          <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Recording Ended</h1>
        )}
        <VideoRecorder
          stream={stream}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
          onDownload={handleDownload}
          onNewRecording={handleNewRecording}
          recording={recording}
          showStopButton={showStopButton}
          showDownloadButton={showDownloadButton}
        />
      </div>
    </div>
  );
};

export default RecordedInterview;
