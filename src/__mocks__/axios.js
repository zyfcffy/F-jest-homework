export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "ABC" } })),
  post: jest.fn(() => Promise.resolve({ data: { name: "ABC" } })),
};
