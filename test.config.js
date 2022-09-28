module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "./app/__tests__/^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["./node_modules/"],
};
