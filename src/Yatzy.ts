import { YatzyThrow } from './YatzyThrow';

export default class Yatzy extends YatzyThrow {}

export class SmallStraight extends YatzyThrow {
	private smallStraightString = '12345';
	score(): number {
		return this.dice.sort((a, b) => a - b).join('') === this.smallStraightString ? 15 : 0;
	}
}

export class LargeStraight extends YatzyThrow {
	private largeStraightString = '23456';
	score(): number {
		return this.dice.sort((a, b) => a - b).join('') === this.largeStraightString ? 20 : 0;
	}
}

