import { YatzyRoll } from './YatzyRoll';

export class Round implements YatzyRoll {
	score: number;
	category: string;
	constructor(score: number, category: string) {
		this.score = score;
		this.category = category;
	}
}
