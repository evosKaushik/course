import redisClient from "./redis.js";

const result = await redisClient.setJSON("test", { user: "test" });

console.log(result);
