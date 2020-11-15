function forEach(items, callback) {
  items.forEach((item) => callback(item));
}

test("TODO 11", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([1, 2], mockCallback);
  // TODO 11: add assertion
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledTimes(2);
  expect(mockCallback).toHaveBeenCalledWith(1);
  expect(mockCallback).toHaveBeenCalledWith(2);
  expect(mockCallback).toHaveReturnedTimes(2);
  expect(mockCallback).toHaveReturnedWith(43);
  expect(mockCallback).toHaveReturnedWith(44);
});

test("TODO 12", () => {
  const mockFn = jest.fn();
  mockFn
    .mockReturnValueOnce(42)
    .mockReturnValueOnce("string")
    .mockReturnValue(true);

  // TODO 12: to add "expected" value
  expect(mockFn()).toBe(42);
  expect(mockFn()).toBe("string");
  expect(mockFn()).toBe(true);
  expect(mockFn()).toBe(true);
});
