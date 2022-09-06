// imports
import { Router } from 'express';
import { default as calcTotalSalary } from './salaryCalculation.js';
import data from '../data/player_data.json' assert { type: 'json' };

// initialize the router
const router = Router();

// middleware
router.use((req, res, next) => {
	// console.log('Middleware here');
	next();
});

// routes
router.get('/', (req, res) => {
	// { id: 1, name: 'Djokovic', totalSalary: 10000 }
	res.json(jsonResExample);
// localhost:8080/salary/player/{id}
});

export default router;
