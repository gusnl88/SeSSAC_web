import ProductList from "../component/ProductList";

export default function ProductPage({ products }) {
  return (
    <>
      <main className="ProductPage">
        <p>상품목록 입니다 !!!</p>
        <ProductList products={products} />
      </main>
    </>
  );
}