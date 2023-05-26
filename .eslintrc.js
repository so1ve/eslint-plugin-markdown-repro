module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["markdown"],
  overrides: [
    {
      files: ["**/*.md"],
      // processor: "markdown/markdown", // Comment out this line
      parser: require.resolve("./parser.js")
    },
  ],
  rules: {
    semi: "error"
  }
};