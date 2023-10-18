class DateClass {
	private day: number;
	private month: number;
	private year: number;

	constructor(day: number, month: number, year: number) {
		this.day = day;
		this.month = month;
		this.year = year;
	}

	setDay(day: number): void {
		this.day = day;
	}

	setMonth(month: number): void {
		this.month = month;
	}

	setYear(year: number): void {
		this.year = year;
	}

	getDay(): number {
		return this.day;
	}

	getMonth(): number {
		return this.month;
	}

	getYear(): number {
		return this.year;
	}

	setDate(day: number, month: number, year: number): void {
		this.day = day;
		this.month = month;
		this.year = year;
	}

	toString(): string {
		return `${this.month.toString().padStart(2, "0")}/${this.day
			.toString()
			.padStart(2, "0")}/${this.year}`;
	}
}

const d1 = new Date(1, 2, 2014);
console.log(d1.toString());

d1.setMonth(12);

console.log(d1.toString());
console.log(`Month: ${d1.getMonth()}`);
console.log(`Day: ${d1.getDay()}`);

console.log(d1.toString());
