import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [modeParams, setModeParams] = useSearchParams();
  console.log(modeParams.get("mode")); //키의 값을 가져온다 dark
//   const dark = useRef();

//   const mode = () => {
//     const mode = dark.current.className;
//     if (mode === "dark") {
//       dark.current.className = "";
//     } else {
//       dark.current.className = "dark";
//       setModeParams({ mode: "dark" });
//     }
//   };

  return (
    <>
      {/* <main ref={dark} className="MainPage"> */}
      <main className={`MainPage ${modeParams.get("mode")}`}>
        <h2>여기는 메인 페이지입니다</h2>
        <button onClick={()=>{setModeParams({mode:"dark"})}}>Dark mode</button>
      </main>
    </>
  );
}
