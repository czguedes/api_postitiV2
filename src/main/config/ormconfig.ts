import "dotenv/config";
import { DataSourceOptions } from "typeorm";
import { envServer } from "../../app/envs";

const isProduction = envServer.nodeEnv?.toLocaleLowerCase() === 'developer'
const rootDir = isProduction ? 'dist' : 'src';

const config: DataSourceOptions = {
    type: "postgres",
    url: envServer.dbUrl,
    synchronize: false,
    logging: false,
    entities: [rootDir + '/app/shared/entities/**/*'],
    migrations: [rootDir + '/app/shared/migrations/**/*'],
    ssl: {
        rejectUnauthorized: false,
    },
};
export default config;