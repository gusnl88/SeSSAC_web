// TODO: 컨트롤러

const { Op } = require("sequelize");
const { Player,Team} = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

// player get요청

exports.players = async (req, res) => {
  try {
    
    const playerList = await Player.findAll();
    console.log(playerList);
    res.send(playerList);
  } catch (error) {
    console.log(error)
    res.status(500).send("오류")
  }
};

exports.player = async (req, res) => {
  try {
    const playId=req.params.playerId
  const player = await Player.findOne({
    where: { player_id: playId },
  });
  res.send(player);
    
  } catch (error) {
    console.log(error)
    res.status(500).send("오류")
  }
};

// tems get 요청
exports.teams=async (req,res)=>{
  try {
    
    const {sort,search}=req.query
    console.log(sort,search)
    let teams;
    if(sort==="name_asc"){
      teams=await Team.findAll({
        attributes:['team_id','name'],
        order:[["name","asc"]]
    })
  }else if(search){
    teams=await Team.findOne({
      attributes:['team_id','name'],
      where:{
        name:{[Op.like]:`%${search}`}
      }
    })
  }else{
    teams=await Team.findAll({
      attributes:['team_id','name']
    });
  }
  res.json(teams)
  console.log(req.query)
} catch (error) {
  console.log(error)
  res.status(500).send("오류")
}
 
}

exports.team=async(req,res)=>{
  try {
    const team=await Team.findOne({
      where:{team_id:req.params.teamid}
    })
    res.json(team)
  } catch (error) {
    console.log(error)
    res.status(500).send("오류")
  }
}

exports.teamPlayers=async (req,res)=>{
  try {
    const {teamId}=req.params;
    const teamPlayer=await Player.findAll({
      where:{team_id:teamId}
    })
    res.json(teamPlayer)
  } catch (error) {
    console.log(error)
    res.status(500).send("오류")
  }
}
// player post요청 

exports.playerSignup=async (req,res)=>{
    try {
        const {name,age,teamid}=req.body
        const signup=await Player.create({
          name:name,
          age:age,
          teamid:{team_id:teamid}
        })
        res.send(signup)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("오류")
    }
}

exports.playerTeamModify=async(req,res)=>{
  try {
    const {playerId}=req.params;
    const {teamid}=req.body;

    const update=await Player.update({
      team_id:teamid
    },{
      where:{player_id:playerId}
    })
    console.log(update)
    res.send(update)
  } catch (error) {
    console.log(error)
        res.status(500).send("오류")
  }
}

exports.playerDelete=async (req,res)=>{
  console.log(req.params)
  try {
    const playerDelete=await Player.destroy({
      where:{player_id:req.params.playerId}
    })
    console.log(playerDelete)
  } catch (error) {
    console.log(error)
    res.status(500).send("오류")
  }
}