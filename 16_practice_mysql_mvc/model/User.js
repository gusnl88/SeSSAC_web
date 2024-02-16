// TODO: DB(mysql) 연결
// TODO: 모델 코드

// mysql 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sessac",
  password: "1234",
  database: "sessac",
});

/*
1.뷰에서 요청
2. 컨트롤러에서 정보를 받고 모델로 줌(req.body, req.query, req.params....)
3.모델에서 db로 요청
4.데이터 삽입/ 삭제/ 조회/... 결과값을 컨트롤러로 응답
5.컨트롤러에서는 res 객체를 통해 뷰로 응답

뷰>컨트롤러>모델>db>모델>컨트롤러>뷰

*/
exports.postSignup = (data, cb) => {
  console.log("model", data);
  conn.query(
    `insert into user(userid,name,pw) values('${data.userid}','${data.name}','${data.pw}')`,
    (err, rows) => {
      if (err) throw err;

      console.log("rows", rows);
      cb();
    }
  );
};

exports.postSignin = (data, cb) => {
  console.log("model", data);

  conn.query(
    `select * from user where userid='${data.userid}' and pw='${data.pw}' limit 1`,
    (err, rows) => {
      if (err) throw err;

      console.log("model", rows);
      cb(rows[0]);
    }
  );
};

exports.postProfile = (id, cb) => {
  console.log(id);
  conn.query(`select * from user where userid='${id.userid}'`, (err, rows) => {
    if (err) throw err;

    cb(rows[0]);
  });
};

exports.editProfile = (data, cb) => {
  conn.query(
    `update user set pw='${data.pw}',name='${data.name}' where id=${data.id}`,
    (err, rows) => {
      if (err) throw err;

      cb(rows);
    }
  );
};

exports.deleteProfile = (data, cb) => {
  console.log(data.id);
  conn.query(`delete from user where id=${Number(data.id)}`, (err, rows) => {
    if (err) throw err;

    cb();
  });
};
