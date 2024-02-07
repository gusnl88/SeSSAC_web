const userList = require("../model/User");

exports.signup = (req, res) => {
  const users = userList.user.split("\n");
  const user = req.body;
  let userFound = false;

  for (let userData of users) {
    let userDB = userData.split("//");
    if (user.id === userDB[0] && user.pw === userDB[1]) {
      userFound = true;
      break;
    }
  }

  if (userFound) {
    res.send({ message: "로그인 성공", id: user.id, pw: user.pw });
  } else {
    res.send({ message: "로그인 실패" });
  }
};
