module.exports = {
  get: jest.fn(() => Promise.resolve({ data: { id: 1, username: "Bret" } })),
};
