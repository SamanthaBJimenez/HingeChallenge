DROP DATABASE IF EXISTS hinge_db;
CREATE DATABASE hinge_db;

\c hinge_db;

DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT UNIQUE,
    bio VARCHAR
);

INSERT INTO Users (id, name, email, password, bio)
    VALUES ('1', 'Demo User', 'demo@gmail.com', 'demodemo123', 'Hey, I am a demo user!' ),
            ('2', 'Jane', 'jane@gmail.com', 'janejane123', 'My name is Jane and this is my bio.');