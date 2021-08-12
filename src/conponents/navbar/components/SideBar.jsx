import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function SideBar({ navItems, menuOpen }) {
  return (
    <Side
      animate={{
        x: menuOpen ? 0 : "100%",
        transition: {
          duration: 1,
          type: "spring",
          staggerChildren: 1,
        },
      }}
      initial={{ x: "100%" }}
    >
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button>
        <Link to="/services">خدمات</Link>
      </button>
    </Side>
  );
}

const Side = styled(motion.div)`
  position: absolute;
  z-index: 5;
  width: 100vw;
  height: calc(100vh - 80px);
  overflow: hidden;
  background-color: #111111;

  ul {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li {
      position: relative;
      color: #49d49d;
      padding: 2rem 0;
      list-style: none;

      &::after {
        content: "";
        background-color: #49d49d;
        left: 0;
        width: 0%;
        bottom: 10px;
        transition: 0.2s ease all;
        position: absolute;
        height: 2px;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  a {
    text-decoration: none;
    font-family: vazir;
    font-weight: 100;

    color: white;
    font-size: 2rem;

    display: inline - block;
    h1 {
      font-size: 2.2rem;
      position: relative;
    }
  }
  button {
    margin: auto;
    display: block;
    padding: 0.5rem 2rem;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: #49d49d;
    font-family: vazir;
    border: 1px solid #49d49d;
    cursor: pointer;
    transition: 0.2s ease all;

    :hover {
      border: 1px solid #49d49d;
      color: white;
      background-color: transparent;
    }
  }
  @media screen and (min-width: 650px) {
    display: none;
  }
`;
