const userlist=require('../model/User').userList();

exports.user=(req,res)=>{
    res.render("user", { userlist: userlist });
};