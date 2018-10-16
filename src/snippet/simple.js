export const snippet = `function add(a, b) {
	return a + b;
}

function main() {
	const three = add(1, 2);
	const five = add(three, 2);

	console.log(\`The result is \${five}\`);
}

main();`;

export const steps = {
  1: {
    line: 11,
    funcName: "main"
  },
  2: {
    line: 6,
    funcName: "add(1, 2)"
  },
  3: {
    line: 3,
    action: "pop"
  },
  4: {
    line: 7,
    funcName: "add(3, 2)"
  },
  5: {
    line: 3,
    action: "pop"
  },
  6: {
    line: 9,
    funcName: "console.log"
  },
  7: {
    line: 10,
    action: "pop"
  },
  8: {
    line: 0
  }
};
