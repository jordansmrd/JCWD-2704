create database purwadhika_student;
create database purwadhika_schedule;
create database purwadhika_branch;

show databases like 'purwadhika%';
drop database purwadhika_schedule;

create table student (id integer primary key auto_increment, last_name varchar(20),
 first_name varchar(20), address varchar(50),city varchar(20));
alter table student add column email varchar(20);

alter table student add column gender enum('male','female'),
add column batch_code varchar(10), add column phone_number char(12)
,add column alternative_phone_number char(12);


alter table student  rename column alternative_phone_number to description;
alter table student modify column description varchar(50);
alter table student drop column gender;

use purwadhika_branch;
create table branch (id int primary key auto_increment,branch_name varchar(20),pic varchar(20), address varchar(20), city varchar(20), province varchar(20) );
insert into branch (branch_name,pic,address,city,province) 
values('BSD','THOMAS','Green Office Park 9', 'BSD', 'TANGERANG'),
('JKT','BUDI','MSIG TOWER', 'JAKARTA SELATAN', 'JAKARTA'),
('BTM','ANGEL','NONGSA', 'BATAM', 'KEP. RIAU');

select * from branch;

update  branch set pic = 'Dono' where branch_name = 'BSD';
insert into branch (branch_name,pic,address,city,province) values('BLI','Tono','Gianyar', 'Gianyar', 'Bali');
set sql_safe_updates = 0;



