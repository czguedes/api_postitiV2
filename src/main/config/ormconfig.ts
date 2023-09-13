import "dotenv/config";
import { DataSource } from "typeorm";
import { envServer } from "../../app/envs/serverEnvs";

const isProduction = envServer.nodeEnv?.toLocaleLowerCase() === 'developer'
const rootDir = isProduction ? 'dist' : 'src';

export const ormConfig = new DataSource({
    type: "postgres",
    url: envServer.dbUrl,
    synchronize: false,
    logging: false,
    entities: [rootDir + '/app/shared/entities/**/*'],
    migrations: [rootDir + '/app/shared/migrations/**/*'],
    ssl: {
        rejectUnauthorized: false,
    },
});