import { DataSource } from "typeorm";
import config from "../config/ormconfig";

export const dataSource = new DataSource(config);