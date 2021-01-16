import React, { useState } from "react";

export default function PlayerList(props) {
  return (
    <div className="container px-16 py-16">
      <div>
        <div>
          <div>
            Vithushan
            <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div id="bar" className="h-full bg-green-500 relative w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

/**
 * Level  Name

Current Question / Total Questions
Current Question Prompt
Current Question Input
Current Question error message

PlayerRace
 */
