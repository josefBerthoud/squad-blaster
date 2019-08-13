DROP TABLE characters;

CREATE TABLE IF NOT EXISTS characters (
  username varchar(30),
  region varchar(10),
  realm varchar(30),
  charname varchar (30) PRIMARY KEY
);

CREATE INDEX chars_by_user ON characters(username);
