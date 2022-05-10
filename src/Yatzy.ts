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

