import { OAuth2Client } from "google-auth-library";


const redirectUri = "http://localhost:4000/auth/google/callback";

// Setup Google Client
const client = new OAuth2Client({
  clientId,
  clientSecret,
  redirectUri,
});

export function generateGoogleAuthUrl() {
  return client.generateAuthUrl({
    scope: ["email", "profile", "openid"],
    prompt: "consent",
    // login_hint: "anuragprocodrr@gmail.com",
  });
}

export async function fetchUserFromGoogle(code) {
  console.log("Running fetchIdToken function...");

  const { tokens } = await client.getToken(code);
  console.log(tokens);

  const loginTicket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: clientId,
  });

  const userData = loginTicket.getPayload();
  return userData;
}
