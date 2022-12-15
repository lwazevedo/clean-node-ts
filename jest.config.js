module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
    coverageDirectory: "coverage",
    testEnvironment: 'node',
    transform: {
        ".+\\.ts$": "ts-jest"
    },
    displayName: 'root-tests',
    clearMocks: true,
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    }
}