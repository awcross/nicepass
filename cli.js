#!/usr/bin/env node
'use strict';
const meow = require('meow');
const niceware = require('niceware');

const cli = meow(`
	Usage
	  $ nicepass <number|hex|phrase>

	Examples
	  $ nicepass
	  circularly transportal hypotenuse browsing framework

	  $ nicepass 10
	  workaholism washday liposoluble pinyon crosstalk

	  $ nicepass 79446c84988885a444af
	  lauderdale indisposition overgraze microcosm encomia

	  $ nicepass 'wigglier singing bicyclist clasher barrow haltering twirler asap'
	  fba4cb24113123240d975fcfea1d085d
`, {
	inferType: true
});

const input = cli.input[0];

try {
	if (!input || typeof input === 'number') {
		const size = input || 10;
		const arr = niceware.generatePassphrase(size);

		console.log(arr.join(' '));

	} else {
		const arr = input.split(' ');

		if (arr.length === 1) {
			const str = input.toLowerCase().replace(/[,\s]/g, '');
			const buffer = Buffer.from(str, 'hex');
			const arr = niceware.bytesToPassphrase(buffer);

			console.log(arr.join(' '));

		} else {
			const str = input.toLowerCase().replace(/['"]+/g, '');
			const byteArray = niceware.passphraseToBytes(str.split(' '));
			let output = '';

			for (let i = 0, j = byteArray.length; i < j; i++) {
				let char = byteArray[i].toString(16);

				if (char.length === 1) { // eslint-disable-line max-depth
					char = `0${char}`;
				}

				output += char;
			}

			console.log(output);
		}
	}

} catch (error) {
	console.error(error.message);
}
