const express = require('express');
const axios = require('axios');
const port = 3005;
const app = express();
const pool = require('./connect.js');
const helpers = require('./dataHelpers.js');

app.use('/', express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/characters', (req, res) => {
  let { user, region, realm, charname } = req.body;
  let query = {
    text: 'INSERT INTO characters(username, region, realm, charname) VALUES($1, $2, $3, $4)',
    values: [user, region, realm, charname],
  }
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err.stack);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.get('/getsquad', (req, res) => {
  console.log(req.query);
  let { user1, user2, user3, user4, user5 } = req.query;
  let query = {
    text: 'SELECT * FROM characters where username=$1 OR username=$2 OR username=$3 OR username=$4 OR username=$5',
    values: [user1, user2, user3, user4, user5],
  }
  pool.query(query, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      let { rows } = results;
      // console.log(rows);
      helpers.getRatings(rows, (err, ratings) => {
        console.log(rows);
        if (err) {
          res.send(err);
        } else {
          console.log(ratings);
          res.send(ratings);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Squad Blaster listening on port ${port}`);
});