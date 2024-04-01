// import { ClassProps, ClassProps2 } from "./components/ClassProps";
// import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
// import { Food } from "./components/Food";
// import { Book } from "./components/Book";
// import { TextClass } from "./components/TextClass";
// import { ClassState } from "./components/ClassState";
// import { FunctionState } from "./components/FunctionState";
// import PororoObj from "./components/MemberChange"

import Alphabet from "./components/Alphabet";
import MapStudy1 from "./components/MapStudy1";
import MapStudy2 from "./components/MapStudy2";
// import PropsMap from "./components/PropsMap";

// import ClassComponent from"./components/ClassComponent"
function App() {
  const dataArray=[
    {name:"peach",number:5,price:5000},
    {name:"apple",number:10,price:7000},
    {name:"banana",number:1,price:3000},
    {name:"grape",number:2,price:8500},
  ]
  return (
    <div className="App">
            <h1>map과 filter 사용</h1>
      {/* <PropsMap arr={dataArray}/> */}
      {/* <Alphabet/> */}
      {/* <MapStudy1/> */}
      <MapStudy2/>
      {/* <h1>Hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="짱구" color="yellow" nickname="아기" />
      <ClassProps2
        name="뽀로로"
        color="blue"
        nickname="펭귄"
        bgColor="yellow"
      />
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={5000} />
      <FunctionProps2 price={1000} name="딸기">
        <section style={{ backgroundColor: "red" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>
      <Food
        name="밤양갱"
        content="달디달고 달디달고 달디단 밤양갱 밤양갱
내가 먹고 싶었던 건 달디단 밤양갱 밤양갱이야"
      ></Food>
      <Food></Food>
      <hr />
      <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      ></Book>
      <TextClass valid="콘솔 띄우기 성공!"></TextClass>
      <br /><br /><br /><br /><br /><br /><br />
      <ClassState/>
      <br /><br /><br /><br /><br /><br /><br />
      <FunctionState/>
      <br /><br /><br /><br /><br /><br /><br />
      <ClassComponent></ClassComponent>
      <br /><br /><br /><br /><br /><br /><br />
      <PororoObj /> */}

    </div>
  );
}

export default App;
