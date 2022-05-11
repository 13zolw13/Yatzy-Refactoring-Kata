import { YatzyThrow } from './YatzyThrow';

export class LargeStraight extends YatzyThrow {
	private largeStraightString = '23456';
	score(): number {
		return this.dice.sort((a, b) => a - b).join('') === this.largeStraightString ? 20 : 0;
	}
}
