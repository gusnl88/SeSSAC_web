import { Link } from "react-router-dom"

export default function ProductItem({product}){
    console.log(product)
    return(
        <Link to={`/products/${product.id}`} className="ProductItem">
        <ul>
            <li>상품명:{product.name}</li>
            <li>이메일:{product.email}</li>
            <li>상품 설명:{product.body}</li>
        </ul>
        </Link>
    )
}