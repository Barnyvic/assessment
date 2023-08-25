const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
   "\\.(css|less|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
