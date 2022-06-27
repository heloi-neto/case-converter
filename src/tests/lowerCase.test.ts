import lowerCase from "../converters/lowerCase";

test("should lowercase as space-separated words", () => {
	expect(lowerCase("Foo Bar")).toBe("foo bar");
	expect(lowerCase("foo Bar")).toBe("foo bar");
	expect(lowerCase("FOO BAR")).toBe("foo bar");
});

test("should work with accents and other characters", () => {
	expect(lowerCase("Foo Bár")).toBe("foo bár");
	expect(lowerCase("fõo B=r")).toBe("fõo b=r");
	expect(lowerCase("F1O BÂR")).toBe("f1o bâr");
});
