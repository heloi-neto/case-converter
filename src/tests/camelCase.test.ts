import camelCase from "../converters/camelCase";

test("should work with numbers", () => {
	expect(camelCase("12 feet")).toBe("12Feet");
	expect(camelCase("enable 6h format")).toBe("enable6HFormat");
	expect(camelCase("enable 24H format")).toBe("enable24HFormat");
	expect(camelCase("too legit 2 quit")).toBe("tooLegit2Quit");
	expect(camelCase("walk 500 miles")).toBe("walk500Miles");
	expect(camelCase("xhr2 request")).toBe("xhr2Request");
});

test("should handle acronyms", () => {
	expect(camelCase("safe HTML")).toBe("safeHtml");
	expect(camelCase("safeHTML")).toBe("safeHtml");

	expect(camelCase("escape HTML entities")).toBe("escapeHtmlEntities");
	expect(camelCase("escapeHTMLEntities")).toBe("escapeHtmlEntities");

	expect(camelCase("XMLHttpRequest")).toBe("xmlHttpRequest");
	expect(camelCase("XmlHTTPRequest")).toBe("xmlHttpRequest");
});
