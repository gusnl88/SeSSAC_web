/*
    setTimeout(()=>{},timeOut)
    시간 밀리세컨즈 ms
    설정한 시간 이후에 함수 내부에 있는 코드들이 생행 동작함

*/
let product,price;

setTimeout(() => {
    console.log("settimeout 사용해보기")
}, 3000);

function goMarket(){
    console.log("마트에 들어가서 어떤 과자를 살지 고민...")
}
function pickDrink(){
    setTimeout(() => {
        console.log('고민 끝 ~')
        product='새우깡'
        price='1000원'
    }, 3000);
}
function pay(product,price){
    console.log(`상품명:${product} 가격:${price}`)
}

goMarket();
pickDrink();
pay();