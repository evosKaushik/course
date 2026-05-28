import { OAuth2Client } from "google-auth-library";

const clientId =
  "761529584102-cu9i5gvl4vdfjkqdjfjpcb19rhfumqh1.apps.googleusercontent.com";

// Setup Google Client
const client = new OAuth2Client({
  clientId,
});

export async function verifyIdToken(idToken) {
  const loginTicket = await client.verifyIdToken({
    idToken,
    audience: clientId,
  });

  const userData = loginTicket.getPayload();
  return userData;

}
