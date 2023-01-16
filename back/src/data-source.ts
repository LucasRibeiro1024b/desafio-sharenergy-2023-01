import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mongodb",
    port: 27017,
    username: "ramiro",
    password: "123456",
    useUnifiedTopology: true,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
