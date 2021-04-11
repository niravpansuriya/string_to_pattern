const chalk = require("chalk");

const letterProps = {
	" ": {
		width: 2,
	},
	A: {
		width: 3,
	},
	B: {
		width: 3,
	},
	C: {
		width: 3,
	},
	D: {
		width: 3,
	},
	E: {
		width: 3,
	},
	F: {
		width: 3,
	},
	G: {
		width: 4,
	},
	H: {
		width: 3,
	},
	I: {
		width: 3,
	},
	J: {
		width: 3,
	},
	K: {
		width: 4,
	},
	L: {
		width: 3,
	},
	M: {
		width: 5,
	},
	N: {
		width: 5,
	},
	O: {
		width: 3,
	},
	P: {
		width: 3,
	},
	R: {
		width: 3,
	},
	S: {
		width: 3,
	},
	T: {
		width: 3,
	},
	U: {
		width: 3,
	},
	V: {
		width: 5,
	},
	W: {
		width: 5,
	},
	X: {
		width: 5,
	},
	Y: {
		width: 5,
	},
	Z: {
		width: 5,
	},
};

const fill = (row, startIndex, matrix, ...rest) => {
	for (const index of rest) matrix[row][startIndex + index] = 1;
};

const createLetter = (letter, startIndex, matrix) => {
	switch (letter) {
		case " ":
			return;
		case "A":
			for (let i = 0; i < 5; i++) {
				if ([0, 2].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0, 2);
			}
			break;
		case "B":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i)) fill(i, startIndex, matrix, 0, 1);
				else if ([2].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0, 2);
			}
			break;
		case "C":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0);
			}
			break;
		case "D":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i)) fill(i, startIndex, matrix, 0, 1);
				else fill(i, startIndex, matrix, 0, 2);
			}
			break;
		case "E":
			for (let i = 0; i < 5; i++) {
				if ([0, 2, 4].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0);
			}
			break;
		case "F":
			for (let i = 0; i < 5; i++) {
				if ([0, 2].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0);
			}
			break;
		case "G":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i)) fill(i, startIndex, matrix, 0, 1, 2, 3);
				else if ([3].includes(i)) fill(i, startIndex, matrix, 0, 3);
				else if ([2].includes(i)) fill(i, startIndex, matrix, 0, 2, 3);
				else fill(i, startIndex, matrix, 0);
			}
			break;
		case "H":
			for (let i = 0; i < 5; i++) {
				if ([2].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0, 2);
			}
			break;
		case "I":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 1);
			}
			break;
		case "J":
			for (let i = 0; i < 5; i++) {
				if ([0].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				if ([4].includes(i)) fill(i, startIndex, matrix, 0, 1);
				else fill(i, startIndex, matrix, 1);
			}
			break;
		case "K":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i)) fill(i, startIndex, matrix, 0, 3);
				else if ([1, 3].includes(i)) fill(i, startIndex, matrix, 0, 2);
				else fill(i, startIndex, matrix, 0, 1);
			}
			break;
		case "L":
			for (let i = 0; i < 5; i++) {
				if ([4].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0);
			}
			break;
		case "M":
			for (let i = 0; i < 5; i++) {
				if ([0].includes(i)) fill(i, startIndex, matrix, 0, 4);
				else if ([1].includes(i))
					fill(i, startIndex, matrix, 0, 1, 3, 4);
				else if ([2].includes(i)) fill(i, startIndex, matrix, 0, 2, 4);
				else fill(i, startIndex, matrix, 0, 4);
			}
			break;
		case "N":
			for (let i = 0; i < 5; i++) {
				if ([0].includes(i)) fill(i, startIndex, matrix, 0, 4);
				else if ([1].includes(i)) fill(i, startIndex, matrix, 0, 1, 4);
				else if ([2].includes(i)) fill(i, startIndex, matrix, 0, 2, 4);
				else if ([3].includes(i)) fill(i, startIndex, matrix, 0, 3, 4);
				else fill(i, startIndex, matrix, 0, 4);
			}
			break;
		case "O":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0, 2);
			}
			break;
		case "P":
			for (let i = 0; i < 5; i++) {
				if ([0, 2].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else if ([1].includes(i)) fill(i, startIndex, matrix, 0, 2);
				else fill(i, startIndex, matrix, 0);
			}
			break;
		case "R":
			for (let i = 0; i < 5; i++) {
				if ([0, 2].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else if ([1, 4].includes(i)) fill(i, startIndex, matrix, 0, 2);
				else fill(i, startIndex, matrix, 0, 1);
			}
			break;
		case "S":
			for (let i = 0; i < 5; i++) {
				if ([0, 2, 4].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else if ([1].includes(i)) fill(i, startIndex, matrix, 0);
				else fill(i, startIndex, matrix, 2);
			}
			break;
		case "T":
			for (let i = 0; i < 5; i++) {
				if ([0].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 1);
			}
			break;
		case "U":
			for (let i = 0; i < 5; i++) {
				if ([4].includes(i)) fill(i, startIndex, matrix, 0, 1, 2);
				else fill(i, startIndex, matrix, 0, 2);
			}
			break;
		case "V":
			for (let i = 0; i < 5; i++) {
				if ([0, 1, 2].includes(i)) fill(i, startIndex, matrix, 0, 4);
				else if ([3].includes(i)) fill(i, startIndex, matrix, 1, 3);
				else fill(i, startIndex, matrix, 2);
			}
			break;
		case "W":
			for (let i = 0; i < 5; i++) {
				if ([0, 1, 4].includes(i)) fill(i, startIndex, matrix, 0, 4);
				else if ([3].includes(i))
					fill(i, startIndex, matrix, 0, 4, 1, 3);
				else fill(i, startIndex, matrix, 0, 4, 2);
			}
			break;
		case "X":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i)) fill(i, startIndex, matrix, 0, 4);
				else if ([1, 3].includes(i)) fill(i, startIndex, matrix, 1, 3);
				else fill(i, startIndex, matrix, 2);
			}
			break;
		case "Y":
			for (let i = 0; i < 5; i++) {
				if ([0].includes(i)) fill(i, startIndex, matrix, 0, 4);
				else if ([1].includes(i)) fill(i, startIndex, matrix, 1, 3);
				else fill(i, startIndex, matrix, 2);
			}
			break;
		case "Z":
			for (let i = 0; i < 5; i++) {
				if ([0, 4].includes(i))
					fill(i, startIndex, matrix, 0, 1, 2, 3, 4);
				else if ([1].includes(i)) fill(i, startIndex, matrix, 3);
				else if ([3].includes(i)) fill(i, startIndex, matrix, 1);
				else fill(i, startIndex, matrix, 2);
			}
			break;
	}
};

const wait = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve();
		}, time);
	});
};

const printPattern = async (matrix) => {
	for (const row of matrix) {
		const printStirng = row
			.join("")
			.replace(/1/g, "# ")
			.replace(/0/g, "  ");

		for (const char of printStirng) {
			process.stdout.write(char);
			await wait(10);
		}

		process.stdout.write("\n");
		await wait(1000);
	}
};

const makePattern = (string) => {
	return new Promise(async (resolve, reject) => {
		let totleWidth = 0;
		for (const char of string) {
			totleWidth += letterProps[char].width + 1;
		}

		const matrix = [];
		for (let i = 0; i < 5; i++) matrix.push(Array(totleWidth).fill(0));

		let startIndex = 0;
		for (const char of string) {
			createLetter(char, startIndex, matrix);
			startIndex += letterProps[char].width + 1;
		}

		await printPattern(matrix);

		return resolve();
	});
};

(async () => {
	var string = process.argv[2];

	if (!string)
		return console.log(
			chalk.red.inverse(
				"Please provide the string that you want to convert into the pattern"
			)
		);

	string = string.toUpperCase();

	strings = string.split("\n");

	for (const s of strings) {
		await makePattern(s);
		console.log();
		console.log();
	}
})();
