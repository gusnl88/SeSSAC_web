const visitors = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index/index");
};

exports.visitor = (req, res) => {
  // res.render("visitor/visitor",{visitorList:visitorList.getVisitor()});
  visitors.getVistors((result) => {
    // console.log("cvisitor.js 전체목록:", res);
    res.render("visitor/visitor", { visitorList: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log("req.body", req.body);
  visitors.postVisitors(req.body, (result) => {
    console.log("id", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  visitors.deleteVisitor(req.body.id, (result) => {
    console.log("cmain.js delete", result);
    res.send("몇번 방명록 삭제 완료!");
  });
};

exports.patchVisitor = (req, res) => {
  visitors.patchVisitor(req.body, (result) => {
    res.send("수정완료");
  });
};

exports.getVisitorById = (req, res) => {
  visitors.getVisitor(req.params.id, (result) => {
    console.log(result);
    res.send(result);
  });
};
