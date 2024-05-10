use sakila;
select * from actor;
insert into actor (first_name,last_name) values ('JHONNY','DAVIS');
insert into actor (first_name,last_name) values ('ADAM','DAVIS'),('JEREMY','DAVIS'),('CRAIG','DAVIS'),('STEVE','DAVIS');
SELECT count(first_name) from actor where last_name = 'DAVIS';
delete from actor where last_name = 'DAVIS' and first_name = 'JENNIFER';
update actor set last_name = 'GEORGE' where last_name = 'DAVIS';

select first_name,last_name, count(first_name) total_film from actor a
join film_actor fa on fa.actor_id = a.actor_id
group by first_name,last_name 
order by total_film desc
limit 10;

select * from film_actor;
-- 1 to 1 
-- 1 to many
-- many to many => link table 
-- customer dengan payment 
select * from film_actor;

select title, description, length, rating from film where special_features like '%Deleted Scenes,Behind the Scenes%';

select count(cus.customer_id) total,c.country from country c
join city ct on ct.country_id = c.country_id
join address a on a.city_id = ct.city_id
join customer cus on cus.address_id = a.address_id and cus.active = 0
-- where cus.active = 0
group by c.country
order by total desc;


select * from actor afilm_actor
left join film_actor fa on fa.actor_id = a.actor_id
where fa.film_id is null;
 
select * from film_actor fa
right join actor a on fa.actor_id = a.actor_id
where fa.film_id is null;


-- customer > country--  

select * from customer;
select * from address;
select * from city;
select * from country;

