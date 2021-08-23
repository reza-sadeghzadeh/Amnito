import React from "react";
import styled from "styled-components";
import Input from "../../components/form/components/input";
import NameAndLastNameInput from "./nameAndLastNameInput";
import image from "../../images/undraw_Setup_re_y9w8 (1).svg";

function SignUp() {
  return (
    <Div className="form">
      <div className="holder">
        <h1>ثبت نام</h1>
        <NameAndLastNameInput />
        <form>
          <Input name="user-name" id="username" placeholder="نام کاربری" />
          <Input
            name="password"
            id="password"
            placeholder="رمزعبور"
            type="password"
          />
          <Input
            name="password"
            id="password"
            placeholder="تکرار رمزعبور"
            type="password"
          />
          <button className="btn">ثبت نام</button>
        </form>
      </div>
      <img src={image} alt="sign up image" />
    </Div>
  );
}

export default SignUp;

const Div = styled.div`
  h1 {
    margin: 0 0 2rem 0;
    font-size: 2.2rem;
    font-weight: 100;
  }

  .holder {
    width: clamp(300px, 80%, 600px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    form {
      width: 100%;

      button {
        color: black;
        margin: 3rem 0;
        padding: 1rem 2rem;
      }
    }
  }
  img {
    position: absolute;
    bottom: 00%;
    left: 5%;
    width: 350px;
    object-fit: cover;
    opacity: 0.3;
    z-index: -1;
  }
`;
