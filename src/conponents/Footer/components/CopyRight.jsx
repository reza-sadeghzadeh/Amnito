import React from "react";
import styled from "styled-components";

export default function CopyRight() {
  return (
    <Div>
      <h3>Copyright 2021</h3>
    </Div>
  );
}
const Div = styled.div`
  margin-top: 2rem;
  color: #292929;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;
  background-color: #ffffff;
`;
