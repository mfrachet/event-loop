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
    line: 15,
    funcName: "main"
  },
  2: {
    line: 2,
    funcName: "fetch 1",
    action: "add-apis"
  },
  3: {
    line: 5
  },
  4: {
    line: 6,
    funcName: "setTimeout",
    action: "add-apis"
  },
  5: {
    line: 9,
    action: "remove-apis"
  },
  6: {
    line: 9,
    action: "enqueue-micro",
    funcName: "fetch result 1"
  },
  7: {
    line: 9,
    action: "remove-apis"
  },
  8: {
    line: 9,
    funcName: "setTimeout",
    action: "enqueue"
  },
  9: {
    line: 10,
    funcName: "fetch 2",
    action: "add-apis"
  },
  10: {
    line: 12,
    action: "remove-apis"
  },
  11: {
    line: 12,
    action: "enqueue-micro",
    funcName: "fetch result 2"
  },
  12: {
    line: 15
  },
  13: {
    line: 16,
    action: "pop"
  },
  14: {
    line: 3,
    action: "dequeue-micro",
    funcName: "fetch result 1"
  },
  15: {
    line: 16,
    action: "pop"
  },
  16: {
    line: 11,
    action: "dequeue-micro",
    funcName: "fetch result 2"
  },
  17: {
    line: 16,
    action: "pop"
  },
  18: {
    line: 7,
    action: "dequeue",
    funcName: "setTimeout"
  },
  19: {
    line: 16,
    action: "pop"
  }
};
