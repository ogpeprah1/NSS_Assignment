import React from "react";
import { Link } from "react-router-dom";

function ButtonComponent({ text, isDisabled }) {
  return (
    <div>
      <button
        type="submit"
        disabled={isDisabled}
        className={`text-white rounded-full w-full mt-4 p-3   duration-600 ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-950 hover:bg-blue-900"
        } `}
      >
        {text}
      </button>

      <p className="text-gray-400 text-left ml-4 mt-1">
        {isDisabled ? "Enter email and password to login.." : ""}
      </p>
    </div>
  );
}

export default ButtonComponent;
