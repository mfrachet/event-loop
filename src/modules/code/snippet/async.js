export const snippet = `function main() {
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      console.log(\`Hey! I m number: \${i}\`)
    }, 0);
  }
}

main();`;

export const steps = {
  1: {
    line: 10,
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
    line: 4,
    funcName: "callback",
    action: "enqueue"
  },
  5: {
    line: 2,
    action: "pop"
  },
  6: {
    line: 3,
    funcName: "setTimeout"
  },
  7: {
    line: 4,
    funcName: "callback",
    action: "enqueue"
  },
  8: {
    line: 5,
    action: "pop"
  },
  9: {
    line: 9,
    action: "pop"
  },
  10: {
    line: 9,
    action: "dequeue",
    funcName: "callback"
  },
  11: {
    line: 9,
    action: "pop"
  },
  12: {
    line: 9,
    action: "dequeue",
    funcName: "callback"
  },
  13: {
    line: 9,
    action: "pop"
  }
};
