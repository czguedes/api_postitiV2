import "dotenv/config";
import { DataSourceOptions } from "typeorm";

const isProduction = process.env.NODE_ENV?.toLocaleLowerCase() === 'developer'
const rootDir = isProduction ? 'dist' : 'src';

const config: DataSourceOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [rootDir + '/database/entities/**/*'],
    migrations: [rootDir + '/database/migrations/**/*'],
    ssl: {
        rejectUnauthorized: false,
    },
};
export default config;