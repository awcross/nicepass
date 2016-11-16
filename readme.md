# nicepass [![Build Status](https://travis-ci.org/awcross/nicepass.svg?branch=master)](https://travis-ci.org/awcross/nicepass)

> Generate human-readable passphrases

Uses [niceware](https://github.com/diracdeltas/niceware) underneath to generate or convert random bytes into passphrases.


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


## Related

- [niceware](https://github.com/diracdeltas/niceware) - API for this module



## License

MIT © [Alex Cross](http://alexcross.io)
