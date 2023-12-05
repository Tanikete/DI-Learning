-- SELECT * FROM customer 

-- SELECT first_name || ' ' || last_name AS full_name
-- FROM customer;

-- SELECT DISTINCT create_date FROM customer;

-- SELECT * FROM customer ORDER BY first_name DESC

-- SELECT * FROM film

-- SELECT film_id, title, description,release_year , rental_rate FROM film ORDER BY rental_rate ASC

-- SELECT * FROM address

-- SELECT address, phone FROM address WHERE district = 'Texas'

-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'AVENGERS'


-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'av%'

-- SELECT * FROM film ORDER BY rental_rate LIMIT 10

-- SELECT * FROM film ORDER BY rental_rate OFFSET 10 FETCH FIRST 10 ROWS ONLY


-- SELECT
-- c.first_name,
-- c.last_name,
-- p.amount,
-- p.payment_date

-- FROM 
-- customer c

-- JOIN
--  payment p ON c.customer_id = p.customer_id
-- ORDER BY
--     c.customer_id, p.payment_id;

-- SELECT
--     film.*
-- FROM
--     film
-- LEFT JOIN
--     inventory ON film.film_id = inventory.film_id
-- WHERE
--     inventory.film_id IS NULL;

-- SELECT
--     city.city_id,
--     city.city,
--     country.country
-- FROM
--     city
-- JOIN
--     country ON city.country_id = country.country_id;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date,
    s.staff_id
FROM
    customer c
JOIN
    payment p ON c.customer_id = p.customer_id
JOIN
    staff s ON p.staff_id = s.staff_id
ORDER BY
    s.staff_id, c.customer_id;

