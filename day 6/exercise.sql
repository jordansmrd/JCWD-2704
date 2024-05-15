use world;
select name from country order by population desc limit 1;
select name from country order by population desc limit 1,1;
select name from country order by population asc limit 1;
select name from country order by population asc limit 2,1;
select continent, sum(surfaceArea) total  from country where lifeExpectancy > 75 group by continent order by total desc limit 1;

use sakila;

select country_id,country from country where country in ('China','Bangladesh','India');
select * from actor where last_name like '%od%' order by last_name,first_name;

alter table actor add column middle_name varchar(100) after first_name;

select count(actor_id)total,last_name from actor group by last_name having total>=2;

select first_name,last_name,address from staff s
join address a on a.address_id = s.address_id;

select count(f.film_id) total_copies , title from inventory i
join film f on f.film_id = i.film_id
where title = 'Hunchback Impossible';

select title,count(f.film_id) total from rental r
join inventory i on i.inventory_id = r.inventory_id
join film f on f.film_id = i.film_id
group by title
order by total desc;

select s.store_id,city,country from store s
join address a on a.address_id = s.address_id
join city ct on ct.city_id = a.city_id
join country c on c.country_id = ct.country_id;

select * from film f
where title = 'alone trip';

select a.first_name,a.last_name from film_actor fa 
join actor a on a.actor_id = fa.actor_id
where fa.film_id in (select film_id from film f
where title = 'alone trip');

alter table actor drop column middle_name;

