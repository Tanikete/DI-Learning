-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR UNIQUE NOT NULL
-- );

-- CREATE TABLE product_orders (
--     order_id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
--     order_date DATE NOT NULL
-- );

-- CREATE TABLE items (
--     item_id SERIAL PRIMARY KEY,
--     order_id INTEGER REFERENCES product_orders(order_id) ON DELETE CASCADE,
--     product_name VARCHAR NOT NULL,
--     quantity INTEGER NOT NULL,
--     price DECIMAL(10, 2) NOT NULL
-- );

-- CREATE OR REPLACE FUNCTION calculate_order_total(order_id_input INTEGER)
-- RETURNS DECIMAL(10, 2) AS $$
-- DECLARE
--     total DECIMAL(10, 2);
-- BEGIN
--     SELECT SUM(price * quantity)
--     INTO total
--     FROM items
--     WHERE order_id = order_id_input;

--     RETURN COALESCE(total, 0);
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE OR REPLACE FUNCTION calculate_user_order_total(user_id_input INTEGER, order_id_input INTEGER)
-- RETURNS DECIMAL(10, 2) AS $$
-- DECLARE
--     total DECIMAL(10, 2);
-- BEGIN
--     SELECT SUM(i.price * i.quantity)
--     INTO total
--     FROM items i
--     JOIN product_orders po ON i.order_id = po.order_id
--     WHERE i.order_id = order_id_input AND po.user_id = user_id_input;

--     RETURN COALESCE(total, 0);
-- END;
-- $$ LANGUAGE plpgsql;




