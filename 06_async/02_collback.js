
let product, price;


function goMarket() {
  console.log("마트에 들어가서 어떤 과자를 살지 고민...");
}
function pickDrink(pay) {
  setTimeout(() => {
      product = "새우깡";
      price = "1000원";
      pay(product,price)
      console.log("고민 끝 ~");
  }, 3000);
}
function pay() {
  console.log(`상품명:${product} 가격:${price}`);
}

goMarket();
pickDrink(pay);
// pay();
