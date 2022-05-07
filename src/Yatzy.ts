export default class Yatzy {
	dice: number[] = [];
	private filterOptionsDice = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'];
	constructor(d1: number, d2: number, d3: number, d4: number, d5: number) {
		this.dice[0] = d1;
		this.dice[1] = d2;
		this.dice[2] = d3;
		this.dice[3] = d4;
		this.dice[4] = d5;
	}

	chance(): number {
		return this.dice.reduce((a, b) => a + b, 0);
	}

	yatzy(): number {
		return this.dice.every((d) => d === this.dice[0]) ? 50 : 0;
	}

	OnesTwosTreesFourthsFivesSixes(option: string): number {
		return option === this.filterOptionsDice[0]
			? this.SumOnesTwosTreesFourthsFivesSixes(1)
			: option === this.filterOptionsDice[1]
			? this.SumOnesTwosTreesFourthsFivesSixes(2)
			: option === this.filterOptionsDice[2]
			? this.SumOnesTwosTreesFourthsFivesSixes(3)
			: option === this.filterOptionsDice[3]
			? this.SumOnesTwosTreesFourthsFivesSixes(4)
			: option === this.filterOptionsDice[4]
			? this.SumOnesTwosTreesFourthsFivesSixes(5)
			: this.SumOnesTwosTreesFourthsFivesSixes(6);
	}

	private SumOnesTwosTreesFourthsFivesSixes(pickedDice: number) {
		return this.dice.filter((d) => d === pickedDice).reduce((a, b) => a + b, 0);
	}

	score_pair(): number {
		const counts: number[] = this.getSameDices();

		const value = this.findSameScoreReturnHighestValue(counts, 2, false);
		return value as number;
	}

	private getSameDices() {
		const counts: number[] = [0, 0, 0, 0, 0, 0];
		for (let i = 0; i < 5; i++) {
			counts[this.dice[i] - 1]++;
		}
		return counts;
	}

	private findSameScoreReturnHighestValue(
		counts: number[],
		diceValue: number,
		twoPairs: boolean
	): number {
		const returnCounts = this.returnSortedSumOfSameDices(counts, diceValue);
		return twoPairs && returnCounts.length > 1
			? (returnCounts.splice(0, 2).reduce((a, b) => (a > 0 && b > 0 ? a + b : 0)) as number)
			: twoPairs && returnCounts.length === 1
			? 0
			: (returnCounts[0] as number);
	}

	private returnSortedSumOfSameDices(counts: number[], diceValue: number) {
		return counts
			.map((a, b) => {
				return a >= diceValue ? (b + 1) * diceValue : 0;
			})
			.sort((a, b) => {
				return b - a;
			});
	}

	two_pair(): number {
		const counts: number[] = this.getSameDices();

		const value = this.findSameScoreReturnHighestValue(counts, 2, true);
		return value as number;
	}
	three_of_a_kind(): number {
		const counts: number[] = this.getSameDices();
		return this.findSameScoreReturnHighestValue(counts, 3, false);
	}

	four_of_a_kind(): number {
		const counts: number[] = this.getSameDices();
		return this.findSameScoreReturnHighestValue(counts, 4, false);
	}

	smallStraight(): number {
		const patternSmallStraight = '12345';
		const smallStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return smallStraightReturnValue === patternSmallStraight ? 15 : 0;
	}

	largeStraight(): number {
		const patternLargeStraight = '23456';
		const largeStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return largeStraightReturnValue === patternLargeStraight ? 20 : 0;
	}

	fullHouse(): number {
		const counts: number[] = this.getSameDices();
		const returnValue =
			counts
				.sort((a, b) => b - a)
				.slice(0, 2)
				.join('') === '32'
				? 25
				: 0;
		return returnValue as number;
	}
}



