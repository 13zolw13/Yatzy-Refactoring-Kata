import assert from 'assert';
import { GivenGame, Round } from '../src/GivenGame';
import Yatzy from '../src/Yatzy';

describe(GivenGame.name, () => {

	it('should correctly add one game ', () => {
		const game = new Yatzy(1, 2, 3, 4, 5);
		assert.strictEqual(4, game.OnesTwosTreesFourthsFivesSixes('fours'));
		const givenGame = new GivenGame();
		const newRound = new Round(4, 'fours');
		givenGame.addRound(newRound);

		assert.strictEqual(1, givenGame.getRounds.length);
		assert.strictEqual(4, givenGame.getRounds[0].score);
		assert.strictEqual('fours', givenGame.getRounds[0].category);
	});
	it('should  add one game - cannot add second roll with the same category', () => {
		const game = new Yatzy(1, 2, 3, 4, 5);
		assert.strictEqual(4, game.OnesTwosTreesFourthsFivesSixes('fours'));
		const givenGame = new GivenGame();
		const secondRound = new Round(4, 'fours');
		const newRound = new Round(4, 'fours');

		givenGame.addRound(newRound);
		givenGame.addRound(secondRound);

		assert.strictEqual(1, givenGame.getRounds.length);
		assert.strictEqual(4, givenGame.getRounds[0].score);
		assert.strictEqual('fours', givenGame.getRounds[0].category);
	});
	it('should correctly add two rounds ', () => {
		const game = new Yatzy(1, 2, 3, 4, 5);
		assert.strictEqual(4, game.OnesTwosTreesFourthsFivesSixes('fours'));
		const givenGame = new GivenGame();
		const secondRound = new Round(4, 'fours');
		const newRound = new Round(6, 'fives');

		givenGame.addRound(newRound);
		givenGame.addRound(secondRound);
		assert.strictEqual(2, givenGame.getRounds.length);
		assert.strictEqual(10, givenGame.totalRounds);
	});
});
