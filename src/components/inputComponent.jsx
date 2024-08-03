import React from "react";

function InputComponent({ type, hintText, error, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        placeholder={hintText}
        value={value}
        onChange={onChange}
        className="bg-transparent w-full border p-3 mt-4 rounded-2xl font-normal focus:outline-none"
      />
      <p className="text-red-600 text-left ml-3">{error}</p>
    </div>
  );
}

export default InputComponent;
