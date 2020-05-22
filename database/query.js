const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect("mongodb://127.0.0.1:27017/targaryan", {useNewUrlParser: true})
.then(() => {
  console.log("database connected!")
})
.catch(err => {
  console.error("database connection error!")
})


var schema = new mongoose.Schema({id: Number, name: String, category: String})
const products = mongoose.model("product", schema)

const find = (id, callback) => {
  console.log(typeof id)
  var obj = {id: id}
  products.find(obj).lean().exec((err, data) => {
    if (err) {
      console.log("Could not find item in queries!", err);
      callback(err, null)
    } else {
      callback(null, data);
    }
  })
};

const save = (item, callback) => {
  let doc = new products(item);

  doc.save((err, data) => {
    if (err) {
      console.log("Could not save item!")
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

const update = (id, body, callback) => {
  products.findOneAndUpdate({id: id}, body, {useFindAndModify: false}, (err, data) => {
    if (err) {
      console.log("Could not update data!");
      callback(err, null);
    } else {
      callback(null, data)
    }
  })
};

const remove = (id, callback) => {
  products.deleteOne({id: id}, (err, data) => {
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