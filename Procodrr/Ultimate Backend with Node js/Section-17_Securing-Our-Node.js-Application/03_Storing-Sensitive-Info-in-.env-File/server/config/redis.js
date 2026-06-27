import { createClient } from "redis";

const redisClient = createClient({
  password: "admin"
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
  process.exit(1);
});

await redisClient.connect();

export default redisClient;
