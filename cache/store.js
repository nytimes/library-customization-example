'use strict'

// this is a sample cache integration using redis instead of the default in-memory cache
const cacheManager = require('cache-manager')
const redisStore = require('cache-manager-ioredis')
const log = require('../../server/logger')

// If redis URI found, use redis, otherwise fall back to in memory cache
const cache = process.env.REDIS_URI ? cacheManager.caching({
  store: redisStore,
  host: process.env.REDIS_URI,
  password: process.env.REDIS_PASS,
  port: 6379,
  keyPrefix: 'your-prefix-here',
  db: 0,
  ttl: 0 // default ttl is infinite
}) : cacheManager.caching({ store: 'memory' })

  // if we are using a redis instance, listen for errors
if (process.env.REDIS_URI) {
  const redisClient = cache.store.getClient()
  redisClient.on('error', (err) => log.error('ERROR FROM REDIS CLIENT:', err))
}

module.exports = cache
