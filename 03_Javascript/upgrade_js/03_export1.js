/*
    모듈 만들기 (commonJs 방식으로)
    exports 라는 키워드 사용해서 내보내기
    한번에 내보내기
*/

const colors=['blue','red','orange'];

const sayHi=()=>{

    console.log('hi')
}

function sayName(name){
    console.log('my name is ',name)
    sayHi();
}
sayName('둘리')
module.exports={  //내보내기를 해서 다른곳에서 사용하게 하기위한 선언
    colors,
    sayName
}