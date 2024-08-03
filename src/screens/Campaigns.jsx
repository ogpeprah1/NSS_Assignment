import React from "react";
import DashboardLayout from "../components/layouts/dashboardLayout";
import { LinearGradient } from "react-text-gradients";
import { CiFilter } from "react-icons/ci";
import Card from "../components/card";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { SubContent } from "../utils/data";
import CampaignSection from "../components/campaignSection";

function Campaigns() {
  return (
    <DashboardLayout pageName="Campaigns">
      <div>
        <h1 className="md:text-4xl font-bold mb-2 text-3xl">Your total revenue</h1>
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            <LinearGradient gradient={["to left", "#DF1EFF ,#FFC93E"]}>
              GH₵6,609,234.00
            </LinearGradient>
          </h1>
          <div className="flex gap-2">
            <div className="border rounded-lg px-3 py-1 flex items-center gap-2">
              <CiFilter size={20} color="gray" />
              <p>Select dates</p>
            </div>
            <div className="border rounded-lg px-3 py-1 flex items-center gap-2">
              <CiFilter size={20} color="gray" />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:flex-row items-center justify-between mt-5 mb-5">
          {SubContent.map((item, index) => (
            <Card
              name={item.name}
              value={item.value}
              percent={item.percent}
              isIncreasing={item.isIncreasing}
            />
          ))}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold mb-2">Recent Campaigns</h1>
            <div className="flex items-center gap-2 border-b border-b-black">
              <Link to="#">View all</Link>
              <MdArrowOutward />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 overflow-auto">
            <CampaignSection sectionName="Draft" value="1" />
            <CampaignSection sectionName="In Progress" value="2" />
            <CampaignSection sectionName="Complete" value="1" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Campaigns;
