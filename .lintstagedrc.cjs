module.exports = {
  "*.{js,jsx,cjs,mjs,ts,tsx}": [
    "tsc-files --noEmit",
    "eslint --fix",
    "prettier --write",
  ],
  "*.{js,jsx,cjs,mjs}": ["eslint --fix", "prettier --write"],
  "*.{css,scss,html,json,graphql}": ["prettier --write"],
};
