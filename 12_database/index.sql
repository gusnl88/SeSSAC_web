USE SESSAC;
show databases;
DROP DATABASE sessac;
DROP DATABASE mydatabase;

CREATE DATABASE sessac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
/*
dobong 이라는 데이터 베이스를 생성하는데,
문자열셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci 를 사용 !
utf8mb4는 utf8 보다 더많은 문자 지원(이모지 저장 가능)
>>이모지를 저장하는 db라면 utf8mb4, 이모지를 저장하지 않아도 된다면 utf8
*/
CREATE DATABASE dobong CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;

use sessac;
/*
1.테이블 생성

create table products(
    속성1 값형식 제약조건,
    속성2 값형식 제약조건
)

제약조건
-not null:null 허용 안함
-auto_increment: 자동 숫자 증가
-primary keY: 기본키(중복허용 안함,널값 허용 안함)
-default : 기본값
-unniqye:중복허용 안하고, 널값 허용
*/

CREATE Table products(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT null,
    model_model VARCHAR(15) not NULL,
    series VARCHAR(30) not null
);
show tables;

ALTER Table products add new_column VARCHAR(20);
ALTER Table products MODIFY new_column int;
ALTER Table products DROP new_column;

CREATE Table users(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) not null,
    age int not null,
    address VARCHAR(100)
)

SHOW TABLES;
DESC USERS;

INSERT INTO USERS (name,age,address) VALUES ('둘리',100,'남극');
INSERT INTO USERS (name,age,address) VALUES ('도우너',30,'서울');
INSERT INTO USERS (name,age,address) VALUES ('희동이',2,'서울');
INSERT INTO USERS (name,age,address) VALUES ('마이콜',30,'인천');
INSERT INTO USERS (name,age,address) VALUES ('짱구',6,'광주');
INSERT INTO USERS (name,age,address) VALUES ('짱아',3,'광주');
INSERT INTO USERS (name,age,address) VALUES ('흰둥이',3,'광주');

SELECT * from users;

SELECT * from users WHERE age>=20;

select *from users WHERE id=3;

SELECT name from users WHERE id=3;

SELECT id, age from users WHERE name='둘리';

select * from users ORDER BY age desc;

SELECT * from users WHERE name LIKE'__콜';
SELECT * from users WHERE address LIKE'%천';
SELECT * from users WHERE age LIKE'%3%';

SELECT name from users WHERE name LIKE'%희%';

select * from users WHERE age LIKE '%3%' LIMIT 2;
SELECT * FROM USERS WHERE AGE BETWEEN 5 AND 30;
SELECT * FROM USERS WHERE AGE IN(3,6,30);
INSERT INTO USERS (name,age,address) VALUES ('마블리3',44,NULL);
SELECT * FROM USERS;

SELECT * FROM USERS WHERE ADDRESS IS NULL;
SELECT name from users WHERE name LIKE '둘%' and age =100;

SELECT DISTINCT address from users;

use dobong;

CREATE TABLE member(
    id VARCHAR(20) UNIQUE PRIMARY KEY COMMENT'아이디',
    name VARCHAR(5) not null COMMENT'이름',
    age int  COMMENT'나이',
    gender VARCHAR(2) not NULL  COMMENT'성별',
    email VARCHAR(50)  COMMENT'이메일',
    promotion VARCHAR(2) DEFAULT 'x'  COMMENT'진급여부'
);

DROP TABLE member;
show TABLEs;
select * from member;
desc member;

ALTER Table member MODIFY id VARCHAR(10);

ALTER Table member drop age;

ALTER Table member add interest VARCHAR(100);


desc member;

CREATE Table user(
    id VARCHAR(10) PRIMARY KEY,
    pw VARCHAR(20) not null,
    name VARCHAR(5) not null,
    gender ENUM('f','m','') DEFAULT '',
    birthday DATE not NULL,
    age INT(3) not null DEFAULT 0
);
delete from user;
insert into user (id,pw,name,gender,birthday,age) VALUES ('hong1234','8o4bkg','홍길동','m','1990-01-30',33);
insert into user (id,pw,name,gender,birthday,age) VALUES ('sexysung','8o4bkg','성춘향','f','1992-03-31',31);
insert into user (id,pw,name,gender,birthday,age) VALUES ('power70','8o4bkg','변사또','m','1970-05-02',53);
insert into user (id,pw,name,gender,birthday,age) VALUES ('hanjo','8o4bkg','한조','m','1984-10-18',39);
insert into user (id,pw,name,gender,birthday,age) VALUES ('widowmaker','8o4bkg','위도우','f','1976-06-27',47);
insert into user (id,pw,name,gender,birthday,age) VALUES ('dvadva','8o4bkg','송하나','f','2001-06-03',22);
insert into user (id,pw,name,gender,birthday,age) VALUES ('jungkrat','8o4bkg','정크랫','m','1999-11-11',24);

select * from user WHERE birthday ORDER BY birthday asc;

SELECT * from user WHERE gender='m' ORDER BY name desc;
SELECT id, name from user WHERE birthday LIKE '199%'

SELECT * from user WHERE birthday LIKE '%06%';

SELECT * from user ORDER BY age desc limit 3;

SELECT * from user WHERE age BETWEEN 25 and 50;

SELECT * from user WHERE id='hong1234'


update user set pw='12345678' WHERE id='hong1234';
delete from user WHERE id='jungkrat';

SELECT * from user;