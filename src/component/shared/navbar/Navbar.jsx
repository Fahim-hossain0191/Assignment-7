import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";
import { RiTimeLine } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
import Image from "../../../assets/logo.png"
const Navbar = () => {
  return (
    
        
    <div className="navbar bg-base-100 shadow-sm  px-10">
      <div className="flex-1">
        <img src={Image} alt="Logo" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
              <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  && "bg-[#244D3F] text-white rounded-lg"
                  
              }
            >
              <RiHome2Line />
              Home
            </NavLink>
          </li>
          <li>
           
            <NavLink to='/timeline' className={({isActive})=>
            isActive&&"bg-[#244D3F] text-white rounded-lg"
            }>
                 <RiTimeLine />  Timeline
            </NavLink>
          </li>
          <li >
              <NavLink to='/stats' className={({isActive})=>
            isActive&&"bg-[#244D3F] text-white rounded-lg"
            }>
                <IoStatsChartSharp /> Stats
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
 
  );
};

export default Navbar;
