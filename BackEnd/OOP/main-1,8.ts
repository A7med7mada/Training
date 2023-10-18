class Time {
	private hour: number;
	private minute: number;
	private second: number;

	constructor(hour: number, minute: number, second: number) {
		this.hour = hour;
		this.minute = minute;
		this.second = second;
	}

	setHour(hour: number): void {
		this.hour = hour;
	}

	setMinute(minute: number): void {
		this.minute = minute;
	}

	setSecond(second: number): void {
		this.second = second;
	}

	getHour(): number {
		return this.hour;
	}

	getMinute(): number {
		return this.minute;
	}

	getSecond(): number {
		return this.second;
	}

	setTime(hour: number, minute: number, second: number): void {
		this.hour = hour;
		this.minute = minute;
		this.second = second;
	}

	nextSecond(): Time {
		this.second++;
		if (this.second >= 60) {
			this.second = 0;
			this.minute++;
			if (this.minute >= 60) {
				this.minute = 0;
				this.hour = (this.hour + 1) % 24;
			}
		}
		return this;
	}

	previousSecond(): Time {
		this.second--;
		if (this.second < 0) {
			this.second = 59;
			this.minute--;
			if (this.minute < 0) {
				this.minute = 59;
				this.hour = (this.hour + 23) % 24;
			}
		}
		return this;
	}

	toString(): string {
		return `${this.hour.toString().padStart(2, "0")}:${this.minute
			.toString()
			.padStart(2, "0")}:${this.second.toString().padStart(2, "0")}`;
	}
}

const t1 = new Time(1, 2, 3);
console.log(t1.toString());

t1.setHour(4);
t1.setMinute(5);
t1.setSecond(6);
console.log(t1.toString());
console.log(`Hour: ${t1.getHour()}`);
console.log(`Minute: ${t1.getMinute()}`);
console.log(`Second: ${t1.getSecond()}`);

t1.setTime(23, 59, 58);
console.log(t1.toString());

console.log(t1.nextSecond().toString());
console.log(t1.nextSecond().nextSecond().toString());

console.log(t1.previousSecond().toString());
console.log(t1.previousSecond().previousSecond().toString());
