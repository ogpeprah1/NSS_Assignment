import React from "react";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";

function CampaignCard({ name, value, percent, isIncreasing }) {
  return (
    <div className="border border-gray-400 w-[32%] p-6 rounded-md">
      <p className=" mb-5">{name}</p>
      <div>
        <div className="flex gap-2 items-center mb-5 ">
          <p className="text-2xl font-bold">{value}</p>
          <div
            className={`rounded-md p-2 flex items-center gap-1 ${
              isIncreasing
                ? "text-green-600 bg-green-200"
                : "text-red-600 bg-red-200"
            }`}
          >
            {isIncreasing ? (
              <AiOutlineRise color="green" />
            ) : (
              <AiOutlineFall color="red" />
            )}
            <p className="font-bold">{percent}%</p>
          </div>
        </div>
      </div>
      <p className="text-gray-600">Compared to last week</p>
    </div>
  );
}

export default CampaignCard;
