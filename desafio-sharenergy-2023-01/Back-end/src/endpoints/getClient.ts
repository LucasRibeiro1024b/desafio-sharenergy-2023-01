import { Request, Response } from "express"
import ClientDatabase from "../class/ClientDatabase"

const getClient= async (req: Request, res: Response)=>{
    let errorCode = 400
    let clientId = req.params.clientId

    try {
        if(!clientId){
            errorCode= 422
            throw new Error("Client id required.")
        }

        const clientDB = new ClientDatabase()
        const getClients = await clientDB.getAllClients()

        const existingClient = getClients.filter(client => client.id.toString() === clientId)

        if(existingClient.length < 1){
            errorCode= 404
            throw new Error("Client not found.")            
        }

        const result = await clientDB.getClient(clientId)

        res.status(200).send(result)
        
    }catch(err: any){
        res.status(errorCode).send(err.message)
    }
}

export default getClient