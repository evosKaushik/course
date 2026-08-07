const button = document.querySelector("button");

const redirectURL = "http://localhost:5500/";
// const payload = `code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectURL}&grant_type=authorization_code`;
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectURL}&response_type=code&scope=openid%20email%20profile`;


button.addEventListener("click", () => {
  window.open(authUrl, "auth-popup", "left=0,top=0,width=500,height=600");
});

window.addEventListener("message", ({ data }) => {
  console.log(data);
  fetchIdToken(data.code)
});

if (window.name === "auth-popup") {
  const code = new URLSearchParams(location.search).get("code");
  if (code) {
    window.opener.postMessage({code});
    window.close();
  }
}

async function fetchIdToken(code) {
  const payload = `code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectURL}&grant_type=authorization_code`;
  try {
    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    });
    const data = await res.json();
    if (data.error) {
      console.log("Error occurred");
      console.log(data);
      return;
    }
    const userToken = data.id_token.split(".")[1];
    const user = JSON.parse(atob(userToken));
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}