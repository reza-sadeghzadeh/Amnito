import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import _ from "lodash";

export default function Matrix({ count }) {
  return (
    <MartixContainer className="matrix-container">
      {_.range(0, count).map((item) => (
        <motion.svg
          key={item}
          xmlns="http://www.w3.org/2000/svg"
          width="0.5"
          height="1045.843"
          viewBox="0 0 0.5 1045.843"
        >
          <motion.path
            key={item}
            animate={{
              pathLength: Math.random() * 0.3 + 0.5,
              opacity: [1, Math.random(), Math.random(), 0],
              transition: {
                delay: Math.random() * 1 + Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 1 + 1,
                duration: Math.random() * 2 + 2,
              },
            }}
            initial={{
              left: 100,
              pathLength: 0,
            }}
            id="Path_1"
            data-name="Path 1"
            d="M757.777,0V1045.843"
            transform="translate(-757.527)"
            fill="none"
            stroke="#00ff08"
            stroke-width="0.5"
          />
        </motion.svg>
      ))}
    </MartixContainer>
  );
}

const MartixContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  position: absolute;
  top: -50px;
  z-index: 0;
`;
