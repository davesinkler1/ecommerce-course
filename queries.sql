INSERT INTO `products` (name, product, price, description, stock)
VALUES (NULL, NULL, NULL, NULL, NULL)

SELECT name, product, price, description, stock FROM products;

UPDATE products
SET name = NULL, product = NULL, price = NULL, description = NULL, stock = NULL
WHERE price is NOT NULL;

DELETE FROM products WHERE name = NULL;