import { createClient } from "redis";

const client = createClient({
  username: "default",
  password: "admin",
});

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

await client.quit();
