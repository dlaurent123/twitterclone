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

CREATE TABLE hashtags
(
    hashtag_id SERIAL PRIMARY KEY,
    hashtag VARCHAR,
    post_hashtaged INT NOT NULL REFERENCES posts(post_id) ON DELETE CASCADE
);

INSERT INTO users
VALUES('piaN8VQJ5ufz3jvKmD99HvoiOAE2', 'sarah_xo', 'check@gmail.com', 'Sarah B');

INSERT INTO users
VALUES('MfRhJ0Cg9PQ7AwnntDMNSwMj6Si1', 'mikey', 'user3@gmail.com', 'Mike Jones');

INSERT INTO users
VALUES
    ('wc373faRjFb46DmOmKTonOgsP0S2', 'timmy_turner', 'user1@gmail.com', 'Timmy');

INSERT INTO users
VALUES
    ('y15mmoTQeEWk5bc3M7mq0ZFTAqI3', 'demo_user' , 'dejones@gmail.com', 'Demo');

INSERT INTO users
VALUES
    ('uCGJkq1N3NdfSvH1RiR2wfvjUCy1', 'corsky', 'corey@pursuit.org', 'Corey', 'March 4 1990');


-- INSERT INTO follows
-- VALUES(1, 1, 3),
--     (2, 2, 1),
--     (3, 3, 1),
--     (4, 4, 1),
--     (5, 5, 1);

INSERT INTO posts
VALUES(1, 'HELLO WORLD', 'y15mmoTQeEWk5bc3M7mq0ZFTAqI3'),
    (2, 'this is the best clone ever!!!', 'piaN8VQJ5ufz3jvKmD99HvoiOAE2');

-- INSERT INTO likes
-- VALUES(1, 1, 1),
--     (2, 1, 1);

-- INSERT INTO hashtags
-- VALUES(1, 'shremlife', 2),
--     (2, 'happy', 1);        

