const button = document.querySelector("button");

const clientId =
  "761529584102-cu9i5gvl4vdfjkqdjfjpcb19rhfumqh1.apps.googleusercontent.com";

const redirectUrl = "http://localhost:5500/callback.html";

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=id_token&nonce=123&scope=openid%20email%20profile`;

button.addEventListener("click", () => {
  window.open(authUrl, "auth-popup", "width=500,height=600");
});

window.addEventListener("message", async ({ data }) => {
  if (data.message === "success") {
    location.href = "/";
  } else {
    const para = document.createElement("p");
    para.innerText = "Something went wrong!";
    document.body.appendChild(para);
    setTimeout(() => {
      para.remove();
    }, 2000);
  }
});
