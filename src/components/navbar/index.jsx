import React from "react";
import { useState } from "react";
import Logo from "../../assets/shared/logo.svg";
import openMenu from "../../assets/shared/icon-hamburger.svg";
import closeMenu from "../../assets/shared/icon-close.svg";
import "./navbar.css";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-screen z-50 fixed flex items-center justify-between px-8 pt-12 md:pt-0 md:pl-8 md:pr-0 lg:mt-12 ">
      <img src={Logo} className="h-12 w-12 " alt="Logo" />

      <nav
        className={`flex absolute flex-col px-20 nav h-screen w-[70vw] md:flex-row md:static md:w-auto md:h-full md:pt-0 md:px-8 lg:px-16  ${
          toggle ? "active" : ""
        }  `}
      >
        <img
          src={closeMenu}
          alt="Button close menu"
          className="cursor-pointer md:hidden h-6 w-6 self-end"
          onClick={() => {
            setToggle(false);
          }}
        />
        <a className="mx-4 py-10" href="/">
          00 HOME
        </a>
        <a className="mx-4 py-10" href="/destinatation">
          01 DESTINATATION
        </a>
        <a className="mx-4 py-10" href="/crew">
          02 CREW
        </a>
        <a className="mx-4 py-10" href="/technology">
          03 TECHNOLOGY
        </a>
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
