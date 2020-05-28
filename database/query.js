const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(`mongodb://${config.url}`, {useNewUrlParser: true})
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

module.exports = {
  find,
  save,
  update,
  remove
};
