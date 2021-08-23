import React from "react";
import styled from "styled-components";

import Input from "./components/input";

const Form = ({ history }) => {
  return (
    <Div className="form">
      <h1>ورود</h1>
      <div className="holder">
        <Input name="username" id="username" placeholder=" نام کاربری " />
        <Input
          name="password"
          id="password"
          placeholder=" رمز عبور "
          type="password"
        />
        <button className="btn" onClick={() => history.replace("/dashboard")}>
          ورود
        </button>
      </div>
    </Div>
  );
};

export default Form;

const Div = styled.div`
  .holder {
    padding: 1rem 2rem;
    width: clamp(300px, 100vw, 600px);
    justify-content: center;
    flex-direction: column;
    display: flex;
    align-items: flex-start;

    button {
      padding: 0.5rem rem;
      margin-top: 2.2rem;
      font-size: 1.8rem;
      transition: 0.3s ease all;
      font-family: "vazir";
      font-weight: 100;

      color: black;
    }
  }
`;
