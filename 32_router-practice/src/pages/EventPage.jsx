import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
export default function EventPage() {
  const navigate = useNavigate();
  const params = useParams();

  const[searchPrams]=useSearchParams();
  const name=searchPrams.get("name")||"";
 
  const Main=styled.main`
    min-height: 30vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  const RealName=styled.span`
    color: red;
  `

  const Name=styled.span`
    color: blue;
  `

  const Font=styled.p`
    font-weight: bold;
  `
  console.log(params)
  
  return (
    <Main>
      <Font>학생 이름은 <Name>{params.paramId}</Name> 입니다.</Font>
      {name?<Font>실제 학생 이름은 <RealName>{name}</RealName>입니다.</Font>:null}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </Main>
  );
}
