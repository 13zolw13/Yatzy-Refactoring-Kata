import { YatzyRoll } from './YatzyRoll';

export class Round implements YatzyRoll {
	score: number;
	category: string;
	constructor(score: number, category: string) {
		this.score = score;
		this.category = category;
	}
}

export class GivenGame {
	games: YatzyRoll[] = [];

	get getRounds(): YatzyRoll[] {
		return this.games;
	}

	addRound(round: YatzyRoll) {
		return this.games.find((game) => game.category === round.category)
			? null
			: this.games.push(round);
	}

	get totalRounds() {
		console.log(this.games);
		return this.games.length;
	}
}