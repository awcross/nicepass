const test = require('ava');
const execa = require('execa');

test('check length', async t => {
	const {stdout} = await execa('./cli.js', [10]);

	t.is(typeof stdout, 'string');
	t.is(stdout.split(' ').length, 5);
});

test('check hex', async t => {
	const {stdout} = await execa('./cli.js', ['1a5a5a74c970dda2']);
	t.is(stdout, 'byroad glorification showcase tacking');
});

test('check phrase', async t => {
	const {stdout} = await execa('./cli.js', ['faunae poorish petrographic woodenware']);
	t.is(stdout, '4cc5a575a003fd2b');
});
