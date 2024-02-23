-- Active: 1708305077534@@127.0.0.1@3306@login
show tables;

desc USER

insert into `user` (name,pw,createdAt,updatedAt) VALUES('둘리','12345',NOW(),NOW());
insert into `user` (name,pw,createdAt,updatedAt) VALUES('도우넛','12345',NOW(),NOW());

SELECT * from user

-- DROP Table `user`