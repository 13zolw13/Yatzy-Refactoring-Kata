import { YatzyThrow } from './YatzyThrow';

export class SameValue extends YatzyThrow {
	protected SumOnesTwosTreesFourthsFivesSixes(pickedDice: number) {
		return this.dice.filter((d) => d === pickedDice).reduce((a, b) => a + b, 0);
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

export class Threes extends SameValue {
	score(): number {
		return this.SumOnesTwosTreesFourthsFivesSixes(3);
	}
}

export class Fours extends SameValue {
	score(): number {
		return this.SumOnesTwosTreesFourthsFivesSixes(4);
	}
}

export class Fives extends SameValue {
	score(): number {
		return this.SumOnesTwosTreesFourthsFivesSixes(5);
	}
}

export class Sixes extends SameValue {
	score(): number {
		return this.SumOnesTwosTreesFourthsFivesSixes(6);
	}
}
