// salary calculation logic

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

// calculate the total salary
function calcTotalSalary(data, id) {
	const matches = data[0].matches;
	const players = data[0].players;

	// count total salary for id
	let totalSalary = 0;
	let playerName;

	players.forEach((el) => {
		if (el.id === id) {
			playerName = el.name;
		}
	});

	// verify that the id was found
	if (playerName === undefined) {
		console.log(`Error: player with id #${id} not found.`);
		return null;
	}

	matches.forEach((el) => {
		// find the array index that we have to sum/analyse
		let playerIndex;
		if (el.playerId === id) {
			playerIndex = 0;
		} else if (el.opponentId === id) {
			playerIndex = 1;
		} else if (el.opponentId !== id && el.playerId !== id) {
			playerIndex = null;
		}

		// skip matches that do not include the id
		if (playerIndex !== null) {
			// calculate the salary for the match and add to total
			totalSalary = totalSalary + calcMatchSalary(el.result, playerIndex);
			// calculate the salary for the stats
			totalSalary = totalSalary + calcStatsSalary(el.aces, el.smashedRackets, el.doubleFaults, playerIndex);
		}
	});

	console.log(`Total salary for player with name ${playerName} and id#${id}: EUR ${totalSalary}e`);

	const obj = {
		id: id,
		name: playerName,
		totalSalary: totalSalary,
	};

	return obj;
}

export default calcTotalSalary;
