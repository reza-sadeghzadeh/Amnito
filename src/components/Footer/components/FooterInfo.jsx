import React from "react";
import styled from "styled-components";

export default function FooterInfo() {
  return (
    <Div>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
      </p>
    </Div>
  );
}

const Div = styled.div`
  color: white;
  width: clamp(250px, 100%, 700px);
  margin-top: 2rem;

  p {
    font-size: 1.2rem;
    margin: 0 3rem 5rem 3rem;
    text-align: end;
  }
`;
