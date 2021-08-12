import React from "react";
import Items from "./components/Items";
import styled from "styled-components";

export default function Item() {
  return (
    <Div className="items">
      <h1>
        ویژگی های منحصر به فرد <span>امنیتو</span>
      </h1>
      <Items />
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    text-align: center;
    font-weight: 200;
    margin: 5rem 0 3rem;

    span {
      font-weight: 400;
    }
  }
`;
