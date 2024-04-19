import { MatzipForm } from "../../types/interface";
import Card from "./Card";

interface Props{
    showContent:boolean,
    matzipInfo:MatzipForm[]
}
export default function CardContainer({showContent,matzipInfo}:Props){
    return(
        <>
          {showContent&&matzipInfo.map(matzip => (
            <Card key={matzip.idx} {...matzip} />
        ))}
        </>
    )
}