class Account {
	private id: string;
	private name: string;
	private balance: number;

	constructor(id: string, name: string, balance: number = 0) {
		this.id = id;
		this.name = name;
		this.balance = balance;
	}

	getID(): string {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getBalance(): number {
		return this.balance;
	}

	credit(amount: number): void {
		this.balance += amount;
	}

	debit(amount: number): void {
		if (amount <= this.balance) {
			this.balance -= amount;
		} else {
			console.log("Amount exceeded balance");
		}
	}

	transferTo(anotherAccount: Account, amount: number): void {
		if (amount <= this.balance) {
			this.balance -= amount;
			anotherAccount.credit(amount);
		} else {
			console.log("Amount exceeded balance");
		}
	}

	toString(): string {
		return `Account[id=${this.id},name=${this.name},balance=${this.balance}]`;
	}
}

const a1 = new Account("A101", "Tan Ah Teck", 88);
console.log(a1.toString());

const a2 = new Account("A102", "Kumar");
console.log(a2.toString());

console.log(`ID: ${a1.getID()}`);
console.log(`Name: ${a1.getName()}`);
console.log(`Balance: ${a1.getBalance()}`);

a1.credit(100);
console.log(a1.toString());
a1.debit(50);
console.log(a1.toString());
a1.debit(500);
console.log(a1.toString());

a1.transferTo(a2, 100);
console.log(a1.toString());
console.log(a2.toString());
