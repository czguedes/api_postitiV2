import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import "reflect-metadata";
import { rotasApp } from '.';


export function serverStarter() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());

    rotasApp(app)

    return app
}
