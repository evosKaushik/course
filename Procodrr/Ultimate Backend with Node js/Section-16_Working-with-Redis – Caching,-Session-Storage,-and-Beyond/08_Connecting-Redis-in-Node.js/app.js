import { createClient } from "redis";

const redisClient = createClient();

// connect first
await redisClient.connect();

// attach custom method to instance
redisClient.setJSON = async function (key, value) {
  return await this.set(key, JSON.stringify(value));
};

redisClient.getJSON = async function (key) {
  const data = await this.get(key);
  return JSON.parse(data);
};

// test data
const user = {
  name: "Kaushik",
  age: 16,
  email: "kaushik@gmail.com",
};

await redisClient.setJSON("user", user);

const result = await redisClient.getJSON("user");

console.log(result);

await redisClient.quit();