import Container from "../components/lecture/Container";
import EventObj from "../components/lecture/EventObj";
import GenericList from "../components/lecture/GenericList";
import { Props1, Props2, Props3 } from "../components/lecture/Props";
import Text from "../components/lecture/Text";
import TodoList from "../components/lecture/TodoList";
export default function Lecture() {
  return (
    <>
      <h1>수업 코드 페이지 입니다.</h1>
      <Container>
        {/* <Props1 name="hihi" />
        <Props2 width="100px" height="100px" color="pink" />
        <Props3 width={100} height={100} color="blue" text="안녕" /> */}
        {/* <Text/>
        <EventObj/> */}
        <TodoList/>
        <GenericList/>
      </Container>
    </>
  );
}
