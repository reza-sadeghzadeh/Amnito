import React from "react";
import styled from "styled-components";

import Input from "./components/input";

const Form = ({ history }) => {
  return (
    <Div>
      <div className="holder">
        <Input name="username" id="username" placeholder=" نام کاربری " />
        <Input
          name="password"
          id="password"
          placeholder=" رمز عبور "
          type="password"
        />
        <button onClick={() => history.replace("/dashboard")}>ورود</button>
      </div>
    </Div>
  );
};

export default Form;

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  align-items: center;
  width: 100vw;

  .holder {
    padding: 1rem 2rem;
    width: clamp(300px, 100vw, 600px);
    justify-content: center;
    flex-direction: column;
    display: flex;
    align-items: center;

    button {
      padding: 0.8rem 3rem;
      margin-top: 2.2rem;
      font-size: 1.8rem;
      transition: 0.3s ease all;
      font-family: "vazir";
      font-weight: 100;
      cursor: pointer;
      background-color: transparent;
      border-radius: 10px;
      border: 1px solid black;

      :hover {
        border-color: #00b906;
        /* color: #00b906; */
      }
    }
  }
`;
