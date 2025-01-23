const cloneArray = require("./cloneArray");
test("should return a new array", () => {
  const originalArray = [1, 2, 3];
  const clonedArray = cloneArray(originalArray);
  expect(clonedArray).not.toBe(originalArray);
  expect(clonedArray).toEqual(originalArray);
});
