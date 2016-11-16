import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', [8, '--pretty']);

	t.is(typeof stdout, 'string');
	t.is(stdout.split(' ').length, 4);
});

test('--passphrase', async t => {
	const phrase = 'byroad glorification showcase tacking';
	const bytes = '<Buffer 1a 5a 5a 74 c9 70 dd a2>';

	t.is(await execa.stdout('./cli.js', ['--passphrase=' + phrase]), bytes);
});
