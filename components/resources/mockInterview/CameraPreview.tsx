import { useEffect, useRef } from 'react';


const CameraPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="relative w-96 h-72 mb-4">
      <video ref={videoRef} className="absolute inset-0 w-full h-full" autoPlay muted />
    </div>
  );
};

export default CameraPreview;
