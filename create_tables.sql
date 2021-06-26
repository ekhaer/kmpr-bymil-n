-- Creation of USER table
-- CREATE TABLE IF NOT EXISTS Users (
--   id SERIAL,
--   username VARCHAR(256) NOT NULL,
--   email VARCHAR(256) NOT NULL,
--   password TEXT NOT NULL,
--   createdAt TIMESTAMP,
--   updatedAt TIMESTAMP,
--   PRIMARY KEY (id)
-- );

-- Creation of ARTICLE table
CREATE TABLE IF NOT EXISTS Articles (
  id SERIAL,
  title TEXT,
  author TEXT,
  body TEXT,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  PRIMARY KEY (id)
);