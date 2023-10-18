// 1
var num = Number(prompt("Enter number 1: "));
if (num % 2 == 0) {
	console.log("even");
} else {
	console.log("odd");
}

// 2
for (var i = 0; i <= 19; i++) {
	if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
	else if (i % 3 == 0) console.log("Fizz");
	else if (i % 5 == 0) console.log("Buzz");
	else console.log(i);
}

// 4
const BI = 3.14;

for (i = 0; i <= 5; i++) console.log("*");

// 7
pos_num = Number(prompt("Enter a positive number"));

// 8
num1 = Number(prompt("Enter first number: "));
num2 = Number(prompt("Enter second number: "));
num3 = Number(prompt("Enter third number: "));

let result = num1;
if (num2 > result) result = num2;
if (num3 > result) result = num3;
console.log(`The largest number is ${result}`);

// 9
let sum = 0;
for (i = 1; i <= 10; i++) {
	sum += i;
}
console.log(sum);

// 13
var num_1 = 5,
	num_2 = 8;
console.log(num_1 + num_2);
