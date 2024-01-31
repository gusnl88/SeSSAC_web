// 구조 분해 할당
// 1.배열의 구조분해 할당
const arr=["tomato","kiwi","banana"];
console.log(arr[2]);
const [to,ki,ba]=arr;
console.log(ki)

const arr2=["빨","주","노","초"];
const [red,orange,,green]=arr2;
console.log(red,green);

let x="first"
let y="second";
[x,y]=[y,x];

console.log(x,y)

let x2="first"
let y2="second";
let temp;
temp=x2;
x2=y2;
y2=temp;

console.log(x2,y2)
//2. 객체의 구조분해 할당

const obj={
    title:"제목",
    content:"내용",
    number:0,
}

console.log(obj.title);

const{title:t2,content,number}=obj;
console.log(t2,content,number);

// 전개 구문
const arr3=[1,2,3,4,5]
const arr4=["a","b","c"]

console.log(arr3)
console.log(arr4)

for(let el of arr3){
    console.log(el)
}

console.log(...arr3)

// /[1,2,3,4,5,'a','b','c']

const arr5=arr3.concat(arr4)
console.log('concat으로 ',arr5)

const arr6=['전개연산자로',...arr3,...arr4]
console.log(arr6)

const str='aliiehight';
let strToArr=[...str];
let strToArr2=str.split(""); //문자열을 -> 배열로 split("");

console.log(strToArr)
console.log(strToArr2)

// object spread
const me1={
    name:"bh",
    height:178,
    friend:null,
    married:true,
};
const me2={
    name:"k",
    like:['캠핑','영화','넷플'],
    greeting:function(){
        console.log(`안녕하세요. 제 이름은 ${this.name} 입니다.키는 ${this.height}`)
    }
};

let me={...me1,...me2}
console.log(me)
me.greeting();


const word1="abc"
const word2="xyz"
console.log([...word1,...word2])
const word3=word1.split("")
const word4=word2.split("")
console.log((word1+word2).split(""))
console.log(word3.concat(word4))
console.log(word1.split('').concat(word2.split('')))

const word=word3.concat(word4);

console.log(word)


const obj2={
    title:'제목',
    content:'내용',
    num:0,
    key4:'value4',
    key5:'value5',
}

const {title:a,content:b,num:c,...obj3}=obj2
console.log(obj3)

function test(...valuue){
    const [a,b,...rest]=valuue;
    console.log(a)
    console.log(b)
    console.log(rest)
}

test(1,2,3,4,5,6);

//quiz
//매개변수가 몇개가 들어오든 합산해주는 함수 addNumber()

function addNumber(...valuue){
    let result=0;
    for(let a of valuue){
        result+=a
    };
    return result;
}
let result=addNumber(1,2,3,4,5,6,7);

console.log(result)