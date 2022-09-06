import express from 'express';
import { default as playerSalary } from './routes/playerSalary.js';

// app
console.log('Tennis Player Salaries');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;

const app = express();

app.use('/salary/player', playerSalary);

app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${HOST}:${PORT}`);
});
