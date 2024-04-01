import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLink=styled(Link)`
    text-decoration: none;
    margin: 0 30px;
    color: black;
    font-size: 20px;
    font-weight: bold;
    &:hover{
        color: brown;
    }
`;
const HeaderContainer=styled.header`
    display: flex;
    justify-content: end;
    margin: 30px;
`

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <MyLink to={"/"}>홈</MyLink>
        <MyLink to={`/student/allie`}>학생</MyLink>
        <MyLink to={"/student/codingon"}>코딩온</MyLink>
        <MyLink to={`/student/new?name=${"jisoo"}`}>QUERY</MyLink>
      </div>
    </HeaderContainer>
  );
}
