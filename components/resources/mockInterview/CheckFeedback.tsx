import React, { useState } from 'react';

export default function CheckFeedback() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-200">
      <div>
        <h1>Here is your feedback</h1>
      </div>
      <div className="mt-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PLaJq5Ec0rI"
          title="Embedded Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
