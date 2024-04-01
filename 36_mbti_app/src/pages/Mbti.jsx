import { useDispatch, useSelector } from 'react-redux';
import SkyblueButton from '../components/SkyblueButton';
import styled from 'styled-components';
import { check, next } from '../store/modules/mbti';
import Progress from '../components/Progress';
const Question =styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const Vs= styled.p`
  font-size: 2rem;
  padding-top:1.5rem;
`;
export default function Mbti() {
  const survey=useSelector((state)=>state.mbti.survey)
  console.log(survey)
  const page= useSelector((state)=>state.mbti.page);
  const dispath=useDispatch();
  return (
    <>
      <Question>질문</Question>
      <ul>
        {survey[page-1].answer.map((el,index)=>{
          return(
            <>
            <li key={index}>
              <SkyblueButton text={el.text} clickEvent={()=>{
                dispath(next());
                dispath(check(el.result))
              }}/>
            </li>
            {index === 0 && <Vs>VS</Vs>}
            </>
          )
        })}
      </ul>
      <Progress page={page} maxPage={survey.length}/>
    </>
  );
}
