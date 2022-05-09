import assert from 'assert';
import { GivenGame, Round } from '../src/GivenGame';
import Yatzy from '../src/Yatzy';

describe(GivenGame.name, () => {
	it('should  add one game - cannot add second roll with the same category', () => {
		const game = new Yatzy(1, 2, 3, 4, 5);
		assert.strictEqual(4, game.OnesTwosTreesFourthsFivesSixes('fours'));
		const gamePlayed = new GivenGame(game.OnesTwosTreesFourthsFivesSixes('fours'), 'fours');
		const newRound = new Round(4, 'fours');

		gamePlayed.addRound(newRound);
		assert.strictEqual(1, gamePlayed.getRounds.length);
		assert.strictEqual(4, gamePlayed.getRounds[0].score);
		assert.strictEqual('fours', gamePlayed.getRounds[0].category);
	});

	it('should  add one game - cannot add second roll with the same category', () => {
		const game = new Yatzy(1, 2, 3, 4, 5);
		assert.strictEqual(4, game.OnesTwosTreesFourthsFivesSixes('fours'));
	
	});
});
