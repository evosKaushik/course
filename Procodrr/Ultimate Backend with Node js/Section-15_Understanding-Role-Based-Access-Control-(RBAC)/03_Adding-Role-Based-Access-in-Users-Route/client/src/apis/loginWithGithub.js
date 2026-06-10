const BASE_URL = "http://localhost:4000";
const loginWithGithub = async (idToken) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/github`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
      credentials: "include"
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default loginWithGithub;
