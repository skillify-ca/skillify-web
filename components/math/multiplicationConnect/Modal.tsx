import React from "react";

/* todo: Modal following WDS tutorial using React portals
    - refer to tailwindelements styling
    - move isModalOpenState to Redux
    - make modals responsive
    - add transitions
    - fix negative margin/padding-bottom -- might be able to calculate based on window size
*/
const Modal = ({ type, closeModal, children }) => {
  /*  - setup to return modal depending on modalType passed as prop
           * centered -- centered div w button
           * fullscreen -- black overlay, big font, and fades away changing stage after interval
      - MORE: alert in corner, game win modal
  */

  return (
    <>
      {type === "centered" ? (
        <>
          {/* // Overlay */}
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-50 -mb-[28rem] bg-black-500/30"
            onClick={closeModal}
          />
          {/* // Modal (dialog pop-up with prompts) */}
          <div className="fixed z-50 backdrop-blur-xl flex flex-col justify-center w-7/12 gap-24 p-14 -translate-x-1/2 -translate-y-1/2 shadow-[0_0px_50px_40px_rgba(0,0,0,0.3)] rounded-xl h-1/2 top-1/2 left-1/2 bg-sky-800/60">
            {children}
            <div className="flex justify-center">
              <button
                type="button"
                className="text-xs ring-2 ring-amber-400 font-mono font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </>
      ) : type === "fullscreen" ? (
        <>
          {/* Overlay */}
          <div
            className="cursor-pointer fixed top-0 bottom-0 left-0 right-0 z-10 -mb-[28rem] bg-black-500/20 backdrop-blur-md"
            onClick={closeModal}
          />
          {/* Modal */}
          {/* current gradient: from-[#ffcf00]/90 to-[#ffed5b]/100
           */}
          <div
            className="fixed z-50 flex flex-col justify-center gap-10 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#F20000]/80 via-[#ffcf00]/100 to-[#ffed5b]/100 text-5xl w-full text-center -translate-x-1/2 -translate-y-1/2 top-[40%] left-1/2"
            onClick={closeModal}
          >
            {children}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
