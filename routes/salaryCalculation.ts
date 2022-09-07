// salary calculation logic

// calculate the number of sets/games won and if the match is won
// and return the score/prize/winnings for that match
function calcMatchSalary(arr: match['result'], playerIndex: number) {
	// NOTE: not sure if it's better to use match['result'] or [number. number][]
	// count the scores/winnings
	let [setsWon, gamesWon, matchWon]: [number, number, number] = [0, 0, 0];
	let matchPlayed: number = 500;

	arr.forEach((el) => {
		console.log(el);
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
	// tslint:disable-next-line:no-console
	// console.log('setsWon:', setsWon, 'gamesWon:', gamesWon, 'matchWon:', matchWon, 'matchSalary:', matchSalary);

	return matchSalary;
}

// calculate the other match statistics, aces, faults, rackets
function calcStatsSalary(
	arrAces: match['aces'],
	arrRackets: match['smashedRackets'],
	arrFaults: match['doubleFaults'],
	playerIndex: number
) {
	// counters
	let [salaryAces, salaryFaults, salaryRackets]: [number, number, number] = [0, 0, 0];

	salaryAces = arrAces[playerIndex] * 100;
	salaryFaults = arrFaults[playerIndex] * -100;
	salaryRackets = arrRackets[playerIndex] * -500;

	let salaryStats = salaryAces + salaryFaults + salaryRackets;
	// console.log('Salary stats:', salaryStats);

	return salaryStats;
}

// calculate the total salary
function calcTotalSalary(data: tennisData, id: number) {
	const matches = data[0].matches;
	const players = data[0].players;

	// count total salary for id
	let totalSalary: number = 0;
	let playerName: string = '';

	players.forEach((el) => {
		if (parseInt(el.id) === id) {
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
		let playerIndex: number | null = null;
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

	// tslint:disable-next-line:no-console
	console.log(`Total salary for player with name ${playerName} and id#${id}: EUR ${totalSalary}e`);

	const obj = {
		id: id,
		name: playerName,
		totalSalary: totalSalary,
	};

	return obj;
}

export default calcTotalSalary;
