import { Request, Response } from "express"
import ClientDatabase from "../class/ClientDatabase"

const deleteClient = async (req: Request, res: Response)=>{
    let errorCode = 400
    const clientId = req.params.clientId

    try{
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

        clientDB.deleteClient(clientId)

        res.status(200).end()
    }catch(err: any){
        res.status(errorCode).send(err.message)
    }
}

export default deleteClient