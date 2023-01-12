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
}

export default ClientDatabase