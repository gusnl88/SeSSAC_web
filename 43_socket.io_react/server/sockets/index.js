const socketIO = require("socket.io");
function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const nickInfo = {};
  // {socket.id:닉네임1, socket.id: 닉네임2}
  io.on("connection", (socket) => {
    console.log(nickInfo);
    // io.emit("notice", `${socket.id}님이 입장하셨습니다.`);

    socket.on("checkNick", (nickname) => {
      // console.log(nickname);

      // Object.values= ['닉네임1','닉네임2']
      if (Object.values(nickInfo).includes(nickname)) {
        // 닉네임이 nickInfo에 있을 때[입장 실패]
        socket.emit("error", "이미 존재하는 닉네임입니다.");
      } else {
        // 닉네임이 nickInfo에 없을 때[입장 성공]
        // (1)일치하는게 없을 때, nickInfo에 닉네임정보 넣기
        nickInfo[socket.id] = nickname;
        // (2)입장 성공 닉네임 정보 클라이언트에게 전달
        socket.emit("entrySuccess", nickname);
        // (3)입장성공, 전체클라이언트에게 입장 알림 보내주기
        socket.broadcast.emit("notice", `${nickname}님이 입장하셨습니다.`);
        // (4)입장성공, 전체 클라이언트에게 nickInfo전달
        io.emit("updateNicks", nickInfo);
      }
      socket.on("disconnect", () => {
        io.emit("notice", `${nickInfo[socket.id]}님이 퇴장 하셨습니다.`);
        delete nickInfo[socket.id];
        io.emit("updateNicks", nickInfo);
      });
      socket.on("send", (data) => {
        console.log(data);
        const date = new Date();

        // AM 또는 PM 가져오기
        const ampm = date.getHours() < 12 ? "AM" : "PM";

        // 시, 분 가져오기
        const hours = date.getHours() % 12 || 12; // 12시간 표시법을 사용하여 시간을 가져옵니다.
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const { myNick, dm, msg } = data;
        console.log(myNick, dm, msg);
        if (dm === "all") {
          //전체일시
          io.emit("message", {
            id: myNick,
            message: msg,
          });
        } else {
          //dm 일시
          //  (1) io.to(soket.id).emit(~~~)
          //특정 소켓아이디에게만 전달(나 포함 x)
          io.to(dm).emit("message", {
            id: myNick,
            message: msg,
            isDm: true,
          });
          // (2)soket.emit(~~~~~~~)
          //  나 에게만 메세지 보내기
          socket.emit("message", {
            id: myNick,
            message: msg,
            isDm: true,
          });
        }
      });
    });
  });
}

module.exports = socketHandler;
