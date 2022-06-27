/**
 * Converts the first character of `string` to upper case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = (string: string) =>
	string.length ? string[0].toUpperCase() + string.slice(1) : string;

export default upperFirst;
