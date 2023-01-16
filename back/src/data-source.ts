import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { UserAdmin } from "./entity/UserAdmin"

export const AppDataSource = new DataSource({
    type: "mongodb",
    port: 27017,
    username: "ramiro",
    password: "123456",
    useUnifiedTopology: true,
    synchronize: true,
    logging: true,
    entities: [User, UserAdmin],
    migrations: [],
    subscribers: [],
})
