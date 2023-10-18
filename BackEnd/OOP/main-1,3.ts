class Rectangle {
	private length: number;
	private width: number;

	constructor(length: number, width: number) {
		this.length = length;
		this.width = width;
	}

	setLength(length: number): void {
		this.length = length;
	}

	setWidth(width: number): void {
		this.width = width;
	}

	getLength(): number {
		return this.length;
	}

	getWidth(): number {
		return this.width;
	}

	getArea(): number {
		return this.length * this.width;
	}

	getPerimeter(): number {
		return 2 * (this.length + this.width);
	}

	toString(): string {
		return `Rectangle[length=${this.length},width=${this.width}]`;
	}
}

var r1 = new Rectangle(1.2, 3.4);
console.log(r1.toString());

r1.setLength(2.3);
r1.setWidth(6.4);
console.log(r1.toString());
console.log(`length is: ${r1.getLength()}`);
console.log(`width is: ${r1.getWidth()}`);

console.log(`area is: ${r1.getArea().toFixed(2)}`);
console.log(`perimeter is: ${r1.getPerimeter().toFixed(2)}`);
