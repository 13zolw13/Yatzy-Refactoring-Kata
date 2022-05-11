import { YatzyThrow } from './YatzyThrow';

export class YatzyCategory extends YatzyThrow {
	score(): number {
		return this.dice.every((d) => d === this.dice[0]) ? 50 : 0;
	}
}
