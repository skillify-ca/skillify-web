import React from "react";
import { useEffect } from "react";

const PolypadPage = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
        Hello Polypad
        <div className="bg-white p-8 w-92 h-92">
          <div
            dangerouslySetInnerHTML={{
              __html: `<script src="https://static.mathigon.org/api/polypad-v2.0.js"></script>
<div id="polypad" style="width: 800px; height: 500px;"></div>
<script>Polypad.create(document.querySelector('#polypad'), {apiKey: 'test'})</script>
`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PolypadPage;
