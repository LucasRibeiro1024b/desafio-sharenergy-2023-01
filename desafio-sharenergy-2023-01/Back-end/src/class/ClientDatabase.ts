import BaseDatabase from "./BaseDatabase";
import { Client } from "./Client";

export class ClientDatabase extends BaseDatabase{
    TABLE_NAME: string = "Clients"

    public async getAllClients(){
        const result = await super.getAll()
        return result
    }

    public async createClient(item: Client){
        await super.create(item)
    }

    public async getClient(id: string){
        const result = super.getUser(id)
        return result
    }

    public async deleteClient(id: string){
        await super.deleteUser(id)
    }

    public async editClient(id: string, column: string, newInfo: any){
        await super.editUser(id, column, newInfo)
    }
}

export default ClientDatabase