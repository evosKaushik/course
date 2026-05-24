import { OAuth2Client } from "google-auth-library";

const clientId =
  "761529584102-cu9i5gvl4vdfjkqdjfjpcb19rhfumqh1.apps.googleusercontent.com";

const redirectUrl = "http://localhost:4000/auth/google/callback";
const client = new OAuth2Client({
  clientId,
  clientSecret,
  redirectUri: redirectUrl,
});

export const authUrl = client.generateAuthUrl({
  scopes: ["profile", "email", "openid"],
  prompt: "consent",
  access_type: "offline"
});

export async function fetchUserFromGoogle(code) {
  const { tokens } = await client.getToken(code);

  console.log(tokens);

  const loginTicket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: clientId,
  });

  const userData = loginTicket.getPayload();
  console.log(userData);
  return userData;
}
