import assert from 'assert';
import { GivenGame } from '../src/GivenGame';
import Yatzy from '../src/Yatzy';

describe('Name of the group', () => {
	it('should ', () => {
		const game = new Yatzy(1, 2, 3, 4, 5);
		assert.strictEqual(4, game.OnesTwosTreesFourthsFivesSixes('fours'));
		const gamePlayed = new GivenGame({
			score: game.OnesTwosTreesFourthsFivesSixes('fours'),
			category: 'fours',
		});
		gamePlayed.setRounds();
		gamePlayed.setRounds();
		gamePlayed.setRounds();
		gamePlayed.setRounds();

		assert.strictEqual(1, gamePlayed.getRounds.length);
		assert.strictEqual(4, gamePlayed.getRounds[0].score);
		assert.strictEqual('fours', gamePlayed.getRounds[0].category);
	});
});
