import words from '../lib/utils/words';

const reQuotes = /['\u2019]/g;

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * snakeCase('Foo Bar')
 * // => 'foo_bar'
 *
 * snakeCase('fooBar')
 * // => 'foo_bar'
 *
 * snakeCase('foo2bar')
 * // => 'foo_2_bar'
 */
const snakeCase = (string: string) =>
  words(string.replace(reQuotes, '')).reduce(
    (result, word, index) => result + (index ? '_' : '') + word.toLowerCase(),
    ''
  );

export default snakeCase;
