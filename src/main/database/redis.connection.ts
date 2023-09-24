import Redis from "ioredis";
import { redis } from "../config";


export class RedisConnection {

    private static _connection: Redis;

    public static async connect() {
        if (!this._connection) {
            this._connection = redis
        }

        console.log("Redis is connected.");
    }

    public static get connection() {
        if (!this._connection) {
            throw new Error("Redis is not connected.");
        }

        return this._connection;
    }

    public static async destroy() {
        if (!this._connection) {
            throw new Error("Redis is not connected.");
        }

        await this._connection.quit();
        console.log('Redis connection has been shut down.');
    }
}