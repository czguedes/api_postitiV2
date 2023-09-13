import 'dotenv/config';
import "reflect-metadata";
import { envServer } from '../app/envs/serverEnvs';
import { serverStarter } from './config';
import { RedisConnection } from './database/redis.connection';
import { DatabaseConnection } from './database/typeorm.connection';

Promise.all([DatabaseConnection.connect(), RedisConnection.connect()])

    .then(() => {
        const app = serverStarter()
        app.listen(envServer.porta, () => console.log('Servidor iniciado na porta', envServer.porta));
    })
    .catch((erro) => {
        console.log(erro);

    })
