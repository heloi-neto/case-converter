import words from '../lib/utils/words';

const reQuotes = /['\u2019]/g;

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @see camelCase, lowerCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 */
const kebabCase = (string: string) =>
  words(string.replace(reQuotes, '')).reduce(
    (result, word, index) => result + (index ? '-' : '') + word.toLowerCase(),
    ''
  );

export default kebabCase;
