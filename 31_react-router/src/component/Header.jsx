import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <span>router 사용해보기</span>
            <div>
                <Link to="/" className="menu-item">Home</Link>
                <Link to="/products" className="menu-item">product</Link>
                <Link to="/photos" className="menu-item">photos</Link>
            </div>
        </header>
    )
}