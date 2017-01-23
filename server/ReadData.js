const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '/data.json');
const data = JSON.parse(fs.readFileSync(dataPath));

let price = [];

data.forEach(elem => {
  if (elem.price && price.indexOf(elem.price) === -1) {
    price.push(parseInt(elem.price, 10));
  }
});

price = price.sort();
console.log(price);
