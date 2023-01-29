function collatz(n: number): number {
	if (n % 2 == 0) return n / 2;
	return 3 * n + 1;
}

function collatz_simulation(n: number): number[] {
	let arr = [n];
	let next = n;
	while (next > 1) {
		next = collatz(next);
		arr.push(next);
	}

	return arr;
}

function convert_to_arrow_string(arr: number[]): string {
	return arr.join(" -> ");
}

function test() {
	const arr = collatz_simulation(20301);
	const str = convert_to_arrow_string(arr);
	console.log(`Sequence of length ${arr.length}:\n`, str);
}

test();

// the following is *not* OK when strict = true
let x = 20;
x = null;
