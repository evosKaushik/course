const code = new URLSearchParams(location.search).get("code");

console.log(code);

if (code) {
  fetchIdToken();
}
async function fetchIdToken() {
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
