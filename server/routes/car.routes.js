import { Router } from 'express';
import * as CarController from '../controllers/car.controller';
const router = new Router();

// Get all Cars
router.route('/cars').get(CarController.getCars);

// Get car count
router.route('/carcount').get(CarController.getCarCount);

// Get one car by id
router.route('/cars/:id').get(CarController.getCar);

// Add a new Car
router.route('/cars').post(CarController.addCar);

// Update a Car
router.route('/cars/:id').put(CarController.updateCar);

// Delete a Car
router.route('/cars/:id').delete(CarController.deleteCar);

export default router;
