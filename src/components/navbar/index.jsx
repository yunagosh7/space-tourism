import React from "react";
import { useState } from "react";
import Logo from "../../assets/shared/logo.svg";
import openMenu from "../../assets/shared/icon-hamburger.svg";
import closeMenu from "../../assets/shared/icon-close.svg";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState();
  
  return (
    <header className="w-screen z-50 fixed flex items-center justify-between px-8 pt-8 md:pt-0 md:pl-8 md:pr-0 lg:mt-12 ">
      <img src={Logo} className="h-12 w-12 " alt="Logo" />

      <nav className={`nav ${toggle ? "active" : ""}  `}>
        <img
          src={closeMenu}
          alt="Button close menu"
          className="cursor-pointer md:hidden h-6 w-6 mr-10 self-end"
          onClick={() => {
            setToggle(false);
          }}
        />
        <NavLink onClick={()=>setPath("/")} className={`ml-4 my-8 py-2 pl-4 md:mb-0 md:pb-8 ${path === "/" && "active"} `} to="/">
          00 HOME
        </NavLink>
        <NavLink onClick={()=>setPath("/destination")} className={`ml-4 my-8 py-2 pl-4 md:mb-0 md:pb-8 ${path == "/destination" && "active"} `} to="/destination">
          01 DESTINATION
        </NavLink>
        <NavLink onClick={()=>setPath("/crew")} className={`ml-4 my-8 py-2 pl-4 md:mb-0 md:pb-8 ${path == "/crew" && "active"} `} to="/crew">
          02 CREW
        </NavLink>
        <NavLink onClick={()=>setPath("/technology")} className={`ml-4 my-8 py-2 pl-4 md:mb-0 md:pb-8 ${path == "/technology" && "active"} `} to="/technology">
          03 TECHNOLOGY
        </NavLink>
      </nav>
      <img
        src={openMenu}
        alt="Button open menu"
        className="cursor-pointer md:hidden h-6"
        onClick={() => {
          setToggle(true);
        }}
      />
    </header>
  );
};
