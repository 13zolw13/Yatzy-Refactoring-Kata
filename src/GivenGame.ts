import { YatzyRoll } from './YatzyRoll';

export class GivenGame {
	games: YatzyRoll[] = [];
	protected categories: string[] = [
		'ones',
		'twos',
		'threes',
		'fours',
		'fives',
		'sixes',
		'threeOfAKind',
		'fourOfAKind',
		'fullHouse',
		'smallStraight',
		'largeStraight',
		'yahtzee',
		'chance',
	];

	get getRounds(): YatzyRoll[] {
		return this.games;
	}

	addRound(round: YatzyRoll) {
		return this.games.find((game) => game.category === round.category)
			? null
			: this.games.push(round);
	}

	get totalRounds() {
		return this.games.reduce((a, b) => a + b.score, 0);
	}

	given(round: YatzyRoll) {
		const categoryNotYetPlayed = this.categories.filter((category) => category !== round.category);
		categoryNotYetPlayed.length < this.categories.length ? this.addRound(round) : null;
		this.categories = categoryNotYetPlayed;
		return this.categories;
	}
	score() {
		return this.totalRounds;
	}
}
