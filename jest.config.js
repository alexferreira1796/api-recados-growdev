module.exports = {
  // arquivos que entrarão na estatística de coverage
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  // pasta onde serão colocados os relatórios
  coverageDirectory: "coverage",
  // pastas que serão ignoradas no coverage
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\",
    "<rootDir>/src/core/infra/data/database/migrations",
  ],
  // pasta base de testes
  roots: ["<rootDir>/tests"],
  // ambiente que será executado
  testEnvironment: "node",
  // transpila Testes para JS
  transform: {
    ".+\\.ts$": "ts-jest", // buscando tudo que termina com ts e usando ts-jest
  },  
  setupFilesAfterEnv: ['./jest.setup.js'],
};