import React from "react";
import notFoundImage from "../../images/not-found.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFound = ({ history }) => {
  return (
    <Div>
      <h1> !یافت نشد </h1>
      <Link onClick={() => history.replace("/")}> بازگشت به خانه</Link>
      <img src={notFoundImage} alt="not found image" />
    </Div>
  );
};

export default NotFound;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  overflow: hidden;

  a {
    font-size: 2rem;
    text-decoration: none;
    color: blue;
    font-weight: 100;
    margin-top: 1.5rem;
  }

  img {
    background-size: cover;
    width: 100vw;
    height: 50vh;
    object-fit: contain;
  }
  h1 {
    font-family: vazir;
    font-weight: 100;
    font-size: 6rem;
    opacity: 0.6;
    top: 13vh;
  }
`;
