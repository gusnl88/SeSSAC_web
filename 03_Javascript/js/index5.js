// 1.if문
// if(조건식){조건이 참일 때 실행할 문장}
if(5>3){
    console.log("5가 3보다 커요")
}
// let number= Number(prompt("숫자를 입력하세요."));

let number2=88;
//  2.if~else

if(number2>10){
    console.log("입력한 값이 10 보다 큽니다.");
}else{
    alert("입력한 값이 10보다 작습니다.");
}

// if ~ else if ~ else
if(number2>10){
    console.log("number는 10 보다 큽니다.")
}else if(number2 === 10){
    console.log("number는 10 입니다.")
}else{
    console.log("number는 10 보다 작습니다.")
}

let age=21;

if(age>=20){
    console.log("성인 이시네요.");
}else if(age>=17){
    console.log("고등학생 이시네요")
}else if(age>=14){
    console.log("중학생이시네요");
}else if(age>=8){
    console.log("초등학생 이시네요");
}else{
    console.log("유아 이시네요")
}

let a=1;
switch(a){
    case 3:
        console.log("3입니다.");
        break;
    case 4:
        console.log("4입니다.");
        break;
    case 5:
        console.log('5입니다.');
        break;
    default:
        console.log(`${a}입니다.`)
        break;
}

let score=66;

if(score>100 || score<0){
    console.log("잘못된 점수 입니다.")
}
else if(score>=90){
    console.log('A')

}
else if(score>=80){
    console.log('B')

}
else if(score>=70){
    console.log('C')

}
else if(score>=60){
    console.log('D')

}
else{
    console.log('F')
}
switch(parseInt(score/10)){
    case 9:console.log('A'); break;
    case 8:console.log('B');break;
    case 7:console.log('C');break;
    case 6:console.log('D');break;
    default:console.log('F');break;
}
// 3.삼항 연산자
// 조건식 ? 조건식이 진실 일때 : 조건식이 false 일때
let num=5;

if(num%2 === 1){
    console.log('홀수');
}else{
    console.log('짝수')
}

num%2 === 1 ? console.log("홀수"):console.log("짝수");

let now = new Date().getHours();

now < 12 ? console.log(`현재 시간은 오전 ${now}시 입니다.`):console.log(`현재 시간은 오후 ${now}시 입니다.`)
