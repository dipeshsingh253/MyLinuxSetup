import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
      <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div class="max-w-md mx-auto space-y-6">
          <div class="flex flex-col">
            <h1 class="mb-3 text-3xl font-extrabold text-center">Buttons</h1>

            <div class="text-sm text-gray-300 -mb-2">button large</div>
            <button class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg">
              Large
            </button>

        

            <div class="text-sm text-gray-300 -mb-2">link large</div>
            <a
              href="#"
              class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg inline-flex items-center justify-center"
            >
              Large
            </a>

            <div class="text-sm text-gray-300 -mb-2">link regular</div>
            <a
              href="#"
              class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 inline-flex items-center justify-center"
            >
              Regular
            </a>

            <div class="text-sm text-gray-300 -mb-2">link small</div>
            <a
              href="#"
              class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 h-8 px-4 text-sm inline-flex items-center justify-center"
            >
              Small
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
