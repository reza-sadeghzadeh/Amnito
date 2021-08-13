import React from "react";
import Card from "./card";
import items from "../../../images/items.svg";
import styled from "styled-components";

export default function Items() {
  const info = [
    {
      header: "سریع",
      src: `${items}#undraw_Outer_space_drqu`,
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از ",
    },
    {
      header: "امن",
      src: `${items}#undraw_Security_on_re_e491`,
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از ",
    },
    {
      header: "به صرفه",
      src: `${items}#undraw_Investing_re_bov7`,
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از ",
    },
  ];

  return (
    <>
      <Cont className="container">
        <Card info={info} />
      </Cont>
    </>
  );
}

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;
