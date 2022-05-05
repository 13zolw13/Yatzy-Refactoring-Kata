import assert from 'assert';
import Yatzy from '../src/Yatzy';

describe('Chance', () => {
	it('scores sum of all dice', () => {
		const game = new Yatzy(1, 2, 3, 4, 5);
		assert.strictEqual(game.chance(), 15);
	});
});

describe('Yatzy', () => {
	it('scores 50', () => {
    const game = new Yatzy(1, 1, 1, 1, 1);
    assert.strictEqual(game.yatzy(), 50);
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
});

describe('Fours', () => {
	it('score the sum of 4s', () => {
		const game = new Yatzy(4, 4, 4, 4, 5);
		assert.strictEqual(16, game.OnesTwosTreesFourthsFivesSixes('fours'));
	});
});

describe('Fives', () => {
	it('score the sum of fives', () => {
		const game = new Yatzy(5, 5, 5, 5, 5);
		assert.strictEqual(25, game.OnesTwosTreesFourthsFivesSixes('fives'));
	});
	
});

describe('Sixes', () => {
	it('score the sum of sixes', () => {
		const game = new Yatzy(6, 6, 6, 6, 6);
		assert.strictEqual(30, game.OnesTwosTreesFourthsFivesSixes('sixes'));

	});
});

describe('One pair', () => {
	it('scores the sum of the highest pair', () => {
		assert.strictEqual(6, Yatzy.score_pair(3, 4, 3, 5, 6));
		assert.strictEqual(10, Yatzy.score_pair(5, 3, 3, 3, 5));
		assert.strictEqual(12, Yatzy.score_pair(5, 3, 6, 6, 5));
	});
});

describe('Two pair', () => {
	it('scores the sum of the two pairs', () => {
		assert.strictEqual(16, Yatzy.two_pair(3, 3, 5, 4, 5));
		assert.strictEqual(16, Yatzy.two_pair(3, 3, 5, 5, 5));
	});
});

describe('Three of a kind', () => {
	it('scores the sum of the three of the kind', () => {
		assert.strictEqual(9, Yatzy.three_of_a_kind(3, 3, 3, 4, 5));
		assert.strictEqual(15, Yatzy.three_of_a_kind(5, 3, 5, 4, 5));
		assert.strictEqual(9, Yatzy.three_of_a_kind(3, 3, 3, 3, 5));
	});
});

describe('Four of a kind', () => {
	it('scores the sum of the four of the kind', () => {
		assert.strictEqual(12, Yatzy.four_of_a_kind(3, 3, 3, 3, 5));
		assert.strictEqual(20, Yatzy.four_of_a_kind(5, 5, 5, 4, 5));
		assert.strictEqual(9, Yatzy.three_of_a_kind(3, 3, 3, 3, 3));
	});
});

describe('Small straight', () => {
	it('scores 15', () => {
		assert.strictEqual(15, Yatzy.smallStraight(1, 2, 3, 4, 5));
		assert.strictEqual(15, Yatzy.smallStraight(2, 3, 4, 5, 1));
		assert.strictEqual(0, Yatzy.smallStraight(1, 2, 2, 4, 5));
	});
});

describe('Large straight', () => {
	it('scores 20', () => {
		assert.strictEqual(20, Yatzy.largeStraight(6, 2, 3, 4, 5));
		assert.strictEqual(20, Yatzy.largeStraight(2, 3, 4, 5, 6));
		assert.strictEqual(0, Yatzy.largeStraight(1, 2, 2, 4, 5));
	});
});

describe('Full house', () => {
	it('scores the sum of the full house', () => {
		assert.strictEqual(18, Yatzy.fullHouse(6, 2, 2, 2, 6));
		assert.strictEqual(0, Yatzy.fullHouse(2, 3, 4, 5, 6));
	});
});
