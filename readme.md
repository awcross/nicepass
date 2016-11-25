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
    $ nicepass <size> [...]

  Options
    --passphrase  Convert a phrase back into the original byte array
	--pretty  Output the result as a string

  Examples
    $ nicepass
    [ 'plummet', 'observed', 'electra', 'dripping' ]

    $ nicepass --passphrase='selfheal katzenjammer ambidexterity correcter puffer discern'
    <Buffer c5 a5 75 a0 03 fd 2b ea ac bc 3a 65>
```


## Credit

Thanks to [yan](https://diracdeltas.github.io/) for creating [niceware](https://github.com/diracdeltas/niceware), which this module relies upon.


## License

MIT © [Alex Cross](http://alexcross.io)
