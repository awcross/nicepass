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
    $ nicepass <string|number>

  Examples
    $ nicepass
    circularly transportal hypotenuse browsing framework

    $ nicepass 10
    workaholism washday liposoluble pinyon crosstalk

    $ nicepass 79446c84988885a444af
    lauderdale indisposition overgraze microcosm encomia

    $ nicepass 'wigglier singing bicyclist clasher barrow haltering twirler asap'
    fba4cb24113123240d975fcfea1d085d
```


## Thanks

All credit goes to [yan](https://diracdeltas.github.io/) for creating [niceware](https://github.com/diracdeltas/niceware), the API for this module.


## License

MIT © [Alex Cross](http://alexcross.io)
