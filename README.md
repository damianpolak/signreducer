# signreducer
> Fast way to remove multiple duplicate special characters between words in string:\
--Some---good--example → some-good-example

## Usage
```js
const signreducer = require('signreducer.js');

signreducer('this-----is---my---------example---', '-');
// returns 'this-is-my-example'

signreducer('foo____bar___foo_________and__bar', '_');
// returns 'foo_bar_foo_and_bar'

```

## License

MIT © Damian Polak
