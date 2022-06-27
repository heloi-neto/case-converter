import clipboard from "clipboardy";
import { upperCase, camelCase, kebabCase, lowerCase, snakeCase, startCase } from "./converters";

const converters = {
	"upper-case": upperCase,
	"camel-case": camelCase,
	"kebab-case": kebabCase,
	"lower-case": lowerCase,
	"snake-case": snakeCase,
	"start-case": startCase,
};

const main = () => {
	console.log(process.argv);

	if (process.argv.length <= 2) {
		throw new Error(`Not enough arguments. Usage:`);
	}

	const converterKey = process.argv[2];

	if (!converters.hasOwnProperty(converterKey)) {
		throw new Error(`No converter known by the name "${converterKey}"`);
	}

	const converter = converters[converterKey as keyof typeof converters];

	const string = clipboard.readSync();

	clipboard.writeSync(converter(string));
};

main();
