import { YatzyThrow } from './YatzyThrow';

export default class Yatzy extends YatzyThrow {
	private filterOptionsDice = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'];
	private straightString = { smallStraight: '12345', largeStraight: '23456' };

	private SumOnesTwosTreesFourthsFivesSixes(pickedDice: number) {
		return this.dice.filter((d) => d === pickedDice).reduce((a, b) => a + b, 0);
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

	// score_pair(): number {
	// 	// 	// 	const counts: number[] = this.getSameDices();

	// 	// 	// 	const value = this.findSameScoreReturnHighestValue(counts, 2, false);
	// 	// 	// 	return value as number;
	// 	const value = OnePair.score();
	// 	return value;
	// }

	// two_pair(): number {
	// 	const counts: number[] = this.getSameDices();

	// 	const value = this.findSameScoreReturnHighestValue(counts, 2, true);
	// 	return value as number;
	// }
	// three_of_a_kind(): number {
	// 	const counts: number[] = this.getSameDices();
	// 	return this.findSameScoreReturnHighestValue(counts, 3, false);
	// }

	// four_of_a_kind(): number {
	// 	const counts: number[] = this.getSameDices();
	// 	return this.findSameScoreReturnHighestValue(counts, 4, false);
	// }

	smallStraight(): number {
		const smallStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return smallStraightReturnValue === this.straightString.smallStraight ? 15 : 0;
	}

	largeStraight(): number {
		const largeStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return largeStraightReturnValue === this.straightString.largeStraight ? 20 : 0;
	}

	// fullHouse(): number {
	// 	const counts: number[] = this.getSameDices();
	// 	const returnValue =
	// 		counts
	// 			.sort((a, b) => b - a)
	// 			.slice(0, 2)
	// 			.join('') === '32'
	// 			? 25
	// 			: 0;
	// 	return returnValue as number;
	// }
}

export abstract class SameKind extends YatzyThrow {
	protected findSameScoreReturnHighestValue(
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

	protected getSameDices() {
		const counts: number[] = [0, 0, 0, 0, 0, 0];
		for (let i = 0; i < 5; i++) {
			counts[this.dice[i] - 1]++;
		}
		return counts;
	}

	protected returnSortedSumOfSameDices(counts: number[], diceValue: number) {
		return counts
			.map((a, b) => {
				return a >= diceValue ? (b + 1) * diceValue : 0;
			})
			.sort((a, b) => {
				return b - a;
			});
	}
	abstract score(): number;
}

export class OnePair extends SameKind {
	public score(): number {
		const counts: number[] = this.getSameDices();
		const value = this.findSameScoreReturnHighestValue(counts, 2, false);
		return value as number;
	}
}


