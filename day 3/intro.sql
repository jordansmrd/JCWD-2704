create database testdb; -- membuat database

show databases; -- memunculkan seluruh database
show create database testdb; -- memunculkan database yg dibuat secara manual
use testdb; -- menggunakan database
drop database testdb; -- menghapus database

create table student(id integer primary key auto_increment,
name varchar(30) not null, marks integer); -- menciptakan table student 
alter table student  add address varchar(30) not null ; -- edit table 
drop table student; -- menghapus table student 
show tables; -- memunculkan seluruh table yg ada di dalam db

insert into student(name,marks,address) values('bastoy',31,'sentul'); -- menambahkan data ke table student
select * from student; -- membaca isi table student
update student SET name = 'wewe' WHERE id = 9; -- update student name menjadi wewe 
delete from student where id = 9; -- hapus data student id 9
delete from student where name = 'bastoy';
SET SQL_SAFE_UPDATES = 0;
update student set name = 'bastian';
select * from student where name like '%toy%';
select * from student where name = 'bastoy';
select name,marks from student where marks >= 50 or name = 'bastoy';

select distinct name,marks,address from student;
select * from student where name = 'bastoy';
delete from student where id in (
select id from student where name = 'bastoy' limit 2 offset 1 );

update  student set name = 'bastuy' where id in (
select id from student where name = 'bastoy' limit 2 offset 1 );

select * from student where id in (
select id from student where name = 'bastoy' and id != 13 );
select id from student where name = 'bastoy' and id != 13 ;

select * from student order by name;
select * from student order by name desc;

delete from student where id in (1,2,3);
select * from student;

select  id,name from student;
select  count(id), name from student group by name;

select count(id) as total ,name from student group by name having total > 1;

insert into student(name,marks,address) values('krystal',88,'');

insert into student(name,marks,address) values('bastoy',31, 'sentul'),
 ('krystal', 50,'kosong kosong omong kosong'), 
 ('udin', 100, 'jakarta'), 
 ('ujang',80, 'cianjur');  



start transaction;
delete from student;
rollback;
-- commit;
-- rollback;

-- sql server, workbench
-- service , username, password 




