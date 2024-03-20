export function Food(props){
    const{name,content}=props;
    const textStyle={
        color:"red",
    }
    return(
        <div>
            <h3>오늘 소개드릴 음식은<h3  style={textStyle}>{name}</h3>  </h3>
            <p style={textStyle}>{content}</p>
        </div>
    )
}

Food.defaultProps={
    name:"제육볶음",
    content:"매콤달콤 양념에 쫄깃쫄깃 고기와 아삭아삭한 식감에 야채가 곁들여진 한국 소울푸드"
}