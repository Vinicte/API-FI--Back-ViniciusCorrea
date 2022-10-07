import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserVac } from "./entity/UserVac"
import { SystemVac } from "./entity/SystemVac"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "cwb@2022",
    database: "Faculdade",
    synchronize: true,
    logging: true,
    entities: [UserVac],
    subscribers: [],
    migrations: [],
})
