//  1. for 문
// for(변수 선언과 초기값 ; 조건식 ; 증감식)


for(let i =0 ;i<10;i++){
    console.log('안녕',i);
}

let n= 11;
let sum=0;
for(let i=1;i<=n;i++){
    console.log(sum+=i);
}

let fruits=['사과','망고','오렌지','망고스틴'];

for(let i=0;i<fruits.length;i++){
    console.log(`${i+1}번째 과일은${fruits[i]}`)
}

let numsAr =[99,99,98,85,77];
let sum2=0;

for(let i=0;i<numsAr.length;i++){
    sum2+=numsAr[i];
}

console.log(sum2);

let n2=1;
while(n2 <=5){
    console.log(n2);
    break;
}

n2=1;
while(n2<=10){
    if(n2%2 ===0){
        console.log(n2);
    }
    n2++;
}

n2=10;
while(n2>=1){
    if(n2 % 2 != 0){
        console.log(n2);
    }
    n2--;
}
//실습 1
// let num2=10000;
// let num2=Number(prompt("숫자를 입력하세요"))
// for(let i = 0; i <num2;i++){
//     if(i % 13 === 0 && i % 2 !=0){
//         console.log(i);
//     }
// }

//실습2

// for(let i=2;i<11;i++){
//     for(let j=1;j<10;j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }

//실습3
let sum3=0;
for(let i =0;i<100;i++){
    if(i % 2 ===0 ||i%5===0){
        sum3+=i;
    
    }
}
console.log(sum3);