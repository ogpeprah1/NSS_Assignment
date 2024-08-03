import { IoHomeOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { LiaHubspot } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";

export const BASE_URL = "https://test.quups.app";

export const DashboardLinks = [
  { name: "Dashboard", url: "/dashboard", icon: <IoHomeOutline size={20} /> },
  {
    name: "Campaigns",
    url: "/campaigns",
    icon: <LiaHubspot size={22} />,
  },
  { name: "Chat", url: "#", icon: <IoChatbubbleOutline size={20} /> },
  { name: "Support Center", url: "#", icon: <HiOutlineSupport size={20} /> },
  { name: "Leads", url: "#", icon: <RiMoneyDollarCircleLine size={22} /> },
  { name: "Archive", url: "#", icon: <PiSuitcaseSimple size={20} /> },
];
