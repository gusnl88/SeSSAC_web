function printSome<T>(x:T,y:T):T{
    console.log(x)
    console.log(y)
    return y;
}

printSome<number>(1,2);
printSome<string>("하이","반가워")

function printSome2<T,K>(x:T,y:K):void{
    console.log(x)
    console.log(y)
}

printSome2<number,string>(1,"안녕하세요")

function arrLength1(arr:any[]):number{
    return arr.length;
}

function getValue1(value:any):any{
    return value;
}

function arrLength2<T>(arr:T[]):number{
    return arr.length;
}

function getValue2<T>(value:T):T{
    return value;
}
console.log(arrLength2<number>([1,2,3,4,5,6,7])
)
console.log(getValue2([1,2,3,4,5,6,7,8]))

function arrElement<T>(arr:T[],index:number):T|boolean{
    return arr[index]?arr[index]:false;
}

console.log(arrElement<string>(["a"],1))


// interface & generic
interface Phone<T>{
    company:string,
    createAt:Date,
    option:T
}

const iphone15:Phone<string>={
    company:"apple",
    createAt:new Date("2023-10-13"),
    option:"black"
}

// T 타입으로 객체타입 적용
type iphoneOption={
    color:string,
    storage:number
}

const iphone16:Phone<iphoneOption>={
    company:'apple',
    createAt:new Date("2024-10-06"),
    option:{
        color:'silver',
        storage:256
    }
}
console.log("=============================")
console.log(iphone15)
console.log(iphone16)

let aa=1;
let bb="string"
let cc=true

// aa="안녕하세요" // 처음 초기값으로 타입을 추론해서 재할당이 x