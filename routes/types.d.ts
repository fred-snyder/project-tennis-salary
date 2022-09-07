type player = {
	id: string;
	name: string;
};

type match = {
	playerId: number;
	opponentId: number;
	result: [number, number][];
	aces: [number, number];
	smashedRackets: [number, number];
	doubleFaults: [number, number];
};

type tennisData = [
	{
		players: player[];
		matches: match[];
	}
];
