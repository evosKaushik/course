import { createClient } from "redis";

const redisClient = createClient();
await redisClient.connect();

redisClient.getJSON = async function (key) {
    try {
  const data = await this.get(key);
  return JSON.parse(data);
    
  } catch (error) {
    console.log(error)
  }
};

redisClient.setJSON = async function (key, data) {
  try {
    return await this.set(key, JSON.stringify(data));
  } catch (error) {
    console.log(error)
  }
};

export default redisClient;
