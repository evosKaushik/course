import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'z1KWvC2Qs17Cb6iK2YMBWHvyDzRFkT4f',
    socket: {
        host: 'sun-evolved-parchment-19320.db.redis.io',
        port: 13796
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();



