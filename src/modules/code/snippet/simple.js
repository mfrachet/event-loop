export const snippet = `function add(x, y) {
	return x + y;
}

function double(n) {
  return add(n, n);
}

function main() {
	const three = add(1, 2);
	const doubled = double(5);

	console.log(\`The result is \${doubled}\`);
}

main();`;

export const steps = {
  1: {
    line: 16,
    funcName: "main"
  },
  2: {
    line: 10,
    funcName: "add(1, 2)"
  },
  3: {
    line: 2
  },
  4: {
    action: "pop"
  },
  5: {
    line: 11,
    funcName: "double(5)"
  },
  6: {
    line: 6,
    funcName: "add(5, 5)"
  },
  7: {
    line: 2
  },
  8: {
    line: 6,
    action: "pop"
  },
  9: {
    line: 12,
    action: "pop"
  },
  10: {
    line: 13,
    funcName: "console.log"
  },
  11: {
    action: "pop",
    line: 16
  },
  12: {
    action: "pop"
  }
};
