import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function SideBar({ navItems, menuOpen }) {
  console.log(menuOpen);

  return (
    <Side
      animate={{
        left: menuOpen ? "0" : "-120%",
        transition: {
          durataion: 1,
          type: "spring",
          damping: 20,
        },
      }}
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
  width: 100vw;
  height: calc(100vh - 80px);
  position: absolute;
  background-color: #111111;

  ul {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li {
      color: #49d49d;
      padding: 2rem 0;
      list-style: none;
    }
  }
  a {
    text-decoration: none;
    font-family: "shabnam-light";
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
    font-family: "shabnam-light";
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
