class Ball {
	private x: number;
	private y: number;
	private radius: number;
	private speed: number;
	private directionInDegree: number;

	constructor(
		x: number,
		y: number,
		radius: number,
		speed: number,
		directionInDegree: number
	) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.speed = speed;
		this.directionInDegree = directionInDegree;
	}

	setX(x: number): void {
		this.x = x;
	}

	setY(y: number): void {
		this.y = y;
	}

	setRadius(radius: number): void {
		this.radius = radius;
	}

	setSpeed(speed: number): void {
		this.speed = speed;
	}

	setDirection(directionInDegree: number): void {
		this.directionInDegree = directionInDegree;
	}

	getX(): number {
		return this.x;
	}

	getY(): number {
		return this.y;
	}

	getRadius(): number {
		return this.radius;
	}

	getSpeed(): number {
		return this.speed;
	}

	getDirection(): number {
		return this.directionInDegree;
	}

	move(): void {
		this.x += this.speed * Math.cos(this.directionInDegree * (Math.PI / 180));
		this.y += this.speed * Math.sin(this.directionInDegree * (Math.PI / 180));
	}

	reflectHorizontal(): void {
		this.directionInDegree = 180 - this.directionInDegree;
	}

	reflectVertical(): void {
		this.directionInDegree = -this.directionInDegree;
	}

	toString(): string {
		return `Ball[(${this.x.toFixed(1)},${this.y.toFixed(
			1
		)}),speed=${this.speed.toFixed(1)},direction=${this.directionInDegree}]`;
	}
}

const ball = new Ball(1.1, 2.2, 10, 3.3, 4);
console.log(ball.toString());

ball.setX(80.0);
ball.setY(35.0);
ball.setRadius(5);
ball.setSpeed(4.0);
ball.setDirection(6);
console.log(ball.toString());

const xMin = 0.0;
const xMax = 100.0;
const yMin = 0.0;
const yMax = 50.0;
for (let i = 0; i < 15; i++) {
	ball.move();
	console.log(ball.toString());
	const xNew = ball.getX();
	const yNew = ball.getY();
	const radius = ball.getRadius();
	if (xNew + radius > xMax || xNew - radius < xMin) {
		ball.reflectHorizontal();
	}
	if (yNew + radius > yMax || yNew - radius < yMin) {
		ball.reflectVertical();
	}
}
