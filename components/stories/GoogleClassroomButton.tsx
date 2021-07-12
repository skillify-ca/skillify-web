import { ReactNode } from "react";

const GoogleClassroomButton = () => {
  return (
    <div className={`flex flex-col justify-center space-y-16 items-center "}`}>
      <div className="bg-blue-200 p-8">
        <div
          dangerouslySetInnerHTML={{
            __html: `<script src="https://apis.google.com/js/platform.js" async defer></script>
            <g:sharetoclassroom url="http://mathchamp.ca/practice" body="Nice effort! You got 80%" size="32"></g:sharetoclassroom>
            `,
          }}
        />
      </div>
    </div>
  );
};
export default GoogleClassroomButton;
