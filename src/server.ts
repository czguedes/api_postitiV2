import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import "reflect-metadata";
import { pgHelper } from './database/pg-helper';
import routesApp from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(routesApp);

pgHelper
    .connect()
    .then(() => {
        app.listen(process.env.PORT, () => console.log('Servidor iniciado na porta', process.env.PORT));
    })
    .catch((erro) => {
        console.log(erro);

    })