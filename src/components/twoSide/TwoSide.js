import React from "react";
import styled from "styled-components";
import TwoSideImgText from "./components/TwoSideImg";
import twoSideSVG1 from "../../images/undraw_security_o890.svg";
import twoSideSVG2 from "../../images/undraw_Vault_re_s4my.svg";

export default function TwoSide() {
  const items = [
    {
      src: twoSideSVG1,
      header: "حفاظت",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری ریرد.",
    },
    {
      src: twoSideSVG2,
      header: "امنیت",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری ریرد.",
    },
  ];

  return (
    <Div className="two-side-holder">
      <TwoSideImgText items={items} />
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  height: auto;
  width: 100vw;
`;
