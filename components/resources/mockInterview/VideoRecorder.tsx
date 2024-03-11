import { useEffect, useRef } from 'react';

const VideoRecorder = ({
  stream,
  onStartRecording,
  onStopRecording,
  onNewRecording,
  recording,
  showStopButton,
  showDownloadButton
}) => {
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const mediaStreamRef = useRef(null);  

  useEffect(() => {
    if (stream) {
      mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });
      mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
    }

    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [stream]);

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  const handleStartRecording = () => {
    onStartRecording();
    try {
      //const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      // videoRef.current.srcObject = stream;
      mediaStreamRef.current = stream;
      chunksRef.current = [];
      mediaRecorderRef.current.start();
      // mediaRecorderRef.current = new MediaRecorder(stream);
      // mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
    } catch (error) {
      console.error('Error accessing video stream:', error);
    }
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    mediaStreamRef.current.getTracks().forEach((track) => {
      track.stop();
    });
    //videoRef.current.srcObject = null;
    //mediaStreamRef.current = null;
    onStopRecording();
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

  return (
    <div className="flex space-x-4">
      {!recording && !showStopButton && (
        <button
          style={{ background: 'red', color: 'white', padding: '4px 8px', borderRadius: '4px' }}
          onClick={handleStartRecording}
        >
          Start Recording
        </button>
      )}
      {recording && showStopButton && (
        <button
          style={{ background: 'lime', color: 'white', padding: '4px 8px', borderRadius: '4px' }}
          onClick={handleStopRecording}
        >
          Stop Recording
        </button>
      )}
       <div className="flex space-x-4">
        {showDownloadButton && (
          <button
            style={{ background: 'blue', color: 'white', borderRadius: '0.5rem', padding: '1rem' }}
            onClick={handleDownload}
          >
            Download
          </button>
        )}
        {!recording && showDownloadButton && (
          <button
            style={{ background: 'green', color: 'white', borderRadius: '0.5rem', padding: '1rem' }}
            onClick={onNewRecording}
          >
            New Recording
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
