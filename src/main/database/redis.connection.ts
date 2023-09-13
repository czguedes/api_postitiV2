import Redis from "ioredis";
import { redisEnvs } from '../../app/envs/redisEnvs';

export class RedisConnection {
    private static _connection: Redis;
    public static async connect() {
        if (!this._connection) {
            this._connection = new Redis({
                host: redisEnvs.host,
                username: redisEnvs.user,
                password: redisEnvs.password,
                port: Number(redisEnvs.port)
            });
        }

        console.log("Redis is connected.");
    }
    public static get connection() {
        if (!this._connection) {
            throw new Error("Redis is not connected.");
        }

        return this._connection;
    }
}