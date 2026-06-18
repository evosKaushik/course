import GitHubSDK from "github-auth-library";


const clientId = process.env.GITHUB_CLIENT_ID
const clientSecret = process.env.GITHUB_CLINT_SECRET

const githubAuth = new GitHubSDK(
  clientId,
  clientSecret
);

export default githubAuth