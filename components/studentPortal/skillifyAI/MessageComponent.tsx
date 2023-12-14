import React from "react";

const MessageComponent = ({ name, message, image }) => {
  return (
    <div className="px-8 mb-4 border-2 rounded bg-backgroundSecondary">
      <div>
        <div className="px-2 mt-12 flex space-x-8 border-2 rounded bg-backgroundSecondary">
          <img
            src={image}
            className=" rounded-full h-12 w-12"
            alt="User Avatar"
          />
          <div>
            <p className="font-bold">{name}</p>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
