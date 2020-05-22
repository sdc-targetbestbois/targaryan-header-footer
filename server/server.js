const express = require('express');
const path = require("path");
const cors = require('cors')
const port = 9003;
const db = require('../database/query');
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

app.get('/api/items', (req, res) => {
  let id = req.query.id
  db.find(id, (err, data) => {
    if (err) {
      res.status(500).send("Error getting item from server")
    } else {
      res.send(data);
    }
  })
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
