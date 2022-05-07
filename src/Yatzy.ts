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
			? (returnCounts.splice(0, 2).reduce((a, b) => a + b) as number)
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
			})
			.filter((a) => a !== 0);
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

	static four_of_a_kind(_1: number, _2: number, d3: number, d4: number, d5: number): number {
		var tallies;
		tallies = [0, 0, 0, 0, 0, 0, 0, 0];
		tallies[_1 - 1]++;
		tallies[_2 - 1]++;
		tallies[d3 - 1]++;
		tallies[d4 - 1]++;
		tallies[d5 - 1]++;
		for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
		return 0;
	}

	static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
		var tallies;
		tallies = [0, 0, 0, 0, 0, 0, 0];
		tallies[d1 - 1] += 1;
		tallies[d2 - 1] += 1;
		tallies[d3 - 1] += 1;
		tallies[d4 - 1] += 1;
		tallies[d5 - 1] += 1;
		if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1)
			return 15;
		return 0;
	}

	static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
		var tallies;
		tallies = [0, 0, 0, 0, 0, 0, 0, 0];
		tallies[d1 - 1] += 1;
		tallies[d2 - 1] += 1;
		tallies[d3 - 1] += 1;
		tallies[d4 - 1] += 1;
		tallies[d5 - 1] += 1;
		if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1)
			return 20;
		return 0;
	}

	static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
		var tallies;
		var _2 = false;
		var i;
		var _2_at = 0;
		var _3 = false;
		var _3_at = 0;

		tallies = [0, 0, 0, 0, 0, 0, 0, 0];
		tallies[d1 - 1] += 1;
		tallies[d2 - 1] += 1;
		tallies[d3 - 1] += 1;
		tallies[d4 - 1] += 1;
		tallies[d5 - 1] += 1;

		for (i = 0; i != 6; i += 1)
			if (tallies[i] == 2) {
				_2 = true;
				_2_at = i + 1;
			}

		for (i = 0; i != 6; i += 1)
			if (tallies[i] == 3) {
				_3 = true;
				_3_at = i + 1;
			}

		if (_2 && _3) return _2_at * 2 + _3_at * 3;
		else return 0;
	}
}



