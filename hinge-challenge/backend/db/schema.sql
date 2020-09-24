DROP DATABASE IF EXISTS hinge_db;
CREATE DATABASE hinge_db;

\c hinge_db;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Photos;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT UNIQUE,
    bio VARCHAR
);

CREATE TABLE Photos (
    id SERIAL PRIMARY KEY,
    photo1url VARCHAR,
    photo2url VARCHAR,
    photo3url VARCHAR,
    photo4url VARCHAR,
    photo5url VARCHAR,
    photo6url VARCHAR,
    userid INT REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO Users (id, name, email, password, bio)
    VALUES ('1', 'Demo User', 'demo@gmail.com', 'demodemo123', 'Hey, I am a demo user!' ),
            ('2', 'Jane', 'jane@gmail.com', 'janejane123', 'My name is Jane and this is my bio.'),
            ('3', 'Reese', 'reese@gmail.com', 'reesereese123', 'Hey, just moved to New York!');

INSERT INTO Photos (id, photo1url, photo2url, photo3url, photo4url, photo5url, photo6url, userid)
    VALUES ('10', 'person11', null, null, null, null, null, '1'),
            ('11', 'person31', null, null, null, null, null, '2'),
            ('12', 'person43', null, null, null, null, null, '3');            