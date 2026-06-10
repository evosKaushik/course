const BASE_URL = "http://localhost:4000";
export const fetchAllUsersApi = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      credentials: "include",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
