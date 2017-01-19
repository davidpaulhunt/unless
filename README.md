# UnlessAsync

Async `unless` conditional flow inspired by Ruby.

## Installation

`npm i -S unless-async`

## Usage

```js
const unless = require('unless-async');

const foo = false;
unless(foo, () => console.log('Foo is false so I am called!'));

const bar = true;
unless(bar, () => console.log('Bar is true so I am NOT called!'));
```

## Contribute
Feel free to fork and PR.

## License
MIT
