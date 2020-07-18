-- DROP DATABASE IF EXISTS twitter_db;
-- CREATE DATABASE twitter_db;

-- \c twitter_db;

-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS posts;
-- DROP TABLE IF EXISTS likes;
-- DROP TABLE IF EXISTS follows;
-- DROP TABLE IF EXISTS hashtags;



CREATE TABLE users
(
    user_id VARCHAR PRIMARY KEY UNIQUE,
    user_name VARCHAR UNIQUE ,
    email VARCHAR UNIQUE,
    name VARCHAR ,
    dob VARCHAR ,
    bio VARCHAR,
    location VARCHAR,
    website VARCHAR DEFAULT NULL,
    banner_img VARCHAR DEFAULT NULL,
    avatar VARCHAR DEFAULT NULL,
    date_joined DATE NOT NULL DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE posts
(
    post_id SERIAL PRIMARY KEY ,
    post_body VARCHAR ,
    poster_id VARCHAR NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    post_image VARCHAR DEFAULT NULL,
    post_time TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP
);

-- CREATE TABLE likes
-- (
--     like_id SERIAL PRIMARY KEY,
--     liker_id VARCHAR NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
--     liked_post_id INT NOT NULL REFERENCES posts(post_id) ON DELETE CASCADE
-- );

-- CREATE TABLE follows
-- (
--     follow_id SERIAL PRIMARY KEY,
--     follower_id VARCHAR NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
--     user_followed_id VARCHAR NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
-- );

-- CREATE TABLE hashtags
-- (
--     hashtag_id SERIAL PRIMARY KEY,
--     hashtag VARCHAR,
--     post_hashtaged INT NOT NULL REFERENCES posts(post_id) ON DELETE CASCADE
-- );

INSERT INTO users
VALUES(1, 'bigDan', 'dan@gmail.com');

INSERT INTO users
VALUES(2, 'mikey', 'mike@gmail.com');

INSERT INTO users
VALUES
    (3, 'timmyTurner', 'tim@gmail.com');

INSERT INTO users
VALUES
    (4, 'damnGina' , 'gina@gmail.com');

INSERT INTO users
VALUES
    (5, 'jesTheMess', 'jes@gmail.com');


-- INSERT INTO follows
-- VALUES(1, 1, 3),
--     (2, 2, 1),
--     (3, 3, 1),
--     (4, 4, 1),
--     (5, 5, 1);

INSERT INTO posts
VALUES(1, 'HELLO WORLD', 1),
    (2, 'HELLO!!!!', 2);

-- INSERT INTO likes
-- VALUES(1, 1, 1),
--     (2, 1, 1);

-- INSERT INTO hashtags
-- VALUES(1, 'shremlife', 2),
--     (2, 'happy', 1);        

