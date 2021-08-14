import React from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image from "../../../images/85053105-82ca-49c9-8974-d3067829baab.jpg";

export default function TestimonialCom() {
  const IconStyle = { color: "red " };
  return (
    <Div>
      <div className="holder">
        <h3>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها ولورم ایپسوم ز صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها ولورم ایپسوم متن ساختگی با تولید
          سادگی نامفهوم از صنعت
        </h3>
        <div className="info">
          <img src={image} alt="face" className="photo" />
          <div className="info__info">
            <h4>پیمان </h4>
            <p>مهندس سازه در دیتاسنترسیتی</p>
          </div>
        </div>
        <div className="next">
          <FaArrowRight color="white" size="1.2rem" />
        </div>
        <div className="pre">
          <FaArrowLeft color="white" size="1.2rem" />
        </div>
      </div>
    </Div>
  );
}
const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  .holder {
    position: relative;
    width: clamp(400px, 80%, 700px);
    color: #1b1b1b;
    background-color: #f8f8f8;
    border-radius: 10px;
    text-align: right;
    padding: 3.5rem 3rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h3 {
      font-weight: 200;
      font-size: 1.6rem;
      margin: 0 0 2rem 0;
    }

    .info {
      display: flex;
      width: 200px;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row-reverse;

      .info__info {
        flex-direction: column;
        font-weight: 100;
        h4 {
          font-weight: 100;
          font-size: 1.4rem;
        }
        p {
          font-weight: 100;
        }
      }
      .photo {
        border: 1px solid #140e0e;
        margin: 0 1rem;
        width: 60px;
        border-radius: 50%;
        height: 60px;
      }
    }
    .next,
    .pre {
      width: 35px;
      height: 35px;
      background-color: lightcoral;
      border-radius: 50%;
      position: absolute;
      transform: translateY(-50%);
      right: -20px;
      top: 50%;
      cursor: pointer;
      border: 4px solid white;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.8rem;
        color: white;
      }
    }
    .pre {
      right: unset;
      left: -20px;
    }
  }
`;
