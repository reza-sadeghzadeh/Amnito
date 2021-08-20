import React from "react";
import styled from "styled-components";

export default function Card({ info }) {
  return (
    <>
      {info.map((i, index) => (
        <Cardd key={index} className="card">
          <svg class="icon">
            <use href={i.src}></use>
          </svg>
          <h2>{i.header}</h2>
          <p>{i.detail}</p>
        </Cardd>
      ))}
    </>
  );
}

const Cardd = styled.div`
  background-color: transparent;
  border: none;
  width: 80vw;
  /* height: 400px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: right;
  border-radius: 10px;
  margin: 2rem 2rem 7rem 0;

  svg {
    margin: 2rem 0;
  }

  h2 {
    font-size: 2.5rem;
    margin: 1rem 2rem;
  }
  P {
    margin: 1rem 0rem;
    font-size: 1.3rem;
    font-weight: 100;
    text-align: center;
  }

  transition: 0.2s ease all;
`;
