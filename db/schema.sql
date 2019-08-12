DROP TABLE characters;
DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
  username varchar(30) PRIMARY KEY,
  password varchar(30),
  email varchar(55)
);

CREATE TABLE IF NOT EXISTS characters (
  username varchar(30) REFERENCES users,
  region varchar(10),
  realm varchar(30),
  charname varchar (30)
);

CREATE INDEX chars_by_user ON characters(username);
