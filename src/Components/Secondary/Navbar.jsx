import React from "react";
// import logo from ""
import { useState } from "react";
import Logo from '../Assets/logo.png'
import styles from "../style";
function Navbar() 
{
    return (

           <nav className="w-full flex py-6 justify-between items-center ">
              <div className="flex justify-start">
              <img src={Logo} alt="logo" className="w-[54px] h-[54px]"/>
              <p className="text-2xl text-main top-[310px] right-[130px] pt-[5px]"> Coin</p>
              </div>
              <span className="text-main">About Us</span>
              

           </nav>
    
    )

    
}
export default Navbar;

