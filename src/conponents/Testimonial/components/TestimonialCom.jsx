import React from "react";
import styled from "styled-components";
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TestimonialCom({
  currentTestIndex,
  test,
  controlAnimation,
  onNext,
  onPrev,
  testsLength,
}) {
  return (
    <Div>
      <div className="holder">
        <motion.div layout animate={controlAnimation} className="content">
          <h3>{test.detail}</h3>
          <div className="info">
            <img src={test.src} alt="face" className="photo" />
            <div className="info__info">
              <h4>{test.name} </h4>
              <p>{test.poss}</p>
            </div>
          </div>
        </motion.div>
        <div
          style={{
            cursor:
              currentTestIndex === testsLength - 1 ? "not-allowed" : "pointer",
          }}
          onClick={(e) => onNext(e)}
          className="next"
        >
          <FaArrowRight color="white" size="1.2rem" />
        </div>
        <div
          style={{
            cursor: currentTestIndex === 0 ? "not-allowed" : "pointer",
          }}
          onClick={(e) => onPrev(e)}
          className="pre"
        >
          <FaArrowLeft color="white" size="1.2rem" />
        </div>
        <div className="quote">
          <FaQuoteRight />
        </div>
      </div>
    </Div>
  );
}
const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .holder {
    position: relative;
    width: clamp(400px, 80%, 650px);
    color: #1b1b1b;
    background-color: #f8f8f8;
    border-radius: 15px;
    text-align: right;
    padding: 3.5rem 3rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h3 {
      font-weight: 100;
      font-size: 1.5rem;
      margin: 0 0 2rem 0;
    }

    .quote {
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      height: 50px;
      position: absolute;
      line-height: 0;
      border-radius: 50%;
      top: -25px;
      color: #1b1b1b;
      font-size: 3rem;
      background-color: #fff;
    }

    .info {
      display: flex;
      width: 200px;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row-reverse;

      .info__info {
        flex-direction: column;
        font-weight: 100;
        h4 {
          font-weight: 100;
          font-size: 1.4rem;
        }
        p {
          font-weight: 100;
        }
      }
      .photo {
        border: 1px solid #140e0e;
        margin: 0 1rem;
        width: 60px;
        border-radius: 50%;
        height: 60px;
      }
    }
    .next,
    .pre {
      width: 35px;
      height: 35px;
      background-color: lightcoral;
      border-radius: 50%;
      position: absolute;
      transform: translateY(-50%);
      right: -20px;
      top: 50%;
      cursor: pointer;
      border: 4px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .pre {
      right: unset;
      left: -20px;
    }
  }
`;
