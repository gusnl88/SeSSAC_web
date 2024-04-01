import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import{reset} from '../store/modules/mbti'
import PinkButton from "../components/PinkButton";

const Header = styled.header`
  font-size: 3rem;
`;
const Explanation = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const MbtiResult = styled.p`
  font-size: 3rem;
  color: dodgerblue;
`;
const Additional = styled.p`
  font-size: 2rem;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Result() {
    const mbtiResult=useSelector((state)=>state.mbti.mbtiResult);
    console.log(mbtiResult)
    const explanations=useSelector((state)=>state.mbti.explanations)
    console.log(explanations)
    const result=explanations[mbtiResult]
    console.log(result)
    const dispath=useDispatch();
  return (
    <>
        <Header>당신의 MBTI 결과</Header>
        <Explanation>{result.text}</Explanation>
        <MbtiResult>{mbtiResult}</MbtiResult>
        <Additional>이건 재미로 읽어 보세요!</Additional>
        <AdditionalImg src={`${process.env.PUBLIC_URL}${result.img}`} alt="mbti 설명 이미지" />
        <PinkButton text={"다시 검사하기"} clickEvent={()=>dispath(reset())}/>
    </>
  );
}
