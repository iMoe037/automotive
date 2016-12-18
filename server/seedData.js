import Car from './models/car';
import * as fs from 'fs';
import path from 'path';

export default function () {
  Car.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    const dataPath = path.join(__dirname, '/data.json');
    const data = JSON.parse(fs.readFileSync(dataPath));

    const wrapData = data.map(elem => new Car(elem));

    Car.create(wrapData, error => {
      if (error) {
        console.error(error); // eslint-disable-line no-console
      }
    });
  });
}
