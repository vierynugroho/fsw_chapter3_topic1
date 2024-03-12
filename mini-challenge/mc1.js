const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const readlineInput = () => {
	return new Promise((resolve) => {
		rl.question('Masukkan angka pertama: ', (answer) => {
			const num1 = parseFloat(answer);
			rl.question('Masukkan angka kedua: ', (answer) => {
				const num2 = parseFloat(answer);
				resolve({ num1, num2 });
			});
		});
	});
};

const writeToFile = (data) => {
	const jsonData = JSON.stringify(data);
	fs.writeFileSync('./data/data.json', jsonData);
};

const readFromFile = () => {
	const data = fs.readFileSync('./data/data.json');
	return JSON.parse(data);
};

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const main = async () => {
	const { num1, num2 } = await readlineInput();
	const result = add(num1, num2);

	writeToFile({ num1, num2, result });
	console.log(`Hasil penjumlahan ${num1} dan ${num2} adalah ${result}`);

	const data = readFromFile();
	console.log(data);
};

main();
