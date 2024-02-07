const Comment=require("../model/Comment").commentsInfo();
// controller 에서는 model에서 받은 데이터를 가공해서 view 에 전달할 수 있다.

//  GET /
exports.main=(req, res) => {
  res.render("index");
};


// get/comments
exports.comments = (req, res) => {
  console.log(Comment);
  res.render("comments", { commentInfo: Comment });
};


// get /comment/:id (params사용)>>comment.ejs

exports.comment = (req, res) => {
  const commentId = req.params.id;

  //한번에 처리
  if (!Comment[commentId - 1]) return res.render("404");

  res.render("comment", { commentInfo: Comment[commentId - 1] });
};