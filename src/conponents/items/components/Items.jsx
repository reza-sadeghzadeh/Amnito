import React from "react";
import Card from "./card";
import items from "../../../images/items.svg";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Items() {
  const control = useAnimation();
  // const element = [];
  const [element0, view0] = useInView({ threshold: 0.1 });

  if (view0) {
    control.start({
      opacity: 1,
      transition: {
        duration: 0.5,
        // type: 'spring'
      },
    });
  } else {
    control.start({
      opacity: 0,
      transition: {
        duration: 0.5,
        // type: 'spring'
      },
    });
  }

  const info = [
    {
      header: "سریع",
      src: `${items}#undraw_Outer_space_drqu`,
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
    },
    {
      header: "امن",
      src: `${items}#undraw_Security_on_re_e491`,
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
    },
    {
      header: "به صرفه",
      src: `${items}#undraw_Investing_re_bov7`,
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
    },
  ];

  return (
    <>
      <Cont
        animate={control}
        initial={{ opacity: 0.0 }}
        ref={element0}
        className="container"
      >
        <Card info={info} />
      </Cont>
    </>
  );
}

const Cont = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;

  @media screen and (min-width: 1050px) {
    flex-direction: row;

    .card {
      border: 1px solid #c5c5c5;
      width: 300px;
      align-items: flex-end;

      P {
        text-align: right;
        margin: 1rem 2rem 3rem 0;
      }

      :hover {
        box-shadow: 0px 0px 5px 2px #dbdbdb;
      }
    }
  }
`;
