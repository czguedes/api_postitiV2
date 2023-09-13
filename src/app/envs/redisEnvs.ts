import 'dotenv/config'

export const redisEnvs = {
    host: process.env.REDIS_HOST!,
    port: process.env.REDIS_PORT!,
    user: process.env.REDIS_USER!,
    password: process.env.REDIS_PASS!
}