import { YatzyThrow } from './YatzyThrow';

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

export class TwoPair extends SameKind {
	public score(): number {
		const counts: number[] = this.getSameDices();
		const value = this.findSameScoreReturnHighestValue(counts, 2, true);
		return value as number;
	}
}

export class ThreeOfAKind extends SameKind {
	public score(): number {
		const counts: number[] = this.getSameDices();
		const value = this.findSameScoreReturnHighestValue(counts, 3, false);
		return value as number;
	}
}

export class FourOfAKind extends SameKind {
	public score(): number {
		const counts: number[] = this.getSameDices();
		const value = this.findSameScoreReturnHighestValue(counts, 4, false);
		return value as number;
	}
}

export class FullHouse extends SameKind {
	public score(): number {
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
