CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    phone VARCHAR(20),
    price NUMERIC(10, 2), -- NUMERIC con 10 dígitos en total y 2 decimales para el precio
    photo VARCHAR(255), -- Tipo BYTEA para almacenar la foto en formato binario
    user_id INTEGER REFERENCES users(id) -- Clave foránea que referencia al ID del usuario que la publicó
);
