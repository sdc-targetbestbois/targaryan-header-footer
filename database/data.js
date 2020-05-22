const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');
var counter = 0;

// console.log(faker.fake("{{commerce.productName}}, {{commerce.department}}"));

const generateData = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (var i = 0; i < 10000000; i++) {
    writer.write({
      id: counter++,
      name: faker.commerce.productName(),
      category: faker.commerce.department()
    })
  }
  writer.end();
  console.log("done");
};

generateData();
