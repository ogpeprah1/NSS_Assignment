import React, { useState } from "react";
import MenuItem from "../menuItem";
import { FiSidebar } from "react-icons/fi";
import { DashboardLinks } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../AlertComponent";
import { BiLogOut } from "react-icons/bi";

function getUser() {
  let user = localStorage.getItem("user");

  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }

  return user;
}

function DashboardLayout({ children, pageName }) {
  const [user, setUser] = useState(getUser());
  const [showAlert, setShowAlert] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowAlert(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowAlert(false);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowAlert(false);
  };

  const handleDropMenu = (e) => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center items-center w-full">
      {showAlert && (
        <AlertComponent
          show={showAlert}
          onHide={handleCancelLogout}
          onConfirm={handleConfirmLogout}
        />
      )}
      <div className="w-full md:w-[20%] flex md:flex-col md:justify-start justify-between items-start md:h-full md:border-r-[2px] border-gray-300 p-4">
        <button onClick={handleDropMenu}>
          <div className="flex gap-3 items-center justify-between">
            <div>
              <h1 className="text-blue-950 font-semibold text-2xl">Orbut</h1>
            </div>
            <div className="w-6 h-6 rounded-md flex items-center justify-center">
              <FiSidebar size={25} />
            </div>
          </div>
        </button>
        <div className="hidden mt-10 md:block">
          {DashboardLinks.map((Link) => (
            <MenuItem
              key={Link.name}
              text={Link.name}
              to={Link.url}
              icon={Link.icon}
            />
          ))}
        </div>
        {showMenu && (
          <div className="mt-[70px] bg-white absolute p-5 top-0 h-fit  rounded-lg shadow-lg md:hidden">
            {DashboardLinks.map((Link) => (
              <MenuItem
                key={Link.name}
                text={Link.name}
                to={Link.url}
                icon={Link.icon}
              />
            ))}
          </div>
        )}
        <button
          className="md:mt-5 px-5 p-2 rounded-lg bg-red-200 border border-red-300 flex gap-2 items-center justify-center"
          onClick={handleLogout}
        >
          <BiLogOut /> Logout
        </button>
      </div>
      <div className="w-full md:w-[80%] h-full p-4 overflow-auto">
        <div className="flex items-start justify-between w-full h-[10%]">
          <h1 className="hidden md:block text-2xl font-semibold">{pageName}</h1>
          <div className="flex gap-1 items-center">
            <div className="border border-black h-[40px] w-[40px] rounded-full"></div>
            <div className="flex gap-2 items-center">
              <div className="h-[40px] w-[40px] rounded-full bg-green-400"></div>
              <p>
                {user
                  ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
                  : "Guest"}
              </p>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
