const newrelic = require('newrelic')
const express = require('express');
const path = require("path");
const cors = require('cors');
const port = 9002;
const db = require('../database/query');
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

app.get("/loaderio-403b31a9496f9da28bde64b1304bd670/", (req, res) => {
  res.send('loaderio success!')
})

app.get('/api/items', (req, res) => {
  db.find(req.query.id, (err, data) => {
    if (err) {
      res.status(500).send("Error getting item from server")
    } else {
      res.send(data);
    }
  })
});

app.post('/api/items', (req, res) => {
  db.save(req.body, (err, data) => {
    if (err) {
      res.status(500).send("Error adding item from server", err);
    } else {
      res.send(data);
    }
  })
});

app.put('/api/items', (req, res) => {
  console.log(req.body)
  db.update(req.body.id, req.body, (err, data) => {
    if (err) {
      res.status(500).send("Error updating item from server", err)
    } else {
      res.send(data);
    }
  })
});

app.delete('/api/items', (req, res) => {
  console.log(req.body)
  db.remove(req.body.id, (err, data) => {
    if (err) {
      res.status(500).send("Error deleting item from server", err)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
