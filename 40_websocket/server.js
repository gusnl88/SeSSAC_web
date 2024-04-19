const express=require('express')
const ws= require('ws')
const app=express();
const PORT=8080;

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('clients');
})

const server=app.listen(PORT,(req,res)=>{
    console.log(`welcome to my ${PORT}`);
})

// console.log(server)//server객체

//websocket 서버 접속 !!
const wsServer=new ws.Server({server})

const sockets=[]; //클라이언트 들을 담을 배열


//return  string
// 현재 시간관련 타임스태므와 랜덤문자열을 결합 > 고유 식별자 생성
function generateUniqueId(){
    // 타임스탬프(문자열)
    const timestamp=Date.now().toString(36);//36진수로 반환한 문자열

    // 랜덤 문자열
    const randomString=Math.random().toString(36).substring(2); //substring(2) 2번 인덱스부터 끝가지 가져오는 값 반환

    return timestamp+randomString;
}

/*
    ws 모듈(설치 필요)의 이벤트 
    -connection : 클라이언트와 웹소켓 서버와 연결 되었을때 
    -message: 클라이언트로부터 메세지를 받았을 때 
    -error:연결중 오류가 발생했을 때
    -close:연결이 종료 되었을 때

 */

    wsServer.on('connection',(socket)=>{
        // console.log(soket);//클라이언트에 대한 소켓 정보
        const clientId=generateUniqueId();
        console.log(clientId)
        sockets.push(socket);
        socket.on('message',(message)=>{
            /*
                toString() 메소드를 사용하지 않아도
                `${버퍼객체}` 처럼 텔플릿 리터럴을 함께 쓰면
                암시적으로 toString() 사용할 수 있음.
            */
            console.log(`${message}`)
            // const buftoString=message.toString('utf-8');
            // console.log(buftoString)

            //모든 클라이언트에게 동일한 메세지를 보내기 위해
            //sockets 배열 순회
            sockets.forEach((el)=>{
                el.send(`${message}`)//JSON data send
            });
            // socket.send('하나의 클라이언트에게 보내기')
        })
        socket.on('error',()=>{
            console.log('에러가 낫어요')
        })
        socket.on('close',()=>{
            console.log(`클라이언트${clientId}와 연결이 종료 되었습니다.`)
        })
    })

 