//모듈을 불러서 사용 하는 법 require
//가지고 오고 싶은 함수/변수만 구조분해할당을 이용해서 가져올 수 있음

const {sayName}=require('./03_export1');
const export1=require('./03_export1');
// sayName('케이비')
console.log(export1)

export1.sayName('도봉')

const {sayHi2,sayHi3}=require('./03_export2')     //require 는 맨상단에 모아두는걸 추천
sayHi2();
sayHi3('안녕하세요')