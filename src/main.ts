function collatz(n: number): number {
	if (n % 2 == 0) return n / 2;
	return 3 * n + 1;
}

function collatz_sequence(n: number): number[] {
	let arr = [n];
	let next = n;
	while (next > 1) {
		next = collatz(next);
		arr.push(next);
	}

	return arr;
}

function convert_to_arrow_string(arr: string[]): string {
	return arr.join(" -> ");
}

function verify_collatz_conjecture(n: number) {
	console.log(`Verify Collatz Conjecture for ${n}...\n`);
	const arr = collatz_sequence(n).map((n) => n.toString());
	const str = convert_to_arrow_string(arr);
	console.log(`Sequence has length ${arr.length}:\n`);
	console.log(str);
}

verify_collatz_conjecture(12);

// the following is *not* OK when strict = true
// let x = 20;
// x = null;
