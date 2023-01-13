import { Request, Response } from "express"
import ClientDatabase from "../class/ClientDatabase"

const getAllClients = async (req: Request, res: Response)=>{
    let errorCode= 400

    try{
        const clientDB = new ClientDatabase()
        const getClients = await clientDB.getAllClients()

        if(getClients.length < 1){
            errorCode= 400
            throw new Error("Empty list.")
        }

        res.status(200).send(getClients)
    }catch(err: any){
        res.status(errorCode).send(err.message)
    }
}

export default getAllClients