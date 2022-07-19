import { reverseString } from './reverseString';

test("takes a string and returns it reversed", () => {
  expect(reverseString("Week")).toEqual("keeW");
  expect(reverseString("Greetings from Earth")).toEqual("htraE morf sgniteerG")
});