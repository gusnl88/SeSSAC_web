let number: number=1;
console.log(number)

// number='string'; -- string 타입은 number 타입으로 할당될 수 없음.
// 기본 타입(primitive)

let str:string='hihi'
let isTrue: boolean=true;
let undef:undefined;
let empty:null=null;

//object
//두가지 방법  타입[] or Array<타입>

let numArr:number[]=[1,2,3,4,5]
let strArr:Array<string>=["a","b","c"]

const arr1:(number|string)[]=[1,2,3,"a","b","c"]
// const arr2:Array<string|number>=[1,2,3,"a","b","c"]

// boolean, null , number 가 올 수 있는 배열 arr2
const arr2:(boolean|null|number)[]=[true,1,null]

// 어떤 자료형이든지 상관없는 배열
const arr3:any=[1,2,3,4,true,null,"anyting",[],{}]

// object
let obj1:object={
    name:"hihi",
    age:11
}