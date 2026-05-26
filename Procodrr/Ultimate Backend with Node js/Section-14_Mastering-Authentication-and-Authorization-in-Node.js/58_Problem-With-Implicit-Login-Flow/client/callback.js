const idToken = new URLSearchParams(location.hash.substring(1)).get("id_token");
if (idToken) {
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
    window.opener.postMessage({ message: "success" });
    window.close();
  }
} else {
  window.opener.postMessage({ message: "failure" });
  window.close();
}
