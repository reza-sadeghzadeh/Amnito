import React from "react";
import styled from "styled-components";
import Matrix from "./Matrix";

export default function Home() {
  return (
    <Div>
      {/* <Matrix count={50} /> */}
      <div className="banner">
        <h1>تجربه واقعی</h1>
        <span>
          11011000 10100111 11011001 10000101 11011001 10000110 11011011
          10001100 11011000 10101010
        </span>
        <h2>حتی در دنیای مجازی</h2>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background-color: #111111;
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .banner {
    /* background-color: white; */
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: 300px;
    border-radius: 10px;
    z-index: 1;
    font-family: "shabnam-light";

    h1 {
      color: #ff5757;
      font-size: 4rem;
    }
    span {
      font-size: 1.2rem;
      /* display: inline-block; */
      color: white;
      margin: 1rem 0rem;
    }
    h2 {
      color: white;
      font-size: 2rem;

      /* display: inline-block; */

      /* span {
        color: #06ff44ba;
      } */
    }
  }
`;
