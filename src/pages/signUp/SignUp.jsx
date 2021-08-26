import React, { useRef } from "react";
import styled from "styled-components";
import Input from "./input";
import NameAndLastNameInput from "./nameAndLastNameInput";
import image from "../../images/undraw_Setup_re_y9w8 (1).svg";
import Joi from "joi-browser";
import { toast } from "react-toastify";

function SignUp({ history }) {
  const inpsHolder = useRef([]);
  // let nameError, userNameError, passwordError, lastNameError;
  // .messages({
  //   "string.base": `فقط حروف مجاز است`,
  //   "string.empty": `این قسمت ضروری است`,
  //   "string.min": `حداقل باید 2 حرف باشد`,
  //   "any.required": `این قسمت ضروری است`,
  // }),

  const schema = {
    name: Joi.string().min(2).max(50).required(),
    lastname: Joi.string().min(2).max(50).required(),
    username: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(8).max(50).required(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputs = inpsHolder.current.querySelectorAll("input");
    let inpPasses = inpsHolder.current.querySelectorAll(
      "input[type='password']"
    );
    console.log(inpPasses);
    if (inpPasses[0].value === inpPasses[1].value) {
      let data = {};
      inputs.forEach((inp) => {
        data = { ...data, [inp.name]: inp.value };
      });
      let { error } = Joi.validate(data, schema);
      if (error) toast.error(error.message);
      else console.log(history.push("/"));
    } else {
      toast.error("رمز عبورها باید برابر باشند");
    }
  };
  return (
    <Div ref={inpsHolder} className="form">
      <div className="holder">
        <h1>ثبت نام</h1>
        <NameAndLastNameInput schema={schema} />
        <form>
          <Input
            name="username"
            schema={schema}
            id="username"
            placeholder="نام کاربری"
          />
          <Input
            name="password"
            schema={schema}
            id="password"
            placeholder="رمزعبور"
            type="password"
          />
          <Input
            name="password"
            id="repeat-password"
            schema={schema}
            placeholder="تکرار رمزعبور"
            type="password"
          />
          <button onClick={(e) => handleSubmit(e)}>ثبت نام</button>
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
        background-color: transparent;
        border: 1px solid #00ff08;
        border-radius: 10px;
        cursor: pointer;

        :disabled {
          cursor: not-allowed;
          border: 1px solid gray;
        }
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
