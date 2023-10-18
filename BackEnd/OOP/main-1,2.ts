class Circle {
	private radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	setRadius(radius: number): void {
		this.radius = radius;
	}

	getRadius(): number {
		return this.radius;
	}

	getArea(): number {
		return Math.PI * this.radius * this.radius;
	}

	getCircumference(): number {
		return 2 * Math.PI * this.radius;
	}

	toString(): string {
		return `Circle[radius=${this.radius}]`;
	}
}

const c1 = new Circle(1.1);
console.log(c1.toString());

c1.setRadius(2.2);
console.log(c1.toString());
console.log(`radius is: ${c1.getRadius()}`);

console.log(`area is: ${c1.getArea().toFixed(2)}`);
console.log(`circumference is: ${c1.getCircumference().toFixed(2)}`);
