export const snippet = `function main() {
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      console.log(\`Hey! I m number: \${i}\`)
    }, 0);
  }
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
    line: 9,
    action: "show-loop"
  },
  16: {
    line: 10,
    action: "dequeue",
    funcName: "callback"
  },
  17: {
    line: 10,
    action: "pop"
  },
  18: {
    line: 10,
    action: "dequeue",
    funcName: "callback"
  },
  19: {
    line: 10,
    action: "pop"
  }
};
