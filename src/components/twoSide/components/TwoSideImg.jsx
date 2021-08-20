import React from "react";
import styled from "styled-components";

export default function TwoSideImgText({ items }) {
  return (
    <Div className="two-side">
      {items.map((item, index) => (
        <div key={index} className="holder">
          <div className="two-side__img">
            <img src={item.src} alt="" />
          </div>
          <div className="two-side__info">
            <h2>{item.header}</h2>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </Div>
  );
}

const Div = styled.div`
  .holder {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    margin: 5rem 0 0 0;

    .two-side__img {
      grid-area: 1/1 / 2/2;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .two-side__info {
      grid-area: 2/1 / 3/2;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 2rem;
      margin-bottom: 3rem;
      width: 100%;

      h2 {
        font-size: 3rem;
        text-align: center;
      }
      p {
        font-size: 1.3rem;
        font-weight: 100;
        text-align: center;
        padding: 1.5rem 3vw;
      }
    }
  }
  @media screen and (min-width: 760px) {
    .holder {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;

      .two-side__img {
        grid-area: 1/1 / 2/2;
      }
      .two-side__info {
        grid-area: 1/2 / 2/3;

        h2 {
          font-size: 4rem;
        }
        p {
          font-size: 1.5rem;
          padding: 1.5rem 3vw;
          font-weight: 100;
          text-align: right;
        }
      }
      &:nth-child(even) {
        .two-side__img {
          grid-area: 1/2 / 2/3;
        }
        .two-side__info {
        grid-area: 1/1 / 2/2;
      }
    }
  }
`;
