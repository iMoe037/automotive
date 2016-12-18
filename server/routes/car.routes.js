import { Router } from 'express';
import * as CarController from '../controllers/car.controller';
const router = new Router();

// Get all Cars
router.route('/cars').get(CarController.getCars);

// Get one car by id
router.route('/cars/:id').get(CarController.getCar);

// Add a new Car
router.route('/cars').post(CarController.addCar);

// Update a Car
router.route('/cars/:id').put(CarController.updateCar);

// Delete a Car
router.route('/cars').delete(CarController.deleteCar);

export default router;
