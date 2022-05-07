import assert from 'assert';
import Yatzy from '../src/Yatzy';

describe(Yatzy.name, () => {
	describe('Chance', () => {
		it('should scores sum of all dice', () => {
			const game = new Yatzy(1, 2, 3, 4, 5);
			assert.strictEqual(game.chance(), 15);
		});
		it('should scores sum of all dice', () => {
			const game = new Yatzy(2, 2, 2, 2, 2);
			assert.strictEqual(game.chance(), 10);
		});
	});

	describe('Yatzy', () => {
		it('should scores 50, dices have different number', () => {
			const game = new Yatzy(1, 1, 1, 1, 1);
			assert.strictEqual(game.yatzy(), 50);
		});
		it('should scores 50, dices have different number', () => {
			const game = new Yatzy(2, 2, 2, 2, 2);
			assert.strictEqual(game.yatzy(), 50);
		});
		it('should return 0 - dices have different number', () => {
			const game = new Yatzy(6, 1, 1, 1, 1);
			assert.strictEqual(game.yatzy(), 0);
		});
	});

	describe('Ones', () => {
		it('score the sum of 1s', () => {
			const game = new Yatzy(1, 2, 2, 2, 2);
			assert.strictEqual(1, game.OnesTwosTreesFourthsFivesSixes('ones'));
		});
		it('score the sum of 1s', () => {
			const game = new Yatzy(1, 1, 2, 2, 2);
			assert.strictEqual(2, game.OnesTwosTreesFourthsFivesSixes('ones'));
		});
		it('score the sum of 1s, should return 0 ', () => {
			const game = new Yatzy(2, 2, 2, 2, 2);
			assert.strictEqual(0, game.OnesTwosTreesFourthsFivesSixes('ones'));
		});
	});
	

	describe('Twos', () => {
		it('score the sum of 2s', () => {
			const game = new Yatzy(1, 2, 2, 2, 2);
			assert.strictEqual(8, game.OnesTwosTreesFourthsFivesSixes('twos'));
		});

		it('score the sum of 2s', () => {
			const game = new Yatzy(1, 1, 1, 1, 1);
			assert.strictEqual(0, game.OnesTwosTreesFourthsFivesSixes('twos'));
		});
	});

	describe('Threes', () => {
		it('score the sum of 3s', () => {
			const game = new Yatzy(1, 2, 3, 4, 5);

			assert.strictEqual(3, game.OnesTwosTreesFourthsFivesSixes('threes'));
		});

		it('score the sum of 3s', () => {
			const game = new Yatzy(3, 3, 3, 4, 5);

			assert.strictEqual(9, game.OnesTwosTreesFourthsFivesSixes('threes'));
		});
		
		it('score the sum of 3s', () => {
			const game = new Yatzy(2, 2, 1, 4, 5);

			assert.strictEqual(0, game.OnesTwosTreesFourthsFivesSixes('threes'));
		});
	});

	describe('Fours', () => {
		it('score the sum of 4s', () => {
			const game = new Yatzy(4, 4, 4, 4, 5);
			assert.strictEqual(16, game.OnesTwosTreesFourthsFivesSixes('fours'));
		});
		it('score the sum of 4s', () => {
			const game = new Yatzy(3, 4, 4, 4, 5);
			assert.strictEqual(12, game.OnesTwosTreesFourthsFivesSixes('fours'));
		});
		it('score the sum of 4s', () => {
			const game = new Yatzy(3, 3, 3, 3, 5);
			assert.strictEqual(0, game.OnesTwosTreesFourthsFivesSixes('fours'));
		});
	});

	describe('Fives', () => {
		it('score the sum of fives', () => {
			const game = new Yatzy(5, 5, 5, 5, 5);
			assert.strictEqual(25, game.OnesTwosTreesFourthsFivesSixes('fives'));
		});
		it('score the sum of fives', () => {
			const game = new Yatzy(3, 3, 3, 3, 5);
			assert.strictEqual(5, game.OnesTwosTreesFourthsFivesSixes('fives'));
		});
		it('score the sum of fives', () => {
			const game = new Yatzy(3, 3, 3, 3, 0);
			assert.strictEqual(0, game.OnesTwosTreesFourthsFivesSixes('fives'));
		});
	});

	describe('Sixes', () => {
		it('score the sum of sixes', () => {
			const game = new Yatzy(6, 6, 6, 6, 6);
			assert.strictEqual(30, game.OnesTwosTreesFourthsFivesSixes('sixes'));
		});
			it('score the sum of sixes', () => {
				const game = new Yatzy(1, 1, 1, 6, 1);
				assert.strictEqual(6, game.OnesTwosTreesFourthsFivesSixes('sixes'));
			});
			it('score the sum of sixes', () => {
				const game = new Yatzy(1, 1, 1, 1, 1);
				assert.strictEqual(0, game.OnesTwosTreesFourthsFivesSixes('sixes'));
			});
	});

	describe('One pair', () => {
		it('scores the sum of the highest pair', () => {
			const game = new Yatzy(6, 2, 2, 3, 3);
			assert.strictEqual(6, game.score_pair());
		});
		it('scores the sum of the highest pair', () => {
			const game = new Yatzy(6, 2, 2, 2, 3);
			assert.strictEqual(4, game.score_pair());
		});
		it('scores the sum of the highest pair', () => {
			const game = new Yatzy(6, 2, 4, 5, 3);
			assert.strictEqual(0, game.score_pair());
		});
	});

	describe('Two pair', () => {
		it('scores the sum of  two pairs', () => {
			const game = new Yatzy(6, 2, 2, 3, 3);
			assert.strictEqual(10, game.two_pair());
		});
		it('edge case one pair scores 0  the sum of  two pairs', () => {
			const game = new Yatzy(6, 2, 0, 3, 3);
			assert.strictEqual(0, game.two_pair());
		});
		it('scores zero- no pairs', () => {
			const game = new Yatzy(6, 2, 4, 5, 3);
			assert.strictEqual(0, game.two_pair());
		});
	});

	describe('Three of a kind', () => {
		it('scores the sum of the three of the kind', () => {
			const game = new Yatzy(6, 2, 2, 2, 3);
			assert.strictEqual(6, game.three_of_a_kind());
		});
		it('scores the 0, theres no three of the kind', () => {
			const game = new Yatzy(6, 2, 2, 3, 3);
			assert.strictEqual(0, game.three_of_a_kind());
		});
	});

	describe('Four of a kind', () => {
		it('scores the sum of the four of the kind', () => {
			const game = new Yatzy(6, 2, 2, 2, 2);
			assert.strictEqual(8, game.four_of_a_kind());
		});
		it('scores the sum of the four of the kind', () => {
			const game = new Yatzy(6, 3, 3, 3, 3);
			assert.strictEqual(12, game.four_of_a_kind());
		});
		it('scores 0, there isn`t  four of the kind', () => {
			const game = new Yatzy(6, 3, 2, 2, 2);
			assert.strictEqual(0, game.four_of_a_kind());
		});

	});

	describe('Small straight', () => {
		it('scores 15', () => {
			const game = new Yatzy(1, 2, 3, 4, 5);
			assert.strictEqual(15, game.smallStraight());
		});
			it('edge case should return 0', () => {
				const game = new Yatzy(2, 3, 4, 5, 6);
				assert.strictEqual(0, game.smallStraight());
			});
	});

	describe('Large straight', () => {
		it('scores 20', () => {
			const game = new Yatzy(2, 3, 4, 6, 5);
			assert.strictEqual(20, game.largeStraight());
		});
			it('should score 0', () => {
				const game = new Yatzy(1, 2, 3, 4, 5);
				assert.strictEqual(0, game.largeStraight());
			});
	});

	describe('Full house', () => {
		it('scores 0 not the full house', () => {
			const game = new Yatzy(2, 3, 4, 6, 5);
			assert.strictEqual(0, game.fullHouse());
		});

		it('scores the sum of the full house', () => {
			const game = new Yatzy(1, 1, 1, 2, 2);
			assert.strictEqual(25, game.fullHouse());
		});
	});
});