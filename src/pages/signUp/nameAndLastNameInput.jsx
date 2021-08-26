import React from "react";
import Input from "./input";
import styled from "styled-components";

function NameAndLastNameInput({ schema }) {
  return (
    <Div>
      <Input schema={schema} id="name" placeholder="نام" name="name" />
      <Input
        schema={schema}
        id="lastname"
        placeholder="نام خانوادگی"
        name="lastname"
      />
    </Div>
  );
}

export default NameAndLastNameInput;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    width: 48%;
    overflow: hidden;
  }
`;
