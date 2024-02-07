CREATE Table customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE not null
)

desc customer;

INSERT INTO customer (id, name, birthday) VALUES ('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');

select * from customer;

create table orderlist(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) 
    ON UPDATE CASCADE ON DELETE CASCADE
);
--FOREING KEY (참조테이블 칼럼이름[FK]) REFERENCES 기준테이블(컬럼이름[PK])

-- ON UPDATE CASCADE  : 기준테이블에 업데이트시 참조테이블에 데이터가 변경 된다.
-- ON DELETE CASCADE  : 기준테이블에 삭제시 참조테이블에 데이터가 삭제 된다.

--테이블을 삭제할때
--fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블(참조테이블)을 먼저 삭제 

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

SELECT * FROM orderlist;

select * from customer
INNER JOIN orderlist
ON customer.id=orderlist.customer_id;
SELECT orderlist.id,customer.id ,customer.name,orderlist.product_name
from customer,orderlist
WHERE customer.id=orderlist.customer_id;

SELECT * from orderlist inner JOIN customer
ON customer.id=orderlist.customer_id
WHERE quantity >=5;

SELECT orderlist.id,customer.id,customer.name,orderlist.product_name
from customer
JOIN orderlist on customer.id=orderlist.customer_id;

SELECT o.id,c.id,c.name,o.product_name
FROM customer as c, orderlist as o
WHERE c.id=o.customer_id;
--natural JOIN
SELECT * 
FROM orderlist NATURAL JOIN customer;

--outer join
SELECT * from orderlist LEFT OUTER JOIN customer
ON customer.id=orderlist.customer_id;
SELECT * from orderlist RIGHT OUTER JOIN customer
ON customer.id=orderlist.customer_id;

CREATE Table hongik(
    h_id int PRIMARY key,
    name VARCHAR(10) NOT NULL,
    age int NOT NULL
);
CREATE Table seoul(
    s_id int PRIMARY key,
    name VARCHAR(10) NOT NULL,
    age int NOT NULL
);
DROP TABLE SUBJECTlist;
CREATE Table subjectlist(
    sub_id int AUTO_INCREMENT PRIMARY KEY,
    id int,
    subject VARCHAR(20) NOT NULL
);
show TABLEs;
select *from subjectlist;
INSERT INTO hongik (h_id, name, age) VALUES
(20115544, 'a', 34),
(20156677, 'b', 31),
(20227755, 'c', 25),
(20232223, 'd', 23),
(20201144, 'e', 23),
(20145145, 'f', 30),
(20180919, 'g', 26);

INSERT INTO seoul (s_id, name, age) VALUES
(2022091994, 'h', 29),
(2020101021, 'i', 23),
(2018187566, 'j', 26);

INSERT INTO subjectlist (id, subject) VALUES
(20115544, '네트워크'),
(20115544, '알고리즘'),
(20156677, '알고리즘'),
(20227755, '네트워크'),
(20232223, 'C언어'),
(20145145, '캡스톤'),
(20180919, '캡스톤'),
(20180919, 'C언어'),
(20180919, '네트워크'),
(2022091994, 'C언어'),
(2022091994, '캡스톤'),
(2022091994, '웹프레임워크'),
(2018187566, 'C언어'),
(2018187566, '네트워크'),
(2018187566, '캡스톤');

SELECT * from subjectlist;

SELECT * from seoul as s ,subjectlist as sj WHERE s.s_id=sj.id;

SELECT * FROM hongik as h INNER JOIN subjectlist as sj WHERE  h.h_id=sj.id;

SELECT * from hongik as h LEFT OUTER JOIN subjectlist as sj on h.h_id=sj.id;
SELECT * from hongik as h RIGHT OUTER JOIN subjectlist as sj on h.h_id=sj.id;

SELECT * from hongik NATURAL JOIN subjectlist WHERE hongik.h_id=subjectlist.id;