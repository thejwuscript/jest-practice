import { calculator } from './calculator';

test("add() returns 5 when inputs are 2 and 3", () => {
  expect(calculator.add(2, 3)).toEqual(5);
});

test("subtract() takes 10 and 3 and returns 7", () => {
  expect(calculator.subtract(10, 3)).toEqual(7);
});

test("divide() takes 20 and 3 and returns 6.7", () => {
  expect(calculator.divide(20, 3)).toBeCloseTo(6.6667);
})