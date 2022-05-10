import { YatzyThrow } from './YatzyThrow';

export default class Yatzy extends YatzyThrow {
	private straightString = { smallStraight: '12345', largeStraight: '23456' };

	chance(): number {
		return this.dice.reduce((a, b) => a + b, 0);
	}

	yatzy(): number {
		return this.dice.every((d) => d === this.dice[0]) ? 50 : 0;
	}

	smallStraight(): number {
		const smallStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return smallStraightReturnValue === this.straightString.smallStraight ? 15 : 0;
	}

	largeStraight(): number {
		const largeStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return largeStraightReturnValue === this.straightString.largeStraight ? 20 : 0;
	}
}

export class SameValue extends YatzyThrow {
	private filterOptionsDice = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'];

	protected SumOnesTwosTreesFourthsFivesSixes(pickedDice: number) {
		return this.dice.filter((d) => d === pickedDice).reduce((a, b) => a + b, 0);
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
}

export class Ones extends SameValue {
	score(): number {
		return this.SumOnesTwosTreesFourthsFivesSixes(1);
	}
}

export class Twos extends SameValue {
	score(): number {
		return this.SumOnesTwosTreesFourthsFivesSixes(2);
	}
}