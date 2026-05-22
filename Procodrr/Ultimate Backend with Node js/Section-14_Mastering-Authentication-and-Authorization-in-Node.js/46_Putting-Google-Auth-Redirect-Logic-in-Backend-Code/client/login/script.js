const button = document.querySelector("button");
const baseURL = "http://localhost:4000";

const clientId =
  "594555697613-18p3s2o6hl7mvc3gj0o2a2bg7b27tj9m.apps.googleusercontent.com";
const redirectUrl = "http://localhost:4000/auth/google/callback";
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&scope=openid email profile&redirect_uri=${redirectUrl}`;

button.addEventListener("click", () => {
  window.open(
    "http://localhost:4000/auth/google",
    "auth-popup",
    "width=500,height=600"
  );
});

window.addEventListener("message", async ({ data }) => {
  if (data.message === "success") location.href = "/";
});
