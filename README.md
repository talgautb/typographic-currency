# typographic-currency

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Use the correct symbol of currency

## Install

    npm install --save typographic-currency

## Usage

Use `typographic-currency` to replace name of currency with symbols.

```js
import currency from 'typographic-currency';

currency('Tickets cost 20 usd'); // Tickets cost 20 $

currency('Our house valued at one million KZT'); // Our house valued at one million ₸
```


## License

MIT © [talgautb](http://gtalk.kz)

[npm-url]: https://npmjs.org/package/typographic-currency
[npm-image]: https://img.shields.io/npm/v/typographic-currency.svg?style=flat-square

[travis-url]: https://travis-ci.org/talgautb/typographic-currency
[travis-image]: https://img.shields.io/travis/talgautb/typographic-currency.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/talgautb/typographic-currency
[coveralls-image]: https://img.shields.io/coveralls/talgautb/typographic-currency.svg?style=flat-square

[depstat-url]: https://david-dm.org/talgautb/typographic-currency
[depstat-image]: https://david-dm.org/talgautb/typographic-currency.svg?style=flat-square
