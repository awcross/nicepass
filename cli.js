#!/usr/bin/env node
'use strict';
const meow = require('meow');
const niceware = require('niceware');

const cli = meow(`
	Usage
	  $ nicepass <size> [...]

	Options
	  --passphrase  Convert a phrase back into the original byte array
	  --pretty  Output the result as a string

	Examples
	  $ nicepass
	  [ 'plummet', 'observed', 'electra', 'dripping' ]

	  $ nicepass --passphrase='selfheal katzenjammer ambidexterity correcter puffer discern'
	  <Buffer c5 a5 75 a0 03 fd 2b ea ac bc 3a 65>
`, {
	boolean: 'pretty'
});

try {
	if (cli.flags.passphrase) {
		console.log(niceware.passphraseToBytes(cli.flags.passphrase.split(' ')));

	} else {
		let size = 8;

		if (cli.input.length > 0) {
			size = cli.input[0];

			if (typeof size === 'string') {
				throw new TypeError('Expected a number');
			}
		}

		const passphrase = niceware.generatePassphrase(size);

		if (cli.flags.pretty) {
			console.log(passphrase.join(' '));

		} else {
			console.log(passphrase);
		}
	}

} catch (err) {
	console.error(err.message);
}
