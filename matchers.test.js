test("Check all matechers", () => {
  expect(1 + 1).toBe(2);
  expect(1 + 1).toBeGreaterThanOrEqual(2);
  expect(1 + 1).toBeLessThanOrEqual(3);
  expect(1 + 1).not.toBe(3);
  expect(1 + 1).not.toBeGreaterThan(2);
  expect(1 + 1).toEqual(2);
  expect(1 + 1).not.toEqual(3);
  expect(1 + 1).toBeTruthy();
  expect(1 + 1).toBeGreaterThan(1);
  expect(1 + 1).toBeLessThan(3);
  expect(1 + 1).not.toContain(3);
  expect(1 + 1).toBeCloseTo(2.001, 0.001);
});
