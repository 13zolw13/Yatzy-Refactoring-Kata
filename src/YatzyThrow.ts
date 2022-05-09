import { diceFaceValue } from './diceFaceValue';

export class YatzyThrow {
	dice: diceFaceValue[] = [];
	constructor(
		d1: diceFaceValue,
		d2: diceFaceValue,
		d3: diceFaceValue,
		d4: diceFaceValue,
		d5: diceFaceValue
	) {
		this.dice[0] = d1;
		this.dice[1] = d2;
		this.dice[2] = d3;
		this.dice[3] = d4;
		this.dice[4] = d5;
	}
}
