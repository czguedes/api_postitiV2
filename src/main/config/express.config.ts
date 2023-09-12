import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import "reflect-metadata";
import { appInicializer } from '../server/server';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

appInicializer(app)