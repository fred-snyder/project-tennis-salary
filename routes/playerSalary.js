// localhost:8080/salary/player/{id}

// JSON response http status code: 200

const jsonResExample = {
	id: 0,
	name: 'Fred',
	totalSalary: 20000,
};

// imports
import { Router } from 'express';
import { default as calcTotalSalary } from './salaryCalculation.js';
import data from '../data/player_data.json' assert { type: 'json' };

// initialize the router
const router = Router();

// middleware
router.use((req, res, next) => {
	console.log('Middleware here');
	next();
});

// routes
router.get('/', (req, res) => {
	// { id: 1, name: 'Djokovic', totalSalary: 10000 }
	res.json(jsonResExample);
});

export default router;
