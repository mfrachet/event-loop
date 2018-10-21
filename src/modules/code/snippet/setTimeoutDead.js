export const caption =
  "Over usage of setTimeout function to prove that JavaScript isn't parralel";

export const snippet = `for (let i = 0; i < 100000; i++) {
	setTimeout(() => {
		console.log("Hello world")
	}, 0);
}

const start = Date.now();

setTimeout(() => {
	const end = Date.now();

	console.log(end - start);
}, 1000);`;
