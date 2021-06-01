const clipboardy = require('clipboardy');
// const snakeCase = require('snake-case');
// const camelCase = require('camelcase');
const { toKebabCase, toTitleCase } = require('@corex/string-util');
const {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} = require('change-case');

// include alternatingCase, inverseCase, toCamelCase, toSnakeCase, toKebabCase? (https://en.wikipedia.org/wiki/Letter_case)

String.prototype.toCamelCase = function () {
  return camelCase(this.slice());
};

String.prototype.toSnakeCase = function () {
  return snakeCase(this.slice());
};

String.prototype.toKebabCase = function () {
  return toKebabCase(this.slice());
};

/**
 * The first word of the sentence is capitalised, as well as proper nouns and other words as required
 * by a more specific rule. This is generally equivalent to the baseline universal standard of formal
 * English orthography.
 */
String.prototype.toSentenceCase = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

/**
 *
 *
 *
 */
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  });
};

/**
 * Title Case: the first letter of MAJOR words are capitalized
 * (Words like "the", "a", "an", etc... are not capitalized if they don't begin the sentence).
 * Title case should not be confused with proper case, which is the
 * capitalization of every first letter of every word.
 */
String.prototype.toTitleCase = function () {
  return toTitleCase(this.slice());
};

const toCase = process.argv[2];

getConvertedStr = (clipboardStr) => {
  return clipboardStr[toCase]() ?? clipboardStr;
};

clipboardy.writeSync(getConvertedStr(clipboardy.readSync()));
