import { useState } from "react"

export default function ChangeObj(props){
    const {objArry}=props
    console.log(objArry)

    const [idx,setIdx]=useState(0);
    function changeProfile(){
        if(idx===objArry.length-1){
            setIdx(0);
        }else{
            setIdx(idx +1);

        }
    }
    return(
        <div>
            <p>이름:{objArry[idx].name}</p>
            <p>나이:{objArry[idx].age}</p>
            <p>별명:{objArry[idx].nickName}</p>
            <button onClick={changeProfile}>다른 멤버 확인</button>
        </div>
        )
}