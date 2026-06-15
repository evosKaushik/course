import { createClient } from "redis";

const redisClient = createClient();

await redisClient.connect();

await redisClient.hSet("userHash2", {
  name: "bob",
  age: 30,

});

await redisClient.quit();
