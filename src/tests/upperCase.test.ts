import upperCase from "../converters/upperCase";

test("should uppercase as space-separated words", () => {
	expect(upperCase("foo Bar")).toBe("FOO BAR");
	expect(upperCase("foo bar")).toBe("FOO BAR");
	expect(upperCase("FOO BAR")).toBe("FOO BAR");
});
