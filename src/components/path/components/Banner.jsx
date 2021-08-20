import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Banner() {
  const headAnim = {
    show: {
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
    hide: {},
  };

  const Textanim = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "linear",
      },
    },
    hide: {
      x: 200,
      opacity: 0,
    },
  };

  return (
    <Div>
      <Div variants={headAnim} initial="hide" animate="show" className="banner">
        <motion.h1 variants={Textanim}>
          تجربه واقعی <span>امنیت</span>
        </motion.h1>
        <motion.p variants={Textanim}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژ قرار گیرد.
        </motion.p>
        <motion.button variants={Textanim} className="btn">
          <Link to="/contact"> اطلاعات بیشتر </Link>
        </motion.button>
      </Div>
    </Div>
  );
}

const Div = styled(motion.div)`
  /* background-color: white; */
  width: 100%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  z-index: 1;
  font-family: "shabnam-light";
  height: 100%;

  h1 {
    span {
      color: #f05d5e;
      font-size: 4.5rem;
      font-weight: "900";
    }

    color: white;
    font-size: 4rem;
    font-weight: "300";
    margin-bottom: 1rem;
  }

  p {
    color: white;
    font-size: 1.3rem;
    font-weight: 100;
    padding: 0 0 0 3rem;
    text-align: right;
  }
  button {
    margin: 2rem 0;
  }
  @media screen and (min-width: 750px) {
    grid-area: 1/2 / 2/3;
    padding-right: clamp(1rem, 3vw, 6vw);
  }
`;
