import theArray from './analyzeArray';

test("returns an object with properties", () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  expect(theArray([1,8,3,4,2,6])).toEqual(object);
});
