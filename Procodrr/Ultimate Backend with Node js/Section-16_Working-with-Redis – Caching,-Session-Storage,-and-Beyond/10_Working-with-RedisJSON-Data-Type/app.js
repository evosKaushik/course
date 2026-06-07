import redisClient from "./redis.js";

// const result = await redisClient.setJSON("test", { user: "test" });
const result = await redisClient.json.set("user:1", "$.address", {
  name: "UP",
});

console.log(result);

redisClient.quit();
