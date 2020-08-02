module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["<rootDir>/src/test"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"]
};
