module.exports = {
    rootDir: "./",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
    ],
    testEnvironment: "node",
    testTimeout: 10000,
    verbose: true,
    transform: {
        "^.+\\.(js|ts|tsx)$": "ts-jest",
    },
    globals: {
        "ts-jest": {
            diagnostics: false,
            isolatedModules: true,
            tsconfig: "./tsconfig.json",
        },
    },
    testMatch: [
        "<rootDir>/src/**/?(*.)+(test).[t]s?(x)",
    ],
    testPathIgnorePatterns: [
        "node_modules/",
    ],
    reporters: [
        "default",
    ],
};
