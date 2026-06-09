import express from "express";
import { createClient } from "redis";

const redisClient = createClient();

await redisClient.connect();

const app = express();

app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const cachedUser = await redisClient.json.get(`user:${userId}`);
  if (cachedUser) {
    res.json(cachedUser);
  } else {
    const userData = await getUser(userId);
    Promise.all([
      redisClient.json.set(`user:${userId}`, "$", userData),
      redisClient.expire(`user:${userId}`, 3600),
    ]);
    res.json(userData);
  }
});

app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  await redisClient.del(`user:${userId}`);
  const updatedUser = await updateUser(userId, userData);
  await redisClient.json.set(`user:${userId}`, "$", updatedUser);
  await redisClient.expire(`user:${userId}`, 3600);

  res.json(updatedUser);
});

app.listen(4000, () => {
  console.log("Server started on 4000");
});

async function getUser(userId) {
  const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
  return await response.json();
}
async function updateUser(userId, userData) {
  const response = await fetch("https://fakestoreapi.com/users/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return await response.json();
}
