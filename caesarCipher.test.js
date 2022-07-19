import { caesarCipher } from "./caesarCipher";

test("encodes a string based on the shift factor", () => {
  expect(caesarCipher("I.. am.. your father!", 888)).toEqual("M.. eq.. csyv jexliv!");
});

