import React from "react";
import Input from "../../components/form/components/input";
import styled from "styled-components";

function NameAndLastNameInput() {
  return (
    <Div>
      <Input id="name" placeholder="نام خانوادگی" name="lastname" />
      <Input id="name" placeholder="نام" name="name" />
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
