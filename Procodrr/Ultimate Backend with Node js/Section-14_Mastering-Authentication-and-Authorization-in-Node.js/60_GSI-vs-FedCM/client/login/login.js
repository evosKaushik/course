const googleLoginBtn = document.getElementById("googleLogin");

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "761529584102-cu9i5gvl4vdfjkqdjfjpcb19rhfumqh1.apps.googleusercontent.com",
    callback: (response) => {
      console.log(response);
      if (response.credential) {
        loginUserWithIdToken(response.credential);
      } else {
        alert("Something went wrong");
      }
    },
  });
  google.accounts.id.prompt();
  google.accounts.id.renderButton(googleLoginBtn, {
    theme: "filled_blue",
    shape: "pill",
  });
};

async function loginUserWithIdToken(idToken) {
  console.log("Id Token", idToken);
  const baseURL = "http://localhost:3000";
  const response = await fetch(`${baseURL}/auth/google`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idToken }),
  });

  if (response.status === 200) {
    location.href = "/";
  }
}
