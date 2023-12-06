-- CREATE TABLE movies (
--     movie_id SERIAL PRIMARY KEY,
--     movie_title VARCHAR(20),
--     movie_story TEXT,
--     actor_playing_id INT
-- );

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES
--     ('John Wick', 'John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.', 1);

-- CREATE TABLE producers (
--     producer_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(20),
--     last_name VARCHAR(20),
--     movie_id INT,
--     FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
-- );

-- INSERT INTO producers (first_name, last_name, movie_id)
-- VALUES
--     ('Chad', 'Stahelski', 1);

SELECT movies.movie_title, movies.movie_story, producers.first_name, producers.last_name
FROM movies
INNER JOIN producers ON movies.movie_id = producers.movie_id;
