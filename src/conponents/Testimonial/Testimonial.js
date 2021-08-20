import React, { useState, useEffect } from "react";
import TestimonialCom from "./components/TestimonialCom";
import { useAnimation } from "framer-motion";
import image1 from "../../images/85053105-82ca-49c9-8974-d3067829baab.jpg";
import image3 from "../../images/e3f3fa6b-3107-49f7-a5b5-b9ce74c608b9.jpg";
import image2 from "../../images/9af80164-2673-45f0-8153-c5f1235f8cfc.jpg";
import styled from "styled-components";

export default function Testimonial() {
  const [currentTestIndex, setCurrentTestIndex] = useState(1);

  const control = useAnimation();

  const tests = [
    {
      src: image1,
      name: "رضا",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای ",
      poss: "مهندس نرم افزار در پی سی راد",
    },
    {
      src: image2,
      name: "پیمان",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و  گرافیک است، چاپگرها و متون بلکه روزنامه و گرافیک استنولوژی مورد نیاز، و  گرافی، چاپگرها و متون بلکه روزنامه و مجله ",
      poss: "مهندس داده در دیتاسنترسیتی",
    },
    {
      src: image3,
      name: "علی",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و  گرافیک اسنولوژی مورد نیاز، و  گرافینولوژی مورد نیاز، و روزنامه و مجله ",
      poss: "توسعه دهنده در راد اپ آرمان",
    },
  ];

  const handleNextOne = (e) => {
    if (currentTestIndex < tests.length - 1) {
      setCurrentTestIndex(currentTestIndex + 1);
      control.start({
        opacity: [0, 1],
        transition: {
          duration: 0.5,
        },
      });
    }
  };
  const handlePrevOne = (e) => {
    if (currentTestIndex > 0) {
      setCurrentTestIndex(currentTestIndex - 1);
      control.start({
        opacity: [0, 1],
        transition: {
          duration: 0.5,
        },
      });
    }
  };

  return (
    <Div>
      <TestimonialCom
        currentTestIndex={currentTestIndex}
        testsLength={tests.length}
        test={tests[currentTestIndex]}
        onNext={handleNextOne}
        onPrev={handlePrevOne}
        testimonialsLength={tests.length}
        setCurrentTestIndex={setCurrentTestIndex}
        control={control}
      />
    </Div>
  );
}
const Div = styled.div`
  margin: 2rem 0 5rem 0;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
