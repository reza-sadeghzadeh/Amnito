import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterLinks() {
  return (
    <>
      <Div>
        <ul>
          <li>
            <Link>قابلیت ها</Link>
          </li>
          <li>
            <Link> امنیت</Link>
          </li>
          <li>
            <Link> ارتباط با ما</Link>
          </li>
          <li>
            <Link> ویژگی</Link>
          </li>
          <li>
            <Link> شرایط استفاده</Link>
          </li>
          <li>
            <Link> حریم خصوصی</Link>
          </li>
        </ul>
      </Div>
    </>
  );
}

const Div = styled.div`
  color: white;
  margin: 2rem 0;
  width: 300px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style: none;
  }

  li {
    a {
      color: white;
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: 100;
    }
  }
`;
