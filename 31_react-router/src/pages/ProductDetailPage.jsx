import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  const [productDetail, setProductDetail] = useState("");

  const { productId } = useParams();
  //   console.log(productId);

  const navigate = useNavigate(); //훅훅

  const [product] = products.filter((item) => item.id === Number(productId));
  console.log(product);

  useEffect(() => {
    setProductDetail(product);
  }, []);
  if (!product) {
    return <main>존재하지 않는 상품 입니다.</main>;
  }

  return (
    <>
      <h1>상세페이지</h1>
      <button onClick={() => navigate("/")}>홈으로</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <ul>
        <li>판매 번호:{product.id}</li>
        <li>상품명:{product.name}</li>
        <li>판매자:{product.email}</li>
        <li>상세설명:{product.body}</li>
      </ul>
    </>
  );
}
