const mongoose = require('mongoose');
const config = require('./config');

const connection = mongoose.connect("mongodb://127.0.0.1:27017/", {useNewUrlParser: true})
.then(() => {
  console.log("database connected!")
})
.catch(err => {
  console.error("database connection error!")
})

// mongoose.connection.once('open', () => {
//   console.log('Connected to mongoDB')
// }).on('error', (error) => {
//   console.log('Connection failed: ', error);
// })

// const getItems = (callback) => {
//   connection.collection.find('SELECT * FROM items', (err, items) => {
//     if (err) {
//       console.log('problem querying for items');
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

var schema = new mongoose.Schema({id: Number, name: String, category: String})
const db = mongoose.model("products", schema)

const find = (id, callback) => {
  db.find(id, (err, data) => {
    if (err) {
      console.log("Could not find item in queries!");
      callback(err, null)
    } else {
      callback(null, data);
    }
  })
};

const save = (item, callback) => {
  let doc = new db(item);

  doc.save((err, data) => {
    if (err) {
      console.log("Could not save item!")
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

const update = (body, callback) => {
  db.updateOne({id: body.id, name: body.name, category: body.category}, (err, data) => {
    if (err) {
      console.log("Could not update data!");
      callback(err, null);
    } else {
      callback(null, data)
    }
  })
};

const remove = (id, callback) => {
  db.deleteOne({id: id}, (err, data) => {
    if (err) {
      console.log("could not delete item!");
      callback(err, null)
    } else {
      callback(null, data);
    }
  })
}
//***************************
// Add new functions as needed
//***************************
module.exports = {
  // db,
  find,
  save,
  update,
  remove
};


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
// });

// let Repo = mongoose.model('Repo', repoSchema);

// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }

// module.exports.save = save;