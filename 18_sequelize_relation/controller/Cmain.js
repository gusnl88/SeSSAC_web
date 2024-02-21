const { Op } = require("sequelize");
const models = require("../models");

const { Player, Profile, Team } = require("../models");
exports.main = (req, res) => {
  res.render("index");
};

exports.getAllPlayer = async (req, res) => {
  const players = await Player.findAll();
  console.log(players);
  res.send(players);
};

// GET /players/:playerId
// 선수 한 명 조회 (Player, Profile)
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params); //{playerId:1}
    const { playerId } = req.params;
    const player = await Player.findOne({
      where: {
        player_id: playerId,
      },
      include: [{ model: Profile, attributes: ["position", "salary"] }],
      // include: 두 테이블을 합쳐서 보여줌(inner join)
    });

    res.json(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, teamid } = req.body;
    const newPlayer = await Player.create({
      name,
      age,
      team_id: teamid,
    });
    console.log(newPlayer);
    res.json(newPlayer);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const { teamid } = req.body;

    const updatePlayer = await Player.update(
      {
        team_id: teamid,
      },
      {
        where: { player_id: playerId },
      }
    );
    console.log(updatePlayer);
    res.json(updatePlayer);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    console.log(playerId);
    const isDeleted = await Player.destroy({
      where: { player_id: playerId },
    });

    console.log("아이디", isDeleted);
    if (isDeleted) {
      res.send("성공");
    } else {
      res.send("실패");
    }
  } catch (error) {
    console.error(error); // 에러를 콘솔에 기록합니다.
    res.status(500).send("서버 에러 발생"); // 클라이언트에게 서버 에러 발생을 알립니다.
  }
};

exports.getTeams = async (req, res) => {
  try {
    console.log(req.body);
    const { sort, search } = req.body;
    let teams;

    if (sort === "name_asc") {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "ASC"]],
      });
      console.log(teams);
    } else if (search) {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
      console.log(teams);
      res.json(teams);
      //sort 에 name_asc외의 문자열이 들어오거나
      // sort search 가 전달되지 않았을 때
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
//req.params
exports.getTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await Team.findOne({
      where: { team_id: teamId },
    });

    res.send(team);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

exports.getTeamPlayers = async (req, res) => {
  console.log(req.params);
  try {
    const { teamid } = req.params;
    console.log(teamid);
    // const teamPlayer=Player.findAll({
    //     where:{
    //         team_id:teamid
    //     }
    // })
    const teamPlayers = await Team.findAll({
      where: { team_id: teamid },
      include: [{ models: Player }],
    });
    res.send(teamPlayer);
  } catch (error) {
    console.log("err", error);
    res.status(500).send("server error");
  }
};
