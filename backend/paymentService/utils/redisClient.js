const redis = require('redis');
const client = redis.createClient({
    url: 'redis://localhost:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

module.exports = client;
