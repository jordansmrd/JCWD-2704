use sakila;
select first_name, last_name from actor;
select actor_id,first_name, last_name from actor where first_name = 'Joe';
select address,district,city_id from address where district in ('California', 'Mekka', 'Alberta');
select count(actor_id) as total_actor from actor where last_name = 'WOOD';
select sum(amount),customer_id from payment group by customer_id having sum(amount) > 20;

