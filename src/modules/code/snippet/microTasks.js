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
    action: "enqueue"
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
    line: 10,
    funcName: "fetch 2",
    action: "add-apis"
  },
  8: {
    line: 12,
    action: "remove-apis"
  },
  9: {
    line: 12,
    action: "enqueue-micro",
    funcName: "fetch result 2"
  },
  10: {
    line: 15
  },
  11: {
    line: 16,
    action: "pop"
  },
  12: {
    line: 3,
    action: "dequeue-micro",
    funcName: "fetch result 1"
  },
  13: {
    line: 16,
    action: "pop"
  },
  14: {
    line: 11,
    action: "dequeue-micro",
    funcName: "fetch result 2"
  },
  15: {
    line: 16,
    action: "pop"
  },
  16: {
    line: 7,
    action: "dequeue",
    funcName: "setTimeout"
  },
  17: {
    line: 16,
    action: "pop"
  }
};
