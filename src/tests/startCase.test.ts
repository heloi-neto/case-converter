import startCase from "../converters/startCase";

test("should uppercase only the first character", () => {
	expect(startCase("foo bar")).toBe("Foo bar");
	expect(startCase("foo Bar")).toBe("Foo bar");
	expect(startCase("FOO BAR")).toBe("Foo bar");
	expect(startCase("console.log(string);")).toBe("Console.log(string);");
});
