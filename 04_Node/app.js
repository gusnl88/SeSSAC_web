const http = require("http");
const head = "text/html; charset=utf-8";
const fs = require("fs"); //기본적으로 제공하는 파일읽기
const port = 8080;
const server = http.createServer(function (req, res) {
  
  // res.write('응답완료')
  // res.end('<h3>진짜완료 !!</h3>')
  /*
  예외처리 try ~ catch(err) {} 문
  try 스코프 내부 문장에서 오류가 났을 때 catch 문으로 err를 보냄*/

  try {
    const data = fs.readFileSync("./index.html");
    res.writeHead(200, { "content-type": head });
    /*res.writeHead(상태코드,헤더정보)
    -text/html:응답의 콘텐츠 형식이 html 이라는의미
    -인코딩 방식이 utf-8
    */
   res.write(data);
   res.end();
  } catch (error) {
    console.log(error);
    const data = fs.readFileSync("./404.html")
    res.writeHead(200, { "content-type": head });
    res.write(data);
    res.end();
  }
  finally{
    // 예회 발생과 상관없이 모두 실행시키고 싶은 경우 작성
    console.log("성공 실패 모두 실행 됩니다.");
  }
});
//request 이벤트 : 클라이언트 요청 -새로고침시  request 발생
server.on("request", function () {
  console.log("request 이벤트 실행!");
});
// connection 이벤트 : 클라이언트 접속했을 때 발생 - 처음 접속했을때 ,새로운 클라이언트 접속시
server.on("connection", (req, res) => {
  console.log("connection 이벤트 발생");
});
server.listen(port, function () {
  console.log("server is open!!");
  console.log(`http://localhost:${port}`);
});
