import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavBar = ({ menuOpen, navItems, onMenuClick }) => {
  return (
    <>
      <Nav>
        <div className="container">
          <Link to="/">
            <h1>امنیتو</h1>
          </Link>
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
            <button>
              <Link to="/services">خدمات</Link>
            </button>
          </div>
          <div onClick={onMenuClick} className="humberger-menu">
            <motion.div
              animate={{
                transition: {
                  durataion: 0.5,
                  // type: "spring",
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

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: 0.2s ease all;
    color: white;

    .item-holder {
      display: none;
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
            font-family: "shabnam-light";
            position: relative;
            margin: 0 0.5rem;
            padding: 1rem 1rem;

            &::after {
              content: "";
              background-color: #49d49d;
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
              border-bottom: 2px solid #49d49d;
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
          background-color: #49d49d;
          font-family: "shabnam-light";
          border: 1px solid #49d49d;
          cursor: pointer;
          transition: 0.2s ease all;

          a {
            font-size: 1.5rem;
            font-family: "shabnam-light";
          }

          :hover {
            border: 1px solid #49d49d;
            color: white;
            background-color: transparent;
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
