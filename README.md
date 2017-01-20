# UnlessAsync

Async `unless` conditional flow inspired by Ruby.

## Why?

Because programming is fun, and implementing what you think you know shows you what you've yet to learn.

## Installation

`npm i -S unless-async`

## Usage

```js
const unless = require('unless-async');

const foo = false;
unless(foo, () => console.log('Foo is false so I am called!'));

const bar = true;
unless(bar, () => console.log('Bar is true so I am NOT called!'));

unless(user.isAuthenticated(), () => authenticate(user))
.then(() => {
  return mail.send(user.email);
});

const isAdmin = User.find(params.userId).then(u => u.isAdmin);

return unless(isAdmin, () => {
  throw new Error('Forbidden');
})
.then(() => Message.find(params));
```

## API
```
unless(
  Promise<any>|boolean condition,
  function action
) -> Promise
```
Creates a promise that is resolved with the given action function when false, otherwise resolves undefined.

## Test
`npm test`

## License
MIT
