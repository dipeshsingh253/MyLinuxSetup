import React from "react";

const Error = () => {
  return (
    <>
      <div className="bg-white-500 w-full h-screen flex justify-center items-center m-auto">
        <div className="m-auto flex flex-col">
          <h1 className="text-8xl text-blue-400">404 : Page Not Found</h1>
          <button
            type="button"
            class="w-3/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Default
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
