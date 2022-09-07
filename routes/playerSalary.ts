// imports
import { Router } from 'express';
import { default as calcTotalSalary } from './salaryCalculation.js';
import importedJson from '../data/player_data.json' assert { type: 'json' };

// NOTE: type hack??
const json: any = importedJson;
const data: tennisData = json;

// initialize the router
const router = Router();

// middleware
router.use((req, res, next) => {
	// tslint:disable-next-line:no-console
	// console.log('Middleware here');
	next();
});

// routes
// localhost:8080/salary/player/{id}
router.get('/:id', (req, res) => {
	const responseObj = calcTotalSalary(data, parseInt(req.params.id));
	// null means 'error id not found'
	if (responseObj !== null) {
		res.json(responseObj);
	} else {
		res.statusCode = 404;
		res.json({ msg: `No player with id# ${parseInt(req.params.id)} found.` });
	}
});

export default router;
