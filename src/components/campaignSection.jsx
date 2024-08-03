import React from "react";
import AddCampaignBtn from "./addCampaignBtn";

function CampaignSection({ sectionName, value, children }) {
  const addCampaign = (name) => {
    console.log(`Add Campaign for ${name} Button Clicked`);
  };

  return (
    <div className="w-full md:w-[32%]">
      <div className="flex items-center gap-1 mb-5">
        <p className="font-semibold">{sectionName}</p>
        <div className="h-[25px] px-2  bg-gray-300 rounded-md flex items-center justify-center">
          {value}
        </div>
      </div>
      <div>{children}</div>

      <AddCampaignBtn clickFunc={() => addCampaign(sectionName)} />
    </div>
  );
}

export default CampaignSection;
