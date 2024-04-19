import io from "socket.io-client";
import Notice from "./Notice";
import { useEffect, useState } from "react";
import Speech from "./Speech";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Chatting2() {
  const initSocketConnect = () => {
    if (!socket.autoConnect) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "me",
      content: "내가 작성한 메세지",
    },
    {
      type: "other",
      content: "다른 사람이 작성한 메세지",
    },
    {
      type: "notice",
      content: "~~~~님이 입장 하셨습니다.",
    },
  ]);

  const [nicknameInput,setNicknameInput]=useState("")//인풋창에 입력되는 닉네임 관리
  const [nickname,setNickname]=useState(null)//내 닉네임 관리
  useEffect(()=>{
    socket.on('error',(errMsg)=>{
      alert(errMsg)
    })

    // [닉네임사용3]
    //사용 가능한 내 닉네임을 전달받아서 nickname state에 저장
    socket.on('entrySuccess',(nick)=>{
      setNickname(nick)
    })
    
  },[])
  useEffect(() => {
    socket.on("notice", (notice) => {
      console.log(notice);
      const newChactList = [...chatList, { type: "notice", content: notice }];
      setChatList(newChactList);
    });
  }, [chatList]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const join=()=>{
    console.log(nicknameInput)
    initSocketConnect();

    // 닉네임 중복체크
    socket.emit("checkNick",nicknameInput)
    
  }
  return (
    <>
      <ul>
        <li>닉네임받고,중복체크</li>
        <li>퇴장공고</li>
      </ul>
      {/* nickname이 null 이면 닉네임 입력창
          nickname이 있으면 채팅방 창이 보이게
      */}
      {!nickname?(<div class="entry-box">
      <input type="text" placeholder="닉네임 입력" onKeyDown={(e)=>{
        if(e.key==='Enter')join();
      }} value={nicknameInput} onChange={(e)=>setNicknameInput(e.target.value)} />
      <button onClick={join} >채팅방 입장하기</button>
    </div>):(  <div className="container ">
        <header>코코아톡🐛{nickname}</header>
        <section>
          {chatList.map((chat, i) =>
            chat.type === "notice" ? (
              <Notice key={i} chat={chat} />
            ) : (
              <Speech key={i} chat={chat} />
            )
          )}
        </section>
        <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
          <select id="dm-select">
            <option value="all">전체</option>
          </select>
          <input
            type="text"
            placeholder="메세지 입력"
            value={msgInput}
            onChange={(e) => setMsgInput(e.target.validationMessage)}
          />
          <button>전송</button>
        </form>
      </div>)}
      
    
    </>
  );
}
