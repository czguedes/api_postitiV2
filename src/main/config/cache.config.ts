import { Redis } from "ioredis";
import { redisEnvs } from "../../app/envs/redisEnvs";


export const redis = new Redis({
    host: redisEnvs.host,
    username: redisEnvs.user,
    password: redisEnvs.password,
    port: Number(redisEnvs.port)
})