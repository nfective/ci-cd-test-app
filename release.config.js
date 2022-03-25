module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/nfective/ci-cd-test-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
