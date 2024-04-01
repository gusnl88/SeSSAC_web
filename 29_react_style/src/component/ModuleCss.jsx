import style from "../style/style.module.css";
import classNames from "classnames";
import Names from "classnames/bind";
export default function ModuleCss() {
  const setting = Names.bind(style);
  let isTrue = true;
  let value = "first";

  return (
    <div className={style.container}>
      <h4>.module.css 적용</h4>
      <div className={style.box1}>
        <div>안녕하세요</div>
      </div>
      <br />
      <div className={`${style.first} ${style.second}`}>
        클래스 여러개 지정 (백틱사용)
      </div>
      <div className={[style.first, style.second].join(" ")}>
        클래스 여러개 지정 (join 이용)
      </div>
      <div className={classNames(style.first, style.second)}>
        classnames 메소드 이용(install 필요)
      </div>
      <div className={setting("first", "second")}>classNames 모듈 사용 1</div>
      <div className={setting(value, { second: isTrue })}>
        classNames 모듈 사용 2
      </div>
    </div>
  );
}
