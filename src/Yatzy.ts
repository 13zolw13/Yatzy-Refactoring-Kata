import { YatzyThrow } from './YatzyThrow';

export default class Yatzy extends YatzyThrow {
	private straightString = { smallStraight: '12345', largeStraight: '23456' };

	smallStraight(): number {
		const smallStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return smallStraightReturnValue === this.straightString.smallStraight ? 15 : 0;
	}

	largeStraight(): number {
		const largeStraightReturnValue = this.dice.sort((a, b) => a - b).join('');
		return largeStraightReturnValue === this.straightString.largeStraight ? 20 : 0;
	}
}

