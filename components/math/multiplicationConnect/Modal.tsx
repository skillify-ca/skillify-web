import React from "react";

/* todo: Modal following WDS tutorial using React portals
    - might be able to use the same method to make an overlay -- will need diff styling, might be able to pass to modal as prop
        * i.e. "full-screen modal required for welcome message"
    - then make a modal using tailwindelements styling
    - clicking outside should close the modal
    - move isModalOpenState to Redux
*/
const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed z-50 w-1/2 p-12 -translate-x-1/2 -translate-y-1/2 h-1/2 top-1/2 left-1/2 bg-sky-800/90">
      {children}
      <div className="flex justify-center">
        <button
          type="button"
          className="text-xs ring-2 ring-amber-400 font-mono font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
