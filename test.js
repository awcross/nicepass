import test from 'ava';
import execa from 'execa';

test('check length', async t => {
	const {stdout} = await execa('./cli.js', [8]);

	t.is(typeof stdout, 'string');
	t.is(stdout.split(' ').length, 4);
});

test('check hex', async t => {
	t.is(await execa.stdout('./cli.js', ['1a5a5a74c970dda2']), 'byroad glorification showcase tacking');
});

test('check phrase', async t => {
	t.is(await execa.stdout('./cli.js', ['faunae poorish petrographic woodenware']), '4cc5a575a003fd2b');
});
