let product, price;

function goMarket() {
  console.log("마트에 들어가서 어떤 과자를 살지 고민...");
}
function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝 ~");
      product = "새우깡";
      price = "1000원";
      resolve("구매완료");
    }, 3000);
  });
}
function pay() {
  console.log(`상품명:${product} 가격:${price}`);
}

goMarket();
pickDrink()
  .then(() => {
    pay();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("마트에서 나왔어요.");
  });
// pay();
