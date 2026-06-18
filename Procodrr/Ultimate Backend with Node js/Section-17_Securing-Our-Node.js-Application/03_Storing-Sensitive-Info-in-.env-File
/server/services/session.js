import redisClient from "../config/redis.js";

export const addSessionToRedis = async (sessionId, payload = {}) => {
  const redisSessionId = `session:${sessionId}`;
  const allSession = await redisClient.ft.search(
    "userIdIdx",
    `@userId:{${payload.userId}}`,
    {
      RETURN: [],
      
    },
  );
  if(allSession.total >= 2){
    await redisClient.del(allSession.documents[0].id)
  }
  console.log(allSession);
  try {
    await redisClient.json.set(redisSessionId, "$", payload);
    await redisClient.expire(redisSessionId, 60 * 60 * 24 * 7);
  } catch (error) {
    console.error(error.message);
  }
};
