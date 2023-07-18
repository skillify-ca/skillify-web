import { useEffect, useRef } from 'react';

const VideoRecorder = ({
  stream,
  onStartRecording,
  onStopRecording,
  onDownload,
  onNewRecording,
  recording,
  showStopButton,
  showDownloadButton
}) => {
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

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
    if (!recording && mediaRecorderRef.current && mediaRecorderRef.current.state !== 'recording') {
      chunksRef.current = [];
      mediaRecorderRef.current.start();
      onStartRecording();
    }
  };

  const handleStopRecording = () => {
    if (recording && mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      onStopRecording(chunksRef.current);
    }
  };

  const handleDownload = () => {
    if (chunksRef.current.length > 0) {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'recorded_video.webm';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="flex space-x-4">
      {!recording && !showStopButton && (
        <button
          style={{ background: 'red', color: 'white', padding: '4px 8px', borderRadius: '4px' }}
          onClick={onStartRecording}
        >
          Start Recording
        </button>
      )}
      {recording && showStopButton && (
        <button
          style={{ background: 'lime', color: 'white', padding: '4px 8px', borderRadius: '4px' }}
          onClick={onStopRecording}
        >
          Stop Recording
        </button>
      )}
       <div className="flex space-x-4">
        {showDownloadButton && (
          <button
            style={{ background: 'blue', color: 'white', borderRadius: '0.5rem', padding: '1rem' }}
            onClick={onDownload}
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
