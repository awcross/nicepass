#!/usr/bin/env node
'use strict';
const meow = require('meow');
const niceware = require('niceware');

const cli = meow(`
	Usage
	  $ nicepass <byte-size> [...]

	Options
	  --passphrase  Convert a phrase to hex
	  --raw  Output the result as the original value

	Examples
	  $ nicepass 8
	  plummet observed electra dripping

	  $ nicepass --passphrase='wigglier singing bicyclist clasher barrow haltering twirler asap'
	  fba4cb24113123240d975fcfea1d085d

	  $ nicepass --hex='05bd809ef433872f'
	  annoying malleably vapory mirk
`, {
	boolean: 'raw'
});

try {
	if (cli.flags.passphrase) {
		const str = cli.flags.passphrase.toLowerCase().replace(/['"]+/g, '');
		const byteArray = niceware.passphraseToBytes(str.split(' '));

		if (cli.flags.raw) {
			console.log(byteArray);

		} else {
			let pretty = '';

			for (let i = 0, j = byteArray.length; i < j; i++) {
				let char = byteArray[i].toString(16);

				if (char.length === 1) {
					char = `0${char}`;
				}

				pretty += char;
			}

			console.log(pretty);
		}

	} else if (cli.flags.hex) {
		const str = cli.flags.hex.toLowerCase().replace(/[,\s]/g, '');
		const buffer = Buffer.from(str, 'hex');
		const arr = niceware.bytesToPassphrase(buffer);

		if (cli.flags.raw) {
			console.log(arr);

		} else {
			console.log(arr.join(' '));
		}

	} else {
		let size = 8;

		if (cli.input.length > 0) {
			size = cli.input[0];

			if (typeof size === 'string') {
				throw new TypeError('Expected a number');
			}
		}

		const arr = niceware.generatePassphrase(size);

		if (cli.flags.raw) {
			console.log(arr);

		} else {
			console.log(arr.join(' '));
		}
	}

} catch (err) {
	console.error(err.message);
}
