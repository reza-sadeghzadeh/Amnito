import React from "react";
import styled from "styled-components";
import Matrix from "./Matrix";
import { motion } from "framer-motion";
import logo from "../../../images/logo.svg";
import Banner from "./Banner";

export default function Home() {
  return (
    <Div>
      <Matrix count={25} />
      <Banner />
      <motion.div
        animate={{
          y: 0,
          rotate: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          opacity: 0,
          y: 150,
          rotate: 180,
        }}
        className="hero-image"
      >
        <img src={logo} alt="" />
      </motion.div>
    </Div>
  );
}

const Div = styled.div`
  background-color: #111111;
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  overflow: hidden;
  position: relative;

  .hero-image {
    display: none;
  }

  @media screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    /* background-color: red; */

    .hero-image {
      height: 100%;
      display: block;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 5;
      background-image: url(logo);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      img {
        width: clamp(100px, 50%, 300px);
        height: 100%;
      }
    }
  }
  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`;
