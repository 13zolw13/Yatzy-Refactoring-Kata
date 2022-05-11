import { YatzyThrow } from './YatzyThrow';

export class SmallStraight extends YatzyThrow {
	private smallStraightString = '12345';
	score(): number {
		return this.dice.sort((a, b) => a - b).join('') === this.smallStraightString ? 15 : 0;
	}
}
