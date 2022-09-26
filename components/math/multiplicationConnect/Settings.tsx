import React from "react";

const Settings = () => {
  return (
    <section className="inline-flex items-stretch bg-white border rounded-md ring-2 ring-red-400/80 dark:bg-gray-900 dark:border-gray-800">
      <a className="inline-flex items-center pl-4 pr-1 mb-1 font-mono text-gray-600 hover:focus-within:visible dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-800 hover:text-gray-700 hover:bg-gray-50 rounded-l-md">
        <span className="pr-1 text-2xl">⚙️</span>
        <span className="mt-1 font-bold">Game Settings</span>
      </a>

      <div className="relative hover:visible focus:visible focus-within:visible">
        <button
          type="button"
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-gray-100 dark:text-gray-300 dark:border-gray-700 dark:hover:text-gray-200 dark:hover:bg-gray-800 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          className="absolute right-0 z-10 invisible w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg dark:bg-gray-900 dark:border-gray-800"
          role="menu"
        >
          <div className="p-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              role="menuitem"
            >
              View on Storefront
            </a>

            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              role="menuitem"
            >
              View Warehouse Info
            </a>

            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              role="menuitem"
            >
              Duplicate Product
            </a>

            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              role="menuitem"
            >
              Unpublish Product
            </a>

            <form method="POST" action="#">
              <button
                type="submit"
                className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-700 rounded-lg dark:text-red-500 dark:hover:bg-red-600/10 hover:bg-red-50"
                role="menuitem"
              >
                🔄 Restart Game
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
