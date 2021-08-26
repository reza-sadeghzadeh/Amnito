import React, { useState } from "react";
import styled from "styled-components";
import Joi from "joi-browser";

const Input = ({ name, id, placeholder, type = "text", schema }) => {
  const [error, setError] = useState(null);

  const validation = (e, n) => {
    let { error } = Joi.validate(e, schema[n]);
    if (error) setError(error.message);
    else setError(null);
  };

  return (
    <Div>
      <label htmlFor={id}>{placeholder}</label>
      <input
        style={
          error
            ? {
                borderWidth: 1 + "px",
                borderStyle: "solid",
                borderColor: "red",
              }
            : null
        }
        onChange={(e) => validation(e.target.value, name)}
        type={type}
        name={name}
        id={id}
      />
    </Div>
  );
};

export default Input;

const Div = styled.div`
  display: flex;
  margin: 0.5rem 0;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: flex-strat;
  flex-direction: column;

  label {
    text-align: right;
    color: black;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 100%;
    opacity: 0.5;
    font-family: vazir;
    padding: 1.1rem 0;
  }

  input {
    width: 100%;
    padding: 0.6rem 1.5rem;
    border: 1px solid gray;
    transition: 0.3s ease all;
    border-radius: 5px;
    font-weight: 200;
    outline: none;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    :focus {
      box-shadow: 0 0 5px 0 #adadad;
    }
  }
`;
