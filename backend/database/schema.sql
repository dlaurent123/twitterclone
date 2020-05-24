DROP DATABASE IF EXISTS twitter_db;
CREATE DATABASE twitter_db;

\c twitter_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS follows;
DROP TABLE IF EXISTS hashtags;


CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    user_name VARCHAR ,
    email VARCHAR UNIQUE ,
    dob VARCHAR ,
    bio VARCHAR,
    avatar VARCHAR,
    date_joined TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP

);

CREATE TABLE posts
(
    post_id SERIAL PRIMARY KEY,
    post_body VARCHAR ,
    post_image VARCHAR,
    poster_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    post_time TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    liker_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    liked_post_id INT NOT NULL REFERENCES posts(post_id) ON DELETE CASCADE
);

CREATE TABLE follows
(
    id SERIAL PRIMARY KEY,
    follower_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    user_followed_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE hashtags
(
    hashtag_id SERIAL PRIMARY KEY,
    post_hashtaged INT NOT NULL REFERENCES posts(post_id) ON DELETE CASCADE
);

-- INSERT INTO users
-- VALUES(1, 'dan@dan.com'),
--     (2, '2gina@gina.com'),
--     (3, '3gina@gina.com'),
--     (4, '4gina@gina.com'),
--     (5, '5gina@gina.com');


-- INSERT INTO follows
-- VALUES(1, 1, 3),
--     (2, 2, 1),
--     (3, 3, 1),
--     (4, 4, 1),
--     (5, 5, 1);

-- INSERT INTO posts
-- VALUES(1, 'HELLO WORLD', NULL, 1),
--     (2, 'HELLO GIRL', NULL, 2);

-- INSERT INTO likes
-- VALUES(1, 1, 1),
--     (2, 1, 1);          

