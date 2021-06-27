import { ReactNode } from "react";

const Polypad = () => {
  return (
    <div className={`flex flex-col justify-center space-y-16 items-center "}`}>
      <div className="bg-blue-200 p-8">
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
  );
};
export default Polypad;
