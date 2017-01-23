import Car from '../models/car';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all cars
 * @param req
 * @param res
 * @returns void
 */

export function getCars(req, res) {
  console.log(req.query);
  const query = req.query;
  let skipItems = null;

  if (query.page) {
    skipItems = (query.page - 1) * 20;
  }

  if (query.minRating && query.minRating !== '1' && query.maxRating && query.maxRating !== '5') {
    query.rating = { $gt: query.minRating || 1, $lt: query.maxRating || 5 };
  }

  delete query.page;
  delete query.minRating;
  delete query.maxRating;

  console.log(query);

  Car.find(query).sort('make').skip(skipItems)
  .limit(20)
  .exec((err, cars) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ cars });
  });
}

/**
 * Get car count
 * @param req
 * @param res
 * @returns void
 */

export function getCarCount(req, res) {
  Car.count()
    .exec((err, count) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(count);
    });
}

/**
 * Save a car
 * @param req
 * @param res
 * @returns void
 */
export function addCar(req, res) {
  if (!req.body.car.model || !req.body.car.make) {
    res.status(403).end();
  }

  const newCar = new Car(req.body.car);

  Object.keys(newCar).forEach(key => {
    newCar[key] = sanitizeHtml(newCar[key]);
  });

  newCar.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ car: saved });
  });
}

/**
 * Get a single car
 * @param req
 * @param res
 * @returns void
 */
export function getCar(req, res) {
  Car.findOne({ id: req.params.id }).exec((err, car) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ car });
  });
}

/**
 * Update a car
 * @param req
 * @param res
 * @returns void
 */
export function updateCar(req, res) {
  if (!req.body.car.model || !req.body.car.make) {
    res.status(403).end();
  }

  Car.findOne({ id: req.params.id }).exec((err, car) => {
    if (err) {
      res.status(500).send(err);
    }

    const updatedCar = Object.assign(car, req.body.car);

    updatedCar.save((error, saved) => {
      if (error) {
        res.status(500).send(error);
      }
      res.json({ car: saved });
    });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteCar(req, res) {
  Car.findOne({ id: req.params.id }).exec((err, car) => {
    if (err) {
      res.status(500).send(err);
    }

    car.remove(() => {
      res.status(200).end();
    });
  });
}
