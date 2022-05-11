import { YatzyThrow } from './YatzyThrow';

export class Chance extends YatzyThrow {
	score(): number {
		return this.dice.reduce((a, b) => a + b, 0);
	}
}
