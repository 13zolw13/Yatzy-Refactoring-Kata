import { YatzyRoll } from './YatzyRoll';

export class GivenGame {
	games: YatzyRoll[] = [];
	round: YatzyRoll;
	constructor(round: YatzyRoll) {
		this.round = round;
	}

	get getRounds(): YatzyRoll[] {
		return this.games;
	}

	setRounds() {
		return this.games.find((game) => game.category === this.round.category)
			? null
			: this.games.push(this.round);
	}
}
