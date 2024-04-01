import styled from "styled-components"

const ProgressContainer=styled.div`
    margin-top: 3rem;
`
const File=styled.div`
    background-color: #777;
    width: 100%;
    height: 10px;
`

const Guage=styled.div`
    background-color: skyblue;
    height: 100%;
    width: ${(props)=>props.percent}%;
    transition: 0ms.4s;
`
export default function Progress({page,maxPage}){
    return(
        <ProgressContainer>
            <div>
                {page} /{maxPage}
            </div>
            <File>
                <Guage percent={(page/maxPage) *100}></Guage>
            </File>
        </ProgressContainer>
    )
}