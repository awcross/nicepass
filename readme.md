# nicepass [![Build Status](https://travis-ci.org/awcross/nicepass.svg?branch=master)](https://travis-ci.org/awcross/nicepass)

> Generate human-readable passphrases

This is a CLI that uses [niceware](https://github.com/diracdeltas/niceware) to generate readable passwords or convert random bytes into a passphrase.


## Install

```
$ npm install -g nicepass
```


## Usage

```
$ nicepass --help

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
```


## Thanks

All credit goes to [yan](https://diracdeltas.github.io/) for creating [niceware](https://github.com/diracdeltas/niceware), the API for this module.


## License

MIT © [Alex Cross](http://alexcross.io)
