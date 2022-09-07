import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="px-4 bg-slate-600 h-10 w-screen flex justify-between">
        <Link
          className="text-center font-bold text-white text-lg pt-1"
          to={`/`}
        >
          Back to Home
        </Link>
        <p className="text-center font-bold text-white text-lg pt-1">
          Todo List Wah Yaw
        </p>
      </div>
    </>
  );
};

export default NavBar;
