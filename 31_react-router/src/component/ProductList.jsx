import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  console.log(products);
  return (
    <>
      <section className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}