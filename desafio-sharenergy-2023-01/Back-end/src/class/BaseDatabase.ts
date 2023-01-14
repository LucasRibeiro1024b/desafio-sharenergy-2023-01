import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDatabase {
    static connection = knex({
        client: "mysql",
        connection:{
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            multipleStatements: true
        }
    })

    abstract TABLE_NAME: string;

    protected async getAll(){
        const result = await BaseDatabase.connection(this.TABLE_NAME).select("*")
        return result
    }

    protected async create(item: any){
        await BaseDatabase.connection(this.TABLE_NAME).insert(item)
    }

    protected async getUser(id: string){
        const result = await BaseDatabase.connection(this.TABLE_NAME).select("*").whereILike("id", id)
        return result
    }

    protected async deleteUser(id: string){
        await BaseDatabase.connection(this.TABLE_NAME).whereILike("id", id).del()
    }

    protected async editUser(id: string, column: string, newInfo: any){
        await BaseDatabase.connection(this.TABLE_NAME).whereLike("id", id).update(column, newInfo)
    }
}

export default BaseDatabase