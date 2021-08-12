import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import _ from "lodash";

export default function Home() {
  return (
    <Div>
      {_.range(0, 100).map((item) => (
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
              pathLength: Math.random() * 0.3 + 0.6,
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
    </Div>
  );
}

const Div = styled.div`
  background-color: #111111;
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    /* position: absolute; */

    path {
      /* position: absolute; */
    }
  }
`;
