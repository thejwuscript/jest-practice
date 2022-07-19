import capitalize from './capitalize';

test("returns a string with the first letter capitalized", () => {
  expect(capitalize("react")).toEqual("React");
});
