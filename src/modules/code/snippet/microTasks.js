export const snippet = `function main() {
	fetch('https://some-api.com/').then(() => {
		console.log('Well received');
	});

	setTimeout(() => {
		console.log('timeout');
	}, 500)

	fetch('https://other-api.com/').then(() => {
		console.log('Also Well received');
	});
}

main();
  `;

export const steps = {
  1: {
    line: 9,
    funcName: "main"
  },
  2: {
    line: 2
  },
  3: {
    line: 3,
    funcName: "setTimeout"
  },
  4: {
    line: 3,
    funcName: "setTimeout",
    action: "add-apis"
  },
  5: {
    line: 5,
    action: "pop"
  },
  6: {
    line: 5,
    action: "enqueue",
    funcName: "callback"
  },
  7: {
    line: 5,
    action: "remove-apis"
  },
  8: {
    line: 2
  },
  9: {
    line: 3,
    funcName: "setTimeout"
  },
  10: {
    line: 3,
    funcName: "setTimeout",
    action: "add-apis"
  },
  11: {
    line: 5,
    action: "pop"
  },
  12: {
    line: 5,
    action: "enqueue",
    funcName: "callback"
  },
  13: {
    line: 5,
    action: "remove-apis"
  },
  14: {
    line: 9,
    action: "pop"
  },

  15: {
    line: 10,
    action: "dequeue",
    funcName: "callback"
  },
  16: {
    line: 10,
    action: "pop"
  },
  17: {
    line: 10,
    action: "dequeue",
    funcName: "callback"
  },
  18: {
    line: 10,
    action: "pop"
  }
};
