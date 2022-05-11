import { YatzyThrow } from './YatzyThrow';

export default class Yatzy extends YatzyThrow {}

export class SmallStraight extends YatzyThrow {
	private smallStraightString = '12345';
	score(): number {
		const smallStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return smallStraightReturnValue === this.smallStraightString ? 15 : 0;
	}
}

export class LargeStraight extends YatzyThrow {
	private largeStraightString = '23456';
	score(): number {
		const largeStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return largeStraightReturnValue === this.largeStraightString ? 20 : 0;
	}
}

