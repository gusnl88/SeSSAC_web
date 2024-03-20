import img from "../img/book.png"
import bookCss from "../css/book.css"
export function Book(props) {
  const { title, author, price, type } = props;
  return (
    <div className="bookTable">
      <h2>이번주 베스트셀러</h2>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>저자:{author}</p>
      <p>판매가:{price}</p>
      <p>구분:{type}</p>
    </div>
  );
}
