import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ icon, text, to }) {
  return (
    <div className="flex rounded-xl mb-2 ">
      <Link
        to={to}
        className="focus:bg-gray-300 focus:font-semibold p-3 w-full rounded-xl flex items-center gap-3"
      >
        <div>{icon}</div>
        {text}
      </Link>
    </div>
  );
}

export default MenuItem;
