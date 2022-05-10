import assert from 'assert';
import { GivenGame } from '../src/GivenGame';
import { Round } from '../src/Round';

describe(GivenGame.name, () => {
	describe('Add only one new round', () => {
		it('should correctly add one game ', () => {
			const givenGame = new GivenGame();
			const newRound = new Round(4, 'fours');
			givenGame.addRound(newRound);

			assert.strictEqual(1, givenGame.getRounds.length);
			assert.strictEqual(4, givenGame.getRounds[0].score);
			assert.strictEqual('fours', givenGame.getRounds[0].category);
		});
	});
	describe('Add two rounds', () => {
		it('should  add one game - cannot add second roll with the same category', () => {
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

			const givenGame = new GivenGame();
			const secondRound = new Round(4, 'fours');
			const newRound = new Round(6, 'fives');

			givenGame.addRound(newRound);
			givenGame.addRound(secondRound);
			assert.strictEqual(2, givenGame.getRounds.length);
			assert.strictEqual(10, givenGame.totalRounds);
		});
	});
	describe('Given method', () => {
		it('should  return one less category to play', () => {
			const givenGame = new GivenGame();
			const secondRound = new Round(4, 'fours');

			const newGiven = givenGame.given(secondRound);
			assert.strictEqual(1, givenGame.getRounds.length);
			assert.strictEqual(4, givenGame.getRounds[0].score);
			assert.strictEqual('fours', givenGame.getRounds[0].category);
			assert.strictEqual(12, newGiven.length);
		});
	});
});
