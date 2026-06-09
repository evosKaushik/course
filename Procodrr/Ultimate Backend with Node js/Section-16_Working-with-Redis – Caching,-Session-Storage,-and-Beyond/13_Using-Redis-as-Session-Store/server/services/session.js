import redisClient from "../config/redis.js";

export const addSessionToRedis = async (sessionId, payload = {}) => {
  const redisSessionId = `session:${sessionId}`;
  try {
    await redisClient.json.set(redisSessionId, "$", payload);
    await redisClient.expire(redisSessionId, 60 * 60 * 24 * 7);
  } catch (error) {
    console.error(error.message);
  }
};
