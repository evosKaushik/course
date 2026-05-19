if (window.name === "auth-popup") {
  console.log("Popup opened");

  const code = new URLSearchParams(window.location.search).get("code");

  if (code) {
    window.opener.postMessage({ code }, redirectUrl);
    window.close();
  }
}