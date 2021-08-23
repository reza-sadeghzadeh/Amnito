import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

export const NavBar = ({ menuOpen, navItems, onMenuClick }) => {
  const NavBtn = useSelector((state) => state.NavBtn);
  const dispach = useDispatch();

  const handleScrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  };

  const handleDispach = () => {
    console.log(NavBtn);
    if (NavBtn === "ورود") return dispach({ type: "IN_LOGIN" });
    return dispach({ type: "IN_HOME" });
  };
  return (
    <>
      <Nav>
        <SideBar menuOpen={menuOpen} navItems={navItems} />
        <div className="container">
          <h1 onClick={handleScrollToTop}>امنیتو</h1>
          <div className="item-holder">
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link key={item.name} to={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button onClick={handleDispach}>
              <Link to={`/${NavBtn === "ورود" ? "login" : ""}`}>{NavBtn}</Link>
            </button>
          </div>
          <div onClick={onMenuClick} className="humberger-menu">
            <motion.div
              animate={{
                transition: {
                  durataion: 0.5,
                },
                rotate: menuOpen ? -45 : 0,
                top: menuOpen ? 8 : 0,
              }}
              className="humberger__line"
            ></motion.div>
            <motion.div
              animate={{
                transition: {
                  durataion: 0.5,
                  // type: "spring",
                },
                scale: menuOpen ? 0 : 1,
              }}
              className="humberger__line"
            ></motion.div>
            <motion.div
              animate={{
                transition: {
                  durataion: 0.5,
                },
                rotate: menuOpen ? 45 : 0,
                top: menuOpen ? -8 : 0,
              }}
              className="humberger__line"
            ></motion.div>
          </div>
        </div>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  height: 80px;
  width: 100vw;
  background-color: #1b1b1b;
  position: sticky;
  top: 0;
  z-index: 200;
  /* shadow should change in the future */
  box-shadow: 0 0 4px 1px #5a5a5a;
  /* overflow-x: hidden; */

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: 0.2s ease all;
    color: white;

    h1 {
      font-weight: 600;
      cursor: pointer;
      font-size: 2.2rem;
      position: relative;
    }

    .item-holder {
      display: none;
    }

    a {
      text-decoration: none;
      font-family: vazir;

      color: white;
      font-size: 2rem;
      display: inline - block;
    }

    .humberger-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 30px;
      z-index: 3;
      height: 17px;
      position: relative;
      cursor: pointer;

      .humberger__line {
        width: 100%;

        height: 2.5px;
        padding: 0.2rem;
        margin: 0.2rem;
        background-color: white;
        position: relative;
        border-radius: 5px;
      }
    }
  }
  @media screen and (min-width: 650px) {
    .container {
      .item-holder {
        opacity: 1;
        position: relative;
        height: 100%;
        visibility: visible;
        top: 0;
        display: flex;
        max-width: 500px;
        justify-content: space-between;
        align-items: center;

        ul {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          list-style: none;
          align-items: center;
          top: 0;
          /* width: 300px; */

          a {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 100;
            font-family: vazir;
            position: relative;
            margin: 0 0.5rem;
            padding: 1rem 1rem;

            &::after {
              content: "";
              background-color: #00ff08;
              left: 0;
              width: 100%;
              bottom: 0;
              transition: 0.2s ease all;
              position: absolute;
              height: 0px;
            }

            &:hover::after {
              height: 1px;
            }

            &.active {
              border-bottom: 2px solid #00ff08;
            }
          }
        }

        button {
          margin-left: 5rem;
          display: block;
          padding: 0.5rem 1.8rem;
          border-radius: 30px;
          border: none;
          outline: none;
          background-color: transparent;
          font-family: vazir;
          border: 1px solid #fff;
          cursor: pointer;
          transition: 0.2s ease all;

          a {
            font-size: 1.5rem;
            font-family: vazir;
            font-weight: 100;
          }

          :hover {
            border: 1px solid #00ff08;
          }
        }
      }
      .humberger-menu {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;

    .container {
      width: 1400px;
    }
  }
`;
