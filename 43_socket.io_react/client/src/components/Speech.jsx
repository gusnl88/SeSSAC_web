export default function Speech({ chat }) {
  console.log("chat",chat)
  return (
    <>
      <div className={`speech ${chat.type} ${chat.isDm?'dm':""}`}>
        {chat.type==='other' && <span className="nickname">{chat.name}</span>}
        <span className="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
