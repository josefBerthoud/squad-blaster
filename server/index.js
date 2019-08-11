const express = require('express');
const port = 3005;
const app = express();

app.use('/', express.static(__dirname + '/../client/dist'))

app.listen(port, () => {
  console.log(`Squad Blaster listening on port ${port}`);
});