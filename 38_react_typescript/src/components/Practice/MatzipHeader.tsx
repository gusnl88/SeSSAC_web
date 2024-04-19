import { SetStateAction } from "react"
import styled from "styled-components"

interface DivProps{
    textColor:boolean,
    
}
const HeaderList=styled.div`
    display: flex;


`

const Div=styled.div<DivProps>`
      margin: 10px;
        color:${(props:DivProps)=>(props.textColor? "pink":"white")};
        cursor: pointer;
        &:hover{
            color: pink;
        }
`
interface Props{
    mapo:boolean,
    dobong:boolean,
    gangdong:boolean,
    setMaop:React.Dispatch<SetStateAction<boolean>>
    setDobong:React.Dispatch<SetStateAction<boolean>>
    setGangdong:React.Dispatch<SetStateAction<boolean>>
}

export default function MatzipHeader(props:Props){
    const {mapo,dobong,gangdong,setMaop,setDobong,setGangdong}=props
    const setState=(func:React.Dispatch<SetStateAction<boolean>>)=>{
        setDobong(false)
        setGangdong(false)
        setMaop(false)
        func(true)
    }
    return(
        <HeaderList>
        <Div textColor={mapo} onClick={()=>setState(setMaop)}>마포</Div>
        <Div textColor={gangdong} onClick={()=>setState(setGangdong)}>강동</Div>
        <Div textColor={dobong}  onClick={()=>setState(setDobong)}>도봉</Div>
        </HeaderList>
    )
}