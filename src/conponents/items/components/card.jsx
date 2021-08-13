import React from "react";
import styled from "styled-components";

export default function Card({ info }) {
  return (
    <>
      {info.map((i) => (
        <Cardd key={i} className="card">
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
  border: 1px solid #c5c5c5;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
  border-radius: 10px;
  margin: 1rem 2rem 3rem 0;

  svg {
    margin: 4rem 0;
  }

  h2 {
    font-size: 2.5rem;
    margin: 1rem 2rem;
  }
  P {
    margin: 1rem 2rem;
    font-size: 1.3rem;
    font-weight: 100;
  }

  transition: 0.2s ease all;

  :hover {
    box-shadow: 0px 0px 5px 2px #dbdbdb;
  }
`;
