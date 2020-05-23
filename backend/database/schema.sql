DROP DATABASE IF EXISTS twitter_db;
CREATE DATABASE twitter_db;

\c twitter_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;

CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    email TEXT UNIQUE

);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    post_text VARCHAR ,
    image VARCHAR,
    poster_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    liker_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    liked_post INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO users
VALUES(1, 'dan@dan.com'),
    (2, 'gina@gina.com');

INSERT INTO posts
VALUES(1, 'HELLO WORLD', NULL, 1),
    (2, 'HELLO GIRL', NULL, 2);

INSERT INTO likes
VALUES(1, 1, 1),
    (2, 1, 1);          

