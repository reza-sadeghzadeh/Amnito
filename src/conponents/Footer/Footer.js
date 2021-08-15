import React from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";
import FooterLinks from "./components/FooterLinks";
import FooterInfo from "./components/FooterInfo";
import CopyRight from "./components/CopyRight";

export default function Footer() {
  return (
    <Div>
      <div className="holder">
        <FooterLinks />
        <FooterLinks />
      </div>
      <FooterInfo />

      <CopyRight />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #111;
  /* height: 50vh; */
  margin-top: 8rem;
  padding-top: 3rem;

  .holder {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    /* flex-direction: column; */
  }
`;
