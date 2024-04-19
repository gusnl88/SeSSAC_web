function print(a:number,b:number,c:number):void{
    console.log(a)
    console.log(b)
    console.log(c)
}
function print2(a:number,b:number,c?:number):void{
    console.log(a)
    console.log(b)
    console.log(c)
}

print(1,2,3);
// print(1,2,3,4); //err

print2(1,2)

// void type
function sayHello():void{
    console.log("hello")
}

sayHello();

function concatStr(a:string,b:number):string{
    return a+b;
}


concatStr("a",1);

//원의 넓이를 구하는 함수
function circleArea(r:number):number{
    return r*r*Math.PI;
}

console.log(circleArea(5))


// 함수 표현식으로
const triangleArea=(w:number,h:number):number=>(w*h)/2;

console.log("삼각형의 넓이",triangleArea(2,4))


interface Greet{
    name:string;
    hi():string;
    bye(a:number):string;
}

const jh:Greet={
    name:"hihi",
    hi(){
        return "안녕 내이름은"+this.name+"이야"
    },
    bye(a:number){
        return `작별인사를 ${a}번 햇습니다.`
    }
}

console.log(jh.hi());
console.log(jh.bye(5))

//naver type
//항상 함수의 끝에 절대 도달하지 않는 경우에만 never 타입 할당 가능
function goingOn(a:number):never{
    while(true){
        console.log("끝나지 않는 함수 입니다.")
    }
}

//goiingOn();


//숫자가 오면 더하기
//문자가 오면 문자 이어주기
// function addSometing(x:string|number,y:string|number):string|number{
//     return x + y;
// }

// 오버로딩,오버라이딩
/*
    -오버라이딩 : 클래스에서 상속을 했을 때 , 메소드 재정의 
    -오버로딩 : 함수에서 매개변수의 개수나 타입,함수의 타입이 다를 때
                같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
                함수의 이름이 같기 때문에 비슷한 기능일 때만 사용할 수 있음
*/
//오버로딩 

// function addSometing(x:string,y:string):string;
// function addSometing(x:number,y:number):number;

function addSometing(x:any,y:any){
    return x+y;
}

console.log(addSometing(1,2))
console.log(addSometing("a","b"))
console.log(addSometing(1,"b"))


//addSomting(1,"2")

function addsum(a:number,b:number){
    console.log(a+b)
}

addsum(2,3)

function addsum2(...a:number[]):number{
    let sum=0;
    a.forEach(item => {
           sum+=item;
    });
    return sum;
}

console.log(addsum2(1,2,3))