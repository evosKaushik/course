const button = document.querySelector("button");



const redirectUrl = "http://localhost:5500/callback.html";

const scope = encodeURIComponent("openid email profile");

const authUrl =
  `https://accounts.google.com/o/oauth2/v2/auth` +
  `?response_type=code` +
  `&client_id=${clientId}` +
  `&redirect_uri=${redirectUrl}` +
  `&scope=${scope}`;

button.addEventListener("click", () => {
  window.open(authUrl, "auth-popup", "width=500,height=600");
});

window.addEventListener("message", ({ data, origin }) => {
  // if (origin !== redirectUrl) return;
  console.log(data.code);

  if (data.code) {
    fetchIdToken(data.code);
  }
});



async function fetchIdToken(code) {
  const payload =
    `code=${code}` +
    `&client_id=${clientId}` +
    `&client_secret=${clientSecret}` +
    `&redirect_uri=${redirectUrl}` +
    `&grant_type=authorization_code`;

  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    });

    const data = await response.json();

    if (data.error) {
      console.log("Google Error:");
      console.log(data);
      return;
    }

    const tokenPart = data.id_token.split(".")[1];

    const base64 = tokenPart.replace(/-/g, "+").replace(/_/g, "/");

    const userData = JSON.parse(atob(base64));

    console.log("Token Response:");
    console.log(data);

    console.log("User Data:");
    console.log(userData);
  } catch (err) {
    console.log("Fetch Error:");
    console.log(err);
  }
}
