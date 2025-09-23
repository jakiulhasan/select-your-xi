import React from "react";
import logoPng from "../../assets/logo.png";
import dollarIcon from "../../assets/dollar.png";

const Navbar = ({coin}) => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <a className="">
            <img className="w-[60px] h-[60px]" src={logoPng} alt="" />
          </a>
        </div>
        <div className="flex gap-12 items-center">
          <span className="hidden md:block">
            <ul className="text-[#13131360] flex gap-12">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Feature</li>
              <li className="cursor-pointer">Terms</li>
              <li className="cursor-pointer">Schedule</li>
            </ul>
          </span>
          <button className="btn btn-outline border-[#13131330] font-bold rounded-2xl">
            <span>{coin}</span>
            <span>Coin</span>
            <img src={dollarIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
