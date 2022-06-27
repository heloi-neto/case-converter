import upperFirst from "../lib/utils/upperFirst";
import words from "../lib/utils/words";

const reQuotes = /['\u2019]/g;

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('foo bar')
 * // => 'fooBar'
 *
 * camelCase('FOO BAR')
 * // => 'fooBar'
 */
const camelCase = (string: string) =>
	words(string.replace(reQuotes, "")).reduce((result, word, index) => {
		word = word.toLowerCase();
		return result + (index ? upperFirst(word) : word);
	}, "");

export default camelCase;
