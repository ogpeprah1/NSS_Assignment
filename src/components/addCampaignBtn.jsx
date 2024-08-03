import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function AddCampaignBtn({  clickFunc }) {
  return (
    <button
      className="border-dashed border-2 rounded-lg border-gray-400 p-4 w-full flex gap-4 items-center justify-center"
      onClick={clickFunc}
    >
      <IoAddCircleOutline size={20} />
      <p>Add Campaign</p>
    </button>
  );
}

export default AddCampaignBtn;
