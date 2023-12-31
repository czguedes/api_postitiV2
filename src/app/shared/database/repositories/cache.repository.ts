import { RedisConnection } from "../../../../main/database/redis.connection";

export class CacheRepository {
    private redis = RedisConnection.connection;
    public async get<T>(key: string): Promise<T | null> {
        const result = await this.redis.get(key);
        if (!result) return null;
        return JSON.parse(result);
    }

    public async set<T>(key: string, value: T): Promise<'OK'> {
        return await this.redis.set(key, JSON.stringify(value));
    }

    public async delete(key: string): Promise<number> {
        return await this.redis.del(key);
    }
}