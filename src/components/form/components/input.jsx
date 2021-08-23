import React from "react";
import styled from "styled-components";

const input = ({ name, id, placeholder, type = "text" }) => {
  return (
    <Div>
      <label htmlFor={id}>{placeholder}</label>
      <input type={type} name={name} id={id} />
    </Div>
  );
};

export default input;

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
