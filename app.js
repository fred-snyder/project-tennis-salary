// app
console.log('Tennis Player Salaries');

// sample data
const matches = [
	{
		playerId: 1,
		opponentId: 2,
		result: [
			[6, 2],
			[4, 6],
			[7, 5],
			[5, 7],
			[6, 1],
		],
		aces: [6, 15],
		smashedRackets: [2, 1],
		doubleFaults: [3, 4],
	},
];

/*
 * 500e        for every match played
 * 200e        per game won
 * 750e        per set won
 * 2500e       per match won
 */

// calculate the number of sets/games won and if the match is won
// and return the score/prize/winnings for that match
function calcMatchSalary(arr, playerIndex) {
	// count the scores/winnings
	let [setsWon, gamesWon, matchWon] = [0, 0, 0];
	let matchPlayed = 500;

	arr.forEach((el) => {
		// count a winning set for player
		if (el[0] >= el[1] && playerIndex === 0) {
			setsWon++;
		}
		// count a winning set for opponont
		if (el[0] <= el[1] && playerIndex === 1) {
			setsWon++;
		}
		// count the number of games won
		gamesWon = gamesWon + el[playerIndex];

		// check if the match is won
		setsWon >= 3 ? matchWon++ : null;
	});

	let matchSalary = setsWon * 750 + gamesWon * 200 + matchWon * 2500 + matchPlayed;
	// console.log('setsWon:', setsWon, 'gamesWon:', gamesWon, 'matchWon:', matchWon, 'matchSalary:', matchSalary);

	return matchSalary;
}

// example for calcMatchSalary
// calcMatchSalary([[6,2],[4,6],[7,5],[5,7],[6,1]], 1)

/*
 * 100e        for every ace
 * -500e       for every smashed racket
 * -100e       for every double fault
 */

// calculate the other match statistics, aces, faults, rackets
function calcStatsSalary(arrAces, arrRackets, arrFaults, playerIndex) {
	// counters
	let [salaryAces, salaryFaults, salaryRackets] = [0, 0, 0];

	salaryAces = arrAces[playerIndex] * 100;
	salaryFaults = arrFaults[playerIndex] * -100;
	salaryRackets = arrRackets[playerIndex] * -500;

	let salaryStats = salaryAces + salaryFaults + salaryRackets;
	// console.log('Salary stats:', salaryStats);

	return salaryStats;
}

// example for calcStatsSalary
// calcStatsSalary([6, 15], [2, 1], [3, 4], 1);

// calculate the total salary
function calcTotalSalary(id) {
	// count total salary for id
	let totalSalary = 0;

	matches.forEach((el) => {
		// find the array index that we have to sum/analyse
		let playerIndex;
		if (el.playerId === id) {
			playerIndex = 0;
		} else if (el.opponentId === id) {
			playerIndex = 1;
		}

		// calculate the salary for the match and add to total
		totalSalary = totalSalary + calcMatchSalary(el.result, playerIndex);

		// calculate the salary for the stats
		totalSalary = totalSalary + calcStatsSalary(el.aces, el.smashedRackets, el.doubleFaults, playerIndex);
	});

	console.log(`Total salary for player#${id}: EUR ${totalSalary}e`);

	return totalSalary;
}

calcTotalSalary(1); // for id:1 should be 10150
calcTotalSalary(2); // for id:2 should be 6800
