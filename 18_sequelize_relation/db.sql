-- Active: 1708305077534@@127.0.0.1@3306@sessac
show TABLEs;
DROP TABLE Team, Player, Profile, Game, TeamGame;
DROP TABLE team;
CREATE TABLE Team (
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    TAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    name VARCHAR(255)  NOT NULL
);
CREATE TABLE Player (
    player_id INT AUTO_INCREMENT  PRIMARY KEY,
    TAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    age INT  NOT NULL,
    team_id INT,
    FOREIGN KEY (team_id) REFERENCES Team(team_id) 
);

CREATE TABLE Profile (
    profile_id INT AUTO_INCREMENT  PRIMARY KEY,
    player_id INT,
    position VARCHAR(255)  NOT NULL,
    salary DECIMAL(10, 2)  NOT NULL,
    TAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (player_id) REFERENCES Player(player_id)
);


CREATE TABLE Game (
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    TAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    location VARCHAR(255)
);

CREATE TABLE TeamGame (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_id INT,
    game_id INT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (team_id) REFERENCES Team(team_id),
    FOREIGN KEY (game_id) REFERENCES Game(game_id)
);


show TABLEs;

DESC player;
ALTER TABLE teamgame
ADD COLUMN createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- 더미 파일
insert into team(name, createdAt, updatedAt) values 
  ('sk', now(), now()), 
  ('kt', now(), now()), 
  ('nc', now(), now()), 
  ('lg', now(), now());

insert into player(name, age, createdAt, updatedAt, team_id) values 
  ('홍길동', 20, now(), now(), 1), 
  ('성춘향', 21, now(), now(), 3), 
  ('김첨지', 22, now(), now(), 2), 
  ('김수지', 23, now(), now(), 4), 
  ('강민재', 19, now(), now(), 1), 
  ('황찬수', 28, now(), now(), 1), 
  ('이장우', 24, now(), now(), 2), 
  ('박나래', 30, now(), now(), 3);

insert into profile(position, salary, createdAt, updatedAt, player_id) values
  ('1B', 100, now(), now(), 1),
  ('2B', 150, now(), now(), 2),
  ('3B', 80, now(), now(), 3),
  ('LF', 200, now(), now(), 4),
  ('1B', 170, now(), now(), 5),
  ('2B', 130, now(), now(), 6),
  ('3B', 90, now(), now(), 7),
  ('LF', 250, now(), now(), 8);

insert into game(date, location, createdAt, updatedAt) values
  ('2023-10-1', 'seoul', now(), now()),
  ('2023-10-3', 'london', now(), now()),
  ('2023-10-5', 'la', now(), now());

insert into teamgame(team_id, game_id, createdAt, updatedAt) values
  (1, 1, now(), now()), 
  (2, 1, now(), now()), 
  (2, 2, now(), now()), 
  (3, 1, now(), now()), 
  (1, 3, now(), now()), 
  (3, 3, now(), now());
  
select * from player;
select * from profile;
select * from team;
select * from game;
select * from teamgame;