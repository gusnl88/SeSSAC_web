import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function Header() {
  const [clickedLink, setClickedLink] = useState("");

  const Nav = styled.nav`
    display: flex;
    justify-content: end;
    & > a {
      text-decoration: none;
      font-weight: bold;
      margin: 10px;
      color: black;
      &:hover {
        color: orange;
      }
    }
  `;

  return (
    <Nav>
      <Link
        to={"/"}
        onClick={() => setClickedLink("home")}
        style={{ color: clickedLink === "home" ? "orange" : "black" }}
      >
        HOME
      </Link>
      <Link
        to={"/lecture"}
        onClick={() => setClickedLink("lecture")}
        style={{ color: clickedLink === "lecture" ? "orange" : "black" }}
      >
        수업 코드
      </Link>
      <Link
        to={"/practice"}
        onClick={() => setClickedLink("practice")}
        style={{ color: clickedLink === "practice" ? "orange" : "black" }}
      >
        실습
      </Link>
      <Link
        to={"/practice/matzip"}
        onClick={() => setClickedLink("matzip")}
        style={{ color: clickedLink === "matzip" ? "orange" : "black" }}
      >
        맛집
      </Link>
    </Nav>
  );
}
