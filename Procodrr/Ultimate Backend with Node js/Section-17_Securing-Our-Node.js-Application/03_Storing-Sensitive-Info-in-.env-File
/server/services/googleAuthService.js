import { OAuth2Client } from "google-auth-library";

const clientId =
  process.env.GOOGLE_CLIENT_ID

const client = new OAuth2Client({
  client_id: clientId,
});

export const verifyIdToken = async (idToken) => {
  try {
    const loginTicket = await client.verifyIdToken({
      idToken,
      audience: clientId,
    });
    const userData = loginTicket.getPayload();
    return userData;
  } catch (error) {
    console.log(error);
    return null;
  }
};
