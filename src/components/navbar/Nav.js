import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import styled from "styled-components";

export default function Nav() {
  const [menuOpen, setmenuOpen] = useState(false);

  const navItems = [
    { name: "تماس با ما", path: "/contact" },
    { name: "قابلیت ها", path: "/capabilites" },
    { name: "ویژگی ها", path: "/peoperties" },
    { name: "امنیت", path: "/security" },
  ];

  const handleMenuClick = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <>
      <NavBar
        menuOpen={menuOpen}
        onMenuClick={handleMenuClick}
        navItems={navItems}
      />
    </>
  );
}
