// AlertComponent.js
import React from "react";

function AlertComponent({ show, onHide, onConfirm }) {
  return (
    <div className="bg-gray-600 opacity-80 w-screen h-screen absolute flex items-center justify-center">
      
      <div
        className={`bg-white  shadow-md py-10 px-[100px] rounded-lg ${
          show ? "block" : "hidden"
        }`}
      >
        <h2 className="text-lg font-bold">Confirm Logout</h2>
        <p className="text-sm mb-4">Are you sure you want to log out?</p>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-00 font-bold py-1 px-3 rounded"
            onClick={onHide}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertComponent;
