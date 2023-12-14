import React from "react";

const MessageComponent = () => {
  return (
    <div className="p-8 mb-4 border-2 rounded bg-backgroundSecondary">
      <div>
        <div className="p-2 mt-12 flex space-x-8 border-2 rounded bg-backgroundSecondary">
          <img src="/images/logo.png" className="w-12 h-8  mt-4 " />
          <div>
            <p className="font-bold">Name</p>

            <p>
              Message Message Message Message Message Message Message Message
              Message Message Message Message Message Message Message Message{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
