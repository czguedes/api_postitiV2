import 'dotenv/config';
import { Express } from 'express';
import "reflect-metadata";
import { pgHelper } from '../database/pg-helper';
import { routesApp } from '../routes';

export function appInicializer(app: Express) {


    pgHelper
        .connect()
        .then(() => {
            app.listen(process.env.PORT, () => console.log('Servidor iniciado na porta', process.env.PORT));
        })
        .catch((erro) => {
            console.log(erro);

        })

    app.use(routesApp);
}